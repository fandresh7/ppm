import {
  OverlayRef,
  Overlay,
  OverlayPositionBuilder
} from '@angular/cdk/overlay'
import {
  ComponentType,
  TemplatePortal,
  ComponentPortal
} from '@angular/cdk/portal'
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core'

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective<T> implements OnInit {
  @Input('appTooltip') tooltipContent!: TemplateRef<T> | ComponentType<T>

  private _overlayRef!: OverlayRef

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    if (!this.tooltipContent) return

    const position = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetX: 0,
          offsetY: 8
        },
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetX: 0,
          offsetY: -8
        }
      ])

    this._overlayRef = this.overlay.create({
      positionStrategy: position,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      panelClass: 'custom-tooltip'
    })
  }

  @HostListener('mouseenter')
  _show() {
    if (!this._overlayRef) return

    let containerPortal: TemplatePortal<T> | ComponentPortal<T>

    if (this.tooltipContent instanceof TemplateRef) {
      containerPortal = new TemplatePortal(
        this.tooltipContent,
        this.viewContainerRef
      )
    } else {
      containerPortal = new ComponentPortal(
        this.tooltipContent,
        this.viewContainerRef
      )
    }

    this._overlayRef.attach(containerPortal)
  }

  @HostListener('mouseout')
  _hide() {
    if (!this._overlayRef) return
    this._overlayRef.detach()
  }
}

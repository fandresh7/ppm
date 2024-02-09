import { Dialog } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { Component, HostListener, OnInit, inject } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

import { filter } from 'rxjs'

import { SearchModalComponent } from '../search-modal/search-modal.component'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  router = inject(Router)
  isDialogOpen = false

  constructor(
    public dialog: Dialog,
    public overlay: Overlay
  ) {}

  ngOnInit() {
    this.dialog.afterAllClosed.subscribe(() => {
      this.isDialogOpen = false
    })

    // If the route change and the modal is open, close modal when page has changed
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.isDialogOpen) {
          this.dialog.closeAll()
          this.isDialogOpen = false
        }
      })
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      if (!this.isDialogOpen) this.openDialog()
    }
  }

  openDialog() {
    this.isDialogOpen = true
    this.dialog.open(SearchModalComponent, {
      autoFocus: 'input'
    })
  }
}

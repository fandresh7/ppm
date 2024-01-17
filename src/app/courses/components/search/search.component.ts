import { Dialog } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { Component, HostListener, OnInit } from '@angular/core'
import { SearchModalComponent } from '../search-modal/search-modal.component'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  isDialogOpen = false

  constructor(
    public dialog: Dialog,
    public overlay: Overlay
  ) {}

  ngOnInit() {
    this.dialog.afterAllClosed.subscribe(() => {
      this.isDialogOpen = false
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

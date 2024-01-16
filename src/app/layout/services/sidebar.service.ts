import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarSubject$ = new BehaviorSubject<boolean>(true)
  sidebar$ = this.sidebarSubject$.asObservable()

  get sidebar(): Observable<boolean> {
    return this.sidebar$
  }

  set sidebar(value: boolean) {
    this.sidebarSubject$.next(value)
  }

  toggleSidebar() {
    const value = this.sidebarSubject$.getValue()
    this.sidebar = !value
  }
}

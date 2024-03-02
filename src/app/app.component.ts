import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent implements OnInit, OnDestroy {
  router = inject(Router)
  subscription!: Subscription

  title = 'ppm'

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0)
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

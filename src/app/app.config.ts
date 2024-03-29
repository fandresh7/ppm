import { ApplicationConfig } from '@angular/core'
import { provideRouter, withInMemoryScrolling } from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http'
import { importProvidersFrom } from '@angular/core'

import { routes } from './app.routes'
import { LoadingService } from '@shared/loading/loading.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),

    // Services with multiple instances
    LoadingService
  ]
}

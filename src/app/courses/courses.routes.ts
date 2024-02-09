import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LayoutComponent } from 'app/layout/layout.component'
import { CoursesComponent } from './pages/courses/courses.component'
import { CourseComponent } from './pages/course/course.component'
import { ForumComponent } from './pages/forum/forum.component'
import { GlossaryComponent } from './pages/glossary/glossary.component'
import { TestComponent } from './pages/test/test.component'
import { CertificatesComponent } from './pages/certificates/certificates.component'
import { requirementsGuard } from '@auth/guards/requirements/requirements.guard'
import { ProfileComponent } from './pages/profile/profile.component'
import { MemoryComponent } from './pages/memory/memory.component'
import { DragdropComponent } from './pages/dragdrop/dragdrop.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [requirementsGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { exact: true }
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'course/:category',
        component: CourseComponent
      },
      {
        path: 'course/:category/:lesson',
        component: CourseComponent
      },
      {
        path: 'forum',
        component: ForumComponent
      },
      {
        path: 'glossary',
        component: GlossaryComponent
      },
      {
        path: 'certificates',
        component: CertificatesComponent
      },
      {
        path: 'test/:category',
        component: TestComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'memory/:category',
        component: MemoryComponent
      },
      {
        path: 'dragdrop/:category',
        component: DragdropComponent
      }
    ]
  }
]

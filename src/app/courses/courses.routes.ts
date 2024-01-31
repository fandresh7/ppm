import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LayoutComponent } from 'app/layout/layout.component'
import { CoursesComponent } from './pages/courses/courses.component'
import { CourseComponent } from './pages/course/course.component'
import { ForumComponent } from './pages/forum/forum.component'
import { GlossaryComponent } from './pages/glossary/glossary.component'
import { QuizCapexMazsiveComponent } from './pages/dragdrop/quiz-capex-mazsive/quiz-capex-mazsive.component'
import { QuizChampionsEngInitialComponent } from './pages/dragdrop/quiz-champions-eng-initial/quiz-champions-eng-initial.component'
import { QuizChampionsComponent } from './pages/dragdrop/quiz-champions/quiz-champions.component'
import { QuizLeasingComponent } from './pages/dragdrop/quiz-leasing/quiz-leasing.component'
import { QuizMonetizacionComponent } from './pages/dragdrop/quiz-monetizacion/quiz-monetizacion.component'
import { QuizVclV2Component } from './pages/dragdrop/quiz-vcl-v2/quiz-vcl-v2.component'
import { QuizVclComponent } from './pages/dragdrop/quiz-vcl/quiz-vcl.component'
import { QuizZbbComponent } from './pages/dragdrop/quiz-zbb/quiz-zbb.component'
import { TestComponent } from './pages/test/test.component'
import { CertificatesComponent } from './pages/certificates/certificates.component'
import { requirementsGuard } from '@auth/guards/requirements/requirements.guard'
import { ProfileComponent } from './pages/profile/profile.component'
import { MemoryComponent } from './pages/memory/memory.component'

const quicesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'quiz_vcl',
        component: QuizVclComponent
      },
      {
        path: 'quiz_vcl_v2',
        component: QuizVclV2Component
      },
      {
        path: 'quiz_capex_mazsive',
        component: QuizCapexMazsiveComponent
      },
      {
        path: 'quiz_champions_eng_initial',
        component: QuizChampionsEngInitialComponent
      },
      {
        path: 'quiz_leasing',
        component: QuizLeasingComponent
      },
      {
        path: 'quiz_champions',
        component: QuizChampionsComponent
      },
      {
        path: 'quiz_zzb',
        component: QuizZbbComponent
      },
      {
        path: 'quiz_monetizacion',
        component: QuizMonetizacionComponent
      }
    ]
  }
]

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
      ...quicesRoutes
    ]
  }
]

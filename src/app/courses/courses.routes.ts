import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LayoutComponent } from 'app/layout/layout.component'
import { CoursesComponent } from './pages/courses/courses.component'
import { CourseComponent } from './pages/course/course.component'
import { ForumComponent } from './pages/forum/forum.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
      }
    ]
  }
]

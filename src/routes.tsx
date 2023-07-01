import type { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Course from './pages/Course';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home  />
  },
  {
    path: '/courses',
    element: <Courses />
  },
  {
    path: '/course/:id',
    element: <Course />
  },
]

export default routes
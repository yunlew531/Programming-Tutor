import type { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home  />
  },
  {
    path: '/courses',
    element: <Courses />
  }
]

export default routes
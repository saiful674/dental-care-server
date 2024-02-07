import { Router } from 'express';
import { patientRoutes } from '../modules/patient/patient.routes';
import { userRoutes } from '../modules/user/user.routes';

const router = Router();

const pathRouter = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/patients',
    route: patientRoutes,
  },
];

pathRouter.map((route) => router.use(route.path, route.route));

export default router;

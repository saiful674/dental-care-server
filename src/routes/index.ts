import { Router } from 'express';
import { patientRoutes } from '../modules/patient/patient.routes';

const router = Router();

const pathRouter = [
  {
    path: '/patients',
    route: patientRoutes,
  },
];

pathRouter.map((route) => router.use(route.path, route.route));

export default router;

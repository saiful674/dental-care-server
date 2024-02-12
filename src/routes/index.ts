import { Router } from 'express';
import { adminRoutes } from '../modules/admin/admin.routes';
import { appoinmentRoutes } from '../modules/appointment/appoinment.routes';
import { doctortRoutes } from '../modules/doctor/doctor.routes';
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
  {
    path: '/doctors',
    route: doctortRoutes,
  },
  {
    path: '/admins',
    route: adminRoutes,
  },
  {
    path: '/appointments',
    route: appoinmentRoutes,
  },
];

pathRouter.map((route) => router.use(route.path, route.route));

export default router;

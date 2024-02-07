import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import router from './routes';
const app: Application = express();

// parser
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(express.json());
//
app.use('/api/v1', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// global error handler
app.use(globalErrorHandler);
export default app;

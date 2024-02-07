export type TUser = {
  email: string;
  id: string;
  password: string;
  role: 'patient' | 'doctor' | 'admin';
  status?: 'in-progress' | 'block';
  isDeleted?: boolean;
};

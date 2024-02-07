import User from './user.model';

// Patient ID
export const findLastPatientId = async () => {
  const lastPatient = await User.findOne(
    {
      role: 'patient',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastPatient?.id ? lastPatient.id.substring(2) : undefined;
};

export const generatePatientId = async () => {
  let currentId = (0).toString();
  const lastPatientId = await findLastPatientId();

  if (lastPatientId) {
    currentId = lastPatientId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `P-${incrementId}`;
  console.log(lastPatientId, currentId, incrementId);

  return incrementId;
};

// Admin ID
export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
  let currentId = (0).toString();
  const lastAdminId = await findLastAdminId();

  if (lastAdminId) {
    currentId = lastAdminId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `A-${incrementId}`;
  console.log(lastAdminId, currentId, incrementId);

  return incrementId;
};

// doctor ID
export const findLastDoctorId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'doctor',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateDoctorId = async () => {
  let currentId = (0).toString();
  const lastDoctorId = await findLastAdminId();

  if (lastDoctorId) {
    currentId = lastDoctorId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `D-${incrementId}`;
  console.log(lastDoctorId, currentId, incrementId);

  return incrementId;
};

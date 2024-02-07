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

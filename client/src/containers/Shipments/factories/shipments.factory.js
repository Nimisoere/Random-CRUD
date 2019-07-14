export const createRequestBody = values => {
  let requestObject = {
    id: values.id,
    name: values.name,
    cargo: values.cargo,
    mode: values.mode,
    type: values.type,
    destination: values.destination,
    origin: values.origin,
    services: values.origin,
    total: values.total,
    status: values.status,
    userId: values.userId
  };

  return requestObject;
};

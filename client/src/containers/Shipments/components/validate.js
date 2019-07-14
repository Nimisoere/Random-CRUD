const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Shipment name field shouldn’t be empty";
  } else if (values && values.name && values.name.length < 3) {
    errors.name = "Enter a minimum of three characters";
  }

  if (!values.userId) {
    errors.userId = "User ID field shouldn’t be empty";
  }
  if (!values.mode) {
    errors.mode = "Mode field shouldn’t be empty";
  }
  if (!values.type) {
    errors.type = "Type field shouldn’t be empty";
  }
  if (!values.total) {
    errors.total = "Total field shouldn’t be empty";
  }
  if (!values.status) {
    errors.status = "Status field shouldn’t be empty";
  }
  if (!values.origin) {
    errors.origin = "Origin field shouldn’t be empty";
  }
  if (!values.destination) {
    errors.destination = "Destination field shouldn’t be empty";
  }

  if (!values.cargo || !values.cargo.length) {
    errors.cargo = { _error: "At least one cargo must be entered" };
  } else {
    const cargoArrayErrors = [];
    values.cargo.forEach((cargo, cargoIndex) => {
      const cargoErrors = {};
      if (!cargo || !cargo.type) {
        cargoErrors.type = "Required";
        cargoArrayErrors[cargoIndex] = cargoErrors;
      }
      if (!cargo || !cargo.description) {
        cargoErrors.description = "Required";
        cargoArrayErrors[cargoIndex] = cargoErrors;
      }
      if (!cargo || !cargo.volume) {
        cargoErrors.volume = "Required";
        cargoArrayErrors[cargoIndex] = cargoErrors;
      }
    });
    if (cargoArrayErrors.length) {
      errors.cargo = cargoArrayErrors;
    }
  }

  if (!values.services || !values.services.length) {
    errors.services = { _error: "At least one service must be entered" };
  } else {
    const servicesArrayErrors = [];
    values.services.forEach((service, serviceIndex) => {
      const serviceErrors = {};
      if (!service || !service.type) {
        serviceErrors.type = "Required";
        servicesArrayErrors[serviceIndex] = serviceErrors;
      }
    });
    if (servicesArrayErrors.length) {
      errors.services = servicesArrayErrors;
    }
  }

  return errors;
};

export default validate;

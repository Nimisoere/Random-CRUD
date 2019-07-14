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

  return errors;
};

export default validate;

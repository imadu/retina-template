import Validator from 'validatorjs';

type Error = {
  field: string;
  message: string;
};
export const createValidationError = (validationError: Validator.Errors) => {
  const errors: Error[] = [];
  for (const [key, value] of Object.entries(validationError)) {
    errors.push({
      field: key,
      message: value[0],
    });
  }
  return errors;
};

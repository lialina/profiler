export const setFieldErrorsService = (error, setFieldError) => {
  if (error?.response?.data?.errors) {
    Object.entries(error.response.data.errors).forEach(([key, value]) => {
      setFieldError(`${key}`, value);
    });
  }
};

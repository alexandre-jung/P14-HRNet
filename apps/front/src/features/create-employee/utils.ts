export function formDataToEmployee (formData: FormData) {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const street = formData.get('street');
  const city = formData.get('city');
  const rawZipCode = formData.get('zipCode');
  const zipCode = typeof rawZipCode == 'string' && parseInt(rawZipCode, 10);
  const country = formData.get('country');
  const department = formData.get('department');

  return {
    firstName,
    lastName,
    street,
    city,
    zipCode,
    country,
    department,
  };
}

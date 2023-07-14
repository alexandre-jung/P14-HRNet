export function formDataToEmployee(formData: FormData) {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const birthDate = formData.get('birthDate');
  const startDate = formData.get('startDate');
  const street = formData.get('street');
  const city = formData.get('city');
  const rawZipCode = formData.get('zipCode');
  const zipCode = typeof rawZipCode == 'string' && parseInt(rawZipCode, 10);
  const country = formData.get('country');
  const department = formData.get('department');

  return {
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    zipCode,
    country,
    department,
  };
}

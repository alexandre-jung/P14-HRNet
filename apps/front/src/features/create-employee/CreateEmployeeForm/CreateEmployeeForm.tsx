import { Button, NumberField, TextField } from '@hrnet-aj/ui';
import { Select } from '@hrnet-aj/select';

import { COUNTRIES, DEPARTMENTS } from '../../../constants';
import { FormEvent, RefObject, useState } from 'react';
import { formDataToEmployee } from '../utils';
import { isEmployee } from '../../employee-provider/utils';
import { Employee } from '../../employee-provider/types';

import styles from './styles.module.scss';

type CreateEmployeeFormProps = {
  onSubmitSuccess: (employee: Employee) => void
  onSubmitError: () => void
  formRef: NonNullable<RefObject<HTMLFormElement>>
}

export const CreateEmployeeForm = ({
  onSubmitSuccess,
  onSubmitError,
  formRef,
}: CreateEmployeeFormProps) => {
  const [zipCode, setZipCode] = useState<number | null | undefined>(null);
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const employee = formDataToEmployee(formData);

    if (isEmployee(employee)) {
      onSubmitSuccess(employee);
      formRef.current?.reset();
      handleReset();
    } else {
      onSubmitError();
    }
  };

  const handleReset = () => {
    setZipCode(null);
    setCountry('');
    setDepartment('');
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className={styles.nameGroup}>
        <TextField
          label="First name"
          name="firstName"
          required
          style={{ flex: '1 1 auto' }}
          placeholder="Jean"
        />

        <TextField
          label="Last name"
          name="lastName"
          required
          style={{ flex: '1 1 auto' }}
          placeholder="François"
        />
      </div>

      <fieldset className={styles.addressFieldSet}>
        <legend>Address</legend>

        <TextField
          label="Street"
          name="street"
          required
          placeholder="1, Avenue de la République"
          style={{ flex: '1 1 auto' }}
        />

        <div className={styles.cityGroup}>
          <TextField
            label="City"
            name="city"
            required
            placeholder="Select the city..."
            style={{ flex: '1 1 auto' }}
          />

          <NumberField
            label="Zip code"
            name="zipCode"
            min={0}
            required
            placeholder="75001"
            value={zipCode}
            onChange={setZipCode}
          />
        </div>

        <Select
          label="Country"
          name="country"
          options={COUNTRIES.map(name => ({
            label: name, value: name,
          }))}
          placeholder="Select the country..."
          required
          inputStyle={{ backgroundColor: 'white' }}
          value={country}
          onChange={setCountry}
        />
      </fieldset>

      <Select
        label="Department"
        name="department"
        options={DEPARTMENTS.map(name => ({
          label: name, value: name,
        }))}
        required
        placeholder="Select the department..."
        value={department}
        onChange={setDepartment}
      />

      <Button
        type="submit"
        style={{ marginTop: 25 }}
      >
        Save
      </Button>
    </form>
  );
};

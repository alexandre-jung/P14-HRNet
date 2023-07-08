import { FormEvent, useRef, useState } from 'react';

import { UsersThree } from '@hrnet-aj/icons';
import { Modal } from '@hrnet-aj/modal';
import { Select } from '@hrnet-aj/select';
import { Button, NumberField, TextField } from '@hrnet-aj/ui';

import { COUNTRIES, DEPARTMENTS } from '../../constants';
import { ViewHeader } from '../../components';
import { formDataToEmployee } from './utils';
import { useEmployeeApi } from '../employee-provider';
import { isEmployee } from '../employee-provider/utils';

export function CreateEmployee() {
  const { createEmployee } = useEmployeeApi();
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => {
    setShowModal(false);
    setFullName('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const employee = formDataToEmployee(formData);

    if (isEmployee(employee)) {
      createEmployee(employee);
      setFullName(`${employee.firstName} ${employee.lastName}`);
      handleShowModal();
      formRef.current?.reset();
      handleReset();
    }
  };

  const [zipCode, setZipCode] = useState<number | null | undefined>(null);
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');

  const handleReset = () => {
    setZipCode(null);
    setCountry('');
    setDepartment('');
  };

  return (
    <div>
      <Modal
        id="confirmation-modal"
        show={showModal}
        onClose={handleHideModal}
        centered
        style={{ width: 400 }}
      >
        <Modal.Header closeButton>
          Employé créé
        </Modal.Header>
        <p>
          L'employé {fullName} a été enregistré !
        </p>
      </Modal>
      <ViewHeader
        icon={UsersThree}
        iconColor="#2874A6"
        title="Create employee"
        linkText="View employees"
        linkTo="/employees"
      />
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 15,
          margin: '25px auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 25,
          }}
        >
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

        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
            margin: '10px 0',
            padding: '10px 25px 25px 25px',
            borderRadius: 4,
            border: '1px solid #dae9ff',
            backgroundColor: '#f8fbff',
          }}
        >
          <legend
            style={{
              margin: '0 auto',
              padding: '0 20px',
              fontSize: '0.9rem',
              fontWeight: '500',
            }}
          >Address
          </legend>

          <TextField
            label="Street"
            name="street"
            required
            placeholder="1, Avenue de la République"
            style={{ flex: '1 1 auto' }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 25,
            }}
          >
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

        <Button type="submit" style={{ marginTop: 25 }}>
          Save
        </Button>
        <Button type="reset">
          Reset
        </Button>
      </form>
    </div>
  );
}

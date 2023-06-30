import { FormEvent } from 'react';

import { UsersThree } from '@hrnet-aj/icons';
import { Select } from '@hrnet-aj/select';
import { Button, NumberField, TextField } from '@hrnet-aj/ui';

import { COUNTRIES, DEPARTMENTS } from '../../constants';
import { ViewHeader } from '../../components';

export function CreateEmployee () {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div>
      <ViewHeader
        icon={UsersThree}
        iconColor="#2874A6"
        title="Create employee"
        linkText="View employees"
        linkTo="/employees"
      />
      <form
        onSubmit={handleSubmit}
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
        />

        <Button type="submit" style={{ marginTop: 25 }}>
          Save
        </Button>
      </form>
    </div>
  );
}

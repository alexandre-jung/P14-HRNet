import { Form, Link } from 'react-router-dom';
import { Button } from '@hrnet-aj/ui';
import { FormEvent } from 'react';

export function CreateEmployee () {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Create employee</h2>
      <Link to={'/employees'}>View employees</Link>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

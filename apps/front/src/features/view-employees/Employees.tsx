import { CirclePlus } from '@hrnet-aj/icons';

import { ViewHeader } from '../../components';
import { useEmployeeList } from '../employee-provider';

export function Employees () {
  const employees = useEmployeeList();

  return (
    <div>
      <ViewHeader
        icon={CirclePlus}
        iconColor="#239B56"
        title="All employees"
        linkText="Create employee"
        linkTo="/"
      />
      <p>
        <em>INSERT TABLE HERE...</em>
      </p>
      <pre>
        {JSON.stringify(employees, null, 2)}
      </pre>
    </div>
  );
}

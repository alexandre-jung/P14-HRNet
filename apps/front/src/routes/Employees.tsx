import { CirclePlus } from '@hrnet-aj/icons';

import { ViewHeader } from '../components';

export function Employees () {
  return (
    <div>
      <ViewHeader
        icon={CirclePlus}
        iconColor="#239B56"
        title="All employees"
        linkText="Create employee"
        linkTo="/"
      />
      <em>INSERT TABLE HERE...</em>
    </div>
  );
}

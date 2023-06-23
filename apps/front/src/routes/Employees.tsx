import { Link } from 'react-router-dom';
import { UsersThree } from '@hrnet-aj/icons';

export function Employees () {
  return (
    <div>

      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <UsersThree color="#2874A6 " fontSize={24} />
        All employees
      </h2>
      <Link to={'/'}>Create employee</Link>
    </div>
  );
}

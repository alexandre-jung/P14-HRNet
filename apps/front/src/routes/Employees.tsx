import { Link } from 'react-router-dom';

export function Employees () {
  return (
    <div>
      <h2>All employees</h2>
      <Link to={'/'}>Create employee</Link>
    </div>
  );
}

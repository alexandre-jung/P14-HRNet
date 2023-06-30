import { Link, Outlet } from 'react-router-dom';

export function Root () {
  return (
    <div style={{ color: '#4f4f4f' }}>
      <Link to={'/'}>
        <h1 style={{ color: '#3968e2', marginBottom: 50 }}>HRNet</h1>
      </Link>
      <Outlet />
    </div>
  );
}

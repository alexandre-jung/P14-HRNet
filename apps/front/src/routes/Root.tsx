import { Outlet } from 'react-router-dom';

export function Root () {
  return (
    <div>
      <h1>HRNet</h1>
      <Outlet />
    </div>
  );
}

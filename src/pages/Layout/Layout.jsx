import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h3>Loading....</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

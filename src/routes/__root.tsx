import { createRootRoute, Outlet } from '@tanstack/react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="container max-w-3xl mx-auto ">
        <div className="px-4 pt-5 md:px-0 md:pt-10">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
      {/* Uncomment the line below to enable the TanStack Router Devtools */}
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

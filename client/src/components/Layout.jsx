import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

// export default function Layout() {
//   return (
//     <div>
      
//     </div>
//   )
// }

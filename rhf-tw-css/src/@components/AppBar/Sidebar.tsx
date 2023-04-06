// https://blog.avneesh.tech/create-an-animated-sidebar-with-tailwindcss-in-react
import { useState } from 'react';

import AppBar from './AppBar';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          type="button"
          className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-blue-600"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  right-10 top-6 z-30 flex cursor-pointer items-center"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10" />
          <rect y="30" width="100" height="10" />
          <rect y="60" width="100" height="10" />
        </svg>
      )}

      <div
        className={`fixed right-0 top-0 z-40  h-full w-64 bg-white pt-24 text-white  duration-300 ease-in-out ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <AppBar />
      </div>
    </>
  );
};

export default Sidebar;

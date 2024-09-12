import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black bg-opacity-50 transition ease-in-out duration-150"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* Add logo or branding here if needed */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-gray-100 hover:text-black" aria-current="page">Home</Link>
                <Link to="/About" className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-gray-100 hover:text-black">About</Link>
                <Link to="/Details" className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-gray-100 hover:text-black">Adoption Details</Link>
                <Link to="/Adopt" className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-gray-100 hover:text-black">Adopt</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800 transition ease-in-out duration-150"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link to="/" className="block rounded-md bg-gray-200 px-3 py-2 text-base font-medium text-slate-200 hover:bg-gray-100 hover:text-black" aria-current="page">Home</Link>
          <Link to="/About" className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-gray-100 hover:text-black">About</Link>
          <Link to="/Details" className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-gray-100 hover:text-black">Adoption Details</Link>
          <Link to="/Adopt" className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-gray-100 hover:text-black">Adopt</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

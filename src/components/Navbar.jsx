import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.png"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
    <div className="navbar bg-base-100 lg:p-6">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/assignment'>Assignments</Link>
            </li>
            <li>
              <Link to="/createAssignment">Create Assignments</Link>
            </li>
            <li>
              <Link to="/pendingAssignment">Pending Assignments </Link>
            </li>
        </ul>
      </div>
      <img className="h-6 w-8 md:h-10 md:w-14 rounded-xl" src={logo} alt="" />
      <a className="btn btn-ghost text-xl">Skill Up</a>
  
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal font-semibold px-1">
      <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/assignment'>Assignments</Link>
            </li>
            <li>
              <Link to="/createAssignment">Create Assignments</Link>
            </li>
            <li>
              <Link to="/pendingAssignment">Pending Assignments </Link>
            </li>
      </ul>
    </div>
    <div className="navbar-end">
    <div>
          <label className="cursor-pointer grid place-items-center">
                          <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                      </label>
          </div>
    <div>
          <ul className='menu menu-horizontal px-1'>
            {!user && (
              <li className="font-semibold">
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
  
          {user && (
            <div className='dropdown dropdown-end z-50'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div title={user?.displayName} className='w-10 rounded-full'>
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile Photo'
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li className='mt-2'>
                  <button
                    onClick={logOut}
                    className=' block border font-semibold border-blue-600 text-center'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
          </div>
    </div>
  </div>
    );
};

export default Navbar;

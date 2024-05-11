import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.png"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='navbar bg-base-100 shadow-sm px-4 justify-between'>
      <div className='flex'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold text-xl'>Skill Up</span>
        </Link>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1 font-semibold">
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link>Assignments</Link>
          </li>
          <li>
            <Link to="createAssignment">Create Assignments</Link>
          </li>
          <li>
            <Link>Pending Assignments </Link>
          </li>
        </ul>
      </div>
      <div className='flex-none'>
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
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    );
};

export default Navbar;
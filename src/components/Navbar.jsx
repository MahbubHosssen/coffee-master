import { Link } from 'react-router-dom';
import menuBg from '../assets/images/more/15.jpg'
import logoName from '../assets/images/more/21.png'
import logoCup from '../assets/images/more/6.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {logout, user} = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
        .then(() => {
            console.log("success")
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addCoffee'>Add Coffee</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <button onClick={handleLogOut} className='btn'>Log Out</button>
    </>

    return (
        <div style={{
            backgroundImage: `url(${menuBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="navbar bg-transparent w-10/12 mx-auto">
            <div className="flex-1 items-center">
                <img className='w-20 h-16' src={logoName} alt="" />
                <img className='w-20 h-20' src={logoCup} alt="" />
            </div>
            <div className="flex-none text-white">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {menuItems}
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
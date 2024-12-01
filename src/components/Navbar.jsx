import { Link } from 'react-router-dom';
import menuBg from '../assets/images/more/15.jpg'
import logoName from '../assets/images/more/21.png'
import logoCup from '../assets/images/more/6.png'

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addCoffee'>Add Coffee</Link></li>
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
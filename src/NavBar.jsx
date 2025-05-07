import { faMagnifyingGlass, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
  const navItems = ["Buy", "Sell", "Trade"];
  const icons = [faMagnifyingGlass, faUser, faHeart, faBagShopping];

  const handleClick = (route) => {
    navigate(route);
  };
    
  return (
    <nav className="bg-black top-0 z-50 px-4 md:px-6 max-w-full flex justify-between items-center py-2">
      
      {/* Flex container for logo image and text */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-16 md:w-20" />
        <p style={{ fontFamily: "Special Elite", color: "white" }} className="text-2xl font-bold">
          INKORAA
        </p>
      </div>

      <div className=" md:flex gap-3">
        {navItems.map((item) => (
          <a 
            key={item}
            href="#"
            className="text-gray-600 text-m font-semibold uppercase hover:text-white hover:border-b-2 hover:border-white px-2 py-1"
            onClick={handleClick(`/${item}`)}
            style={{ fontFamily: "Special Elite" }}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {icons.map((icon, index) => (
          <FontAwesomeIcon 
            key={index}
            icon={icon}
            className="text-gray-600 text-lg hover:text-black cursor-pointer" 
            aria-label={["User", "Wishlist", "Cart"][index]} 
          />
        ))}
      </div>
    </nav>
  );
}
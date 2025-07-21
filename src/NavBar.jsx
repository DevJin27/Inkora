import { faMagnifyingGlass, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const navItems = ["Buy", "Sell", "Trade"];
  const icons = [faMagnifyingGlass, faUser, faHeart, faBagShopping];
  const iconLabels = ["Search", "User", "Wishlist", "Cart"];

  const handleClick = (route) => {
    navigate(route.toLowerCase());
  };

  return (
    <nav className="bg-black top-0 z-50 px-4 md:px-6 max-w-full flex justify-between items-center py-2">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-16 md:w-20" />
        <p style={{ fontFamily: "Special Elite", color: "white" }} className="text-2xl font-bold">
          INKORAA
        </p>
      </div>

      {/* Navigation Links */}
      <div className="md:flex gap-3 hidden md:block">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(`/${item}`)}
            className="text-gray-600 text-m font-semibold uppercase hover:text-white hover:border-b-2 hover:border-white px-2 py-1"
            style={{ fontFamily: "Special Elite" }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Icon Buttons */}
      <div className="flex items-center gap-3">
        {icons.map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="text-gray-600 text-lg hover:text-white cursor-pointer"
            aria-label={iconLabels[index]}
          />
        ))}
      </div>
    </nav>
  );
}

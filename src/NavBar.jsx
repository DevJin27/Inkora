import { faMagnifyingGlass, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
  const navItems = ["Winter'24", "Topwear", "Bottomwear"];
  const icons = [faMagnifyingGlass, faUser, faHeart, faBagShopping];

  return (
    <nav className="bg-white sticky top-0 z-50 px-5 md:px-8 max-w-full flex justify-between items-center py-3">
      
      <img src="/logo.png" alt="logo" className="w-24 md:w-32" />

      <div className="hidden md:flex gap-4">
        {navItems.map((item) => (
          <a 
            key={item}
            href="#"
            className="text-gray-600 text-sm font-semibold uppercase hover:text-[black] hover:border-b-2 hover:border-[Black] hover: px-2 py-1"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
      {icons.map((icon, index) => (
  <FontAwesomeIcon 
    key={index}
    icon={icon}
    className="text-gray-600 text-lg hover:text-black cursor-pointer" 
    aria-label={["Search", "User", "Wishlist", "Cart"][index]} 
  />
))}

      </div>
    </nav>
  );
}
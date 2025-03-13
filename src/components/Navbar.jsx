const navItems = [
    {
        name: 'HomePage',
        href: '/index.html'
    },
    {
        name: 'About',
        href: '/sections/about'
    },
    {
        name: 'Projects',
        href: '/sections/projects'
    },
    {
        name: 'Contact',
        href: '/sections/contact'
    }
];

const Navbar = () => {
    const isActive = (item) => {
        return window.location.pathname === item.href;
    };
    return  (
      <nav className="flex justify-center p-2 sm:p-6 w-full sticky top-0 z-40">
        <div className="flex items-center backdrop-blur-md bg-white/5 rounded-full px-1 sm:px-4 py-1 sm:py-2">
            {navItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className={`hover:text-gray-600 transition-all duration-300 text-white w-[85px] sm:w-[120px] text-center py-1 sm:py-2 text-sm sm:text-base rounded-full 
                        ${isActive(item) ? "font-bold bg-[#460f07c7]" : ""}`}
                >
                    {item.name}
                </a>
            ))}
        </div>
      </nav>
    );
};
export default Navbar;
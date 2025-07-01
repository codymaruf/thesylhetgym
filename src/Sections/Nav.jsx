const Navbar = () => {

  return (
    <header className="bg-black text-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full"
            src="assets/sylhet-gym.jpg"
            alt="The Sylhet Gym Logo"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Services", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="">
          <a
            href="#join"
            className="bg-gold text-black px-2 py-1.5 rounded-full font-medium text-sm sm:text-lx sm:font-semibold hover:bg-white transition"
          >
            Join Now
          </a>
        </div>
        
      </div>

      
    </header>
  );
};

export default Navbar;

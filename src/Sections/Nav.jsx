const Navbar = () => {

  return (
    <header className="bg-black text-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            className="h-20 rounded-full"
            src="https://scontent.fzyl6-1.fna.fbcdn.net/v/t39.30808-6/273444651_2725312951109544_6220373451402881403_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGwjinRa9dRZsRVFJn4IKJKk9ArfbRrXT2T0Ct9tGtdPRg-tY1axTezBDH5g2fCM32UWc-d_YcLJXtQcC1CSWG6&_nc_ohc=MdhVWTG4lGEQ7kNvwFU2_Nx&_nc_oc=AdnFJd8jPkUs5hiIGO8vgIPnwwQOFDvaDsAk1TwGoqEmPpLNNalX-LnP1XVgeoXDCvo&_nc_zt=23&_nc_ht=scontent.fzyl6-1.fna&_nc_gid=KOAqmv0Kplb8qgq2PKL30g&oh=00_AfTDyicHgyPHowj3KFGbpudyxG3lHfghGPUJXfGQLWtFug&oe=687541ED"
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

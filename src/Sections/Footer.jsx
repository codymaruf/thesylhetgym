const Footer = () => {
  return (
    <footer className="bg-black text-[#f7f0b9] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Logo & Brand */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src="assets/sylhet-gym.jpg"
            alt="The Sylhet Gym Logo"
            className="w-12 h-12 rounded-full"
          />
          <h3 className="text-xl font-bold text-[#aa7f47]">The Sylhet Gym</h3>
          <p className="text-sm text-[#f7f0b9]/70 max-w-xs">
            Sylhet’s premier fitness destination for men and women. Train smart. Live strong.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#aa7f47]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#aa7f47]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#aa7f47]">Contact</h4>
          <ul className="space-y-2 text-sm text-[#f7f0b9]/80">
            <li>📍 Sadik Tower, Sylhet 3100</li>
            <li>📞 <a href="tel:01312128494" className="hover:text-[#aa7f47]">01312-128494</a></li>
            <li>
              🔗{" "}
              <a
                href="https://www.facebook.com/thesylhetgym/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#aa7f47]"
              >
                facebook.com/thesylhetgym
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-[#f7f0b9]/60">
        © {new Date().getFullYear()} The Sylhet Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

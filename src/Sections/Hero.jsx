const Hero = () => {
  return (
    <section id="home" className="relative z-0 w-full h-screen overflow-hidden bg-gradient-to-b from-black via-black to-[#aa7f47]">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#f7f0b9] px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Build Strength. <br />
          <span className="text-white">Train Smart. Live Strong.</span>
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mb-8 text-[#f7f0b9]/90">
          Welcome to Dhaka GYM — Dhaka’s largest fitness center with expert trainers, modern equipment, and unbeatable energy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#join"
            className="bg-orange text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition"
          >
            Join Now
          </a>
          <a
            href="#services"
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-orange transition"
          >
            View Classes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

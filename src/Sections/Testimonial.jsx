const Testimonials = () => {
  const testimonials = [
    {
      quote: "Joining The Sylhet Gym changed my life. The trainers are incredibly supportive.",
      name: "A. Rahman",
      role: "Member",
    },
    {
      quote: "Fantastic classes, top-notch equipment, and a strong fitness community.",
      name: "M. Ahmed",
      role: "Member",
    },
    {
      quote: "The group sessions give me energy, motivation, and real results!",
      name: "N. Begum",
      role: "Member",
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-[#f7f0b9] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Real People. <span className="text-[#aa7f47]">Real Results.</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#aa7f47] to-[#f7f0b9] mx-auto my-4 rounded-full" />
          <p className="text-[#f7f0b9]/80 text-lg">
            Hear what our members have to say.
          </p>
        </div>

        {/* Cards (Flex layout with wrapping) */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-[#aa7f47]/40 transition w-full md:w-[30%]`}
            >
              <p className="text-lg italic text-[#f7f0b9]/90 mb-6">
                “{item.quote}”
              </p>
              <div>
                <p className="font-bold text-[#aa7f47]">{item.name}</p>
                <p className="text-sm text-[#f7f0b9]/60">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

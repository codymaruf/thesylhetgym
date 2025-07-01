const plans = [
  {
    name: "Basic",
    price: "৳1000",
    features: ["Gym Access", "Cardio Zone", "Locker"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "৳2000",
    features: ["All Basic Features", "Group Classes", "Personal Coaching"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "৳3500",
    features: ["All Standard Features", "Priority Support", "Free Merch"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-black text-[#f7f0b9] py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Membership Plans
        </h2>
        <p className="text-[#f7f0b9]/80 text-lg mb-12">
          Choose the plan that fits your fitness journey.
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1a] rounded-2xl p-8 w-full sm:w-[45%] md:w-[30%] flex flex-col justify-between text-left shadow-md transition transform ${
                plan.highlight
                  ? "border- border-[#aa7f47] hover:scale-105 shadow-[#aa7f47]/50"
                  : "hover:border hover:border-[#aa7f47] hover:shadow-[#aa7f47]/50"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-extrabold text-[#aa7f47] mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-[#f7f0b9]/90"
                    >
                      <span className="mr-2 text-[#aa7f47]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-2 rounded-full font-semibold mt-auto ${
                  plan.highlight
                    ? "bg-gold text-black hover:bg-white"
                    : "border border-[#aa7f47] text-[#aa7f47] hover:bg-white hover:text-black"
                } transition`}
              >
                Sign Up
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

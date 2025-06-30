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
    <section id="pricing" className="bg-black text-white py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Membership Plans</h2>
        <p className="text-gray text-xl font-bold mb-12">Choose the best fit</p>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray/10 rounded-2xl p-8 w-full md:w-1/3 flex flex-col justify-between text-left ${
                plan.highlight ? "border-2 border-white" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="mr-2 text-[#f39f45]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-2 rounded-md font-semibold ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-[#f39f45] transition"
                    : "bg-black border border-white text-white hover:bg-[#f39f45] hover:text-black transition duration-200 ease-in-out"
                }`}
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

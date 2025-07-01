import {
  Zap,
  Dumbbell,
  Users,
  HeartPulse
} from "lucide-react";

const Programs = () => {
  return (
    <section id="services" className="bg-black text-[#f7f0b9] py-24 px-6">
      <div className="max-w-7xl mx-auto grid tablet:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            What We Offer <br />
            <span className="text-[#aa7f47]">at The Sylhet Gym</span>
          </h2>
          <p className="text-lg text-[#f7f0b9]/80 mb-6">
            We don’t just help you lift weights — we build total body transformation systems through professional coaching, intelligent programming, and energy-packed classes.
          </p>
          <a
            href="#join"
            className="inline-block bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition"
          >
            Start Your Journey
          </a>
        </div>

        {/* Right: Programs List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:scale-105 transition">
            <Zap className="w-8 h-8 text-[#aa7f47] mb-4" />
            <h3 className="text-xl font-bold mb-2">Personal Training</h3>
            <p className="text-sm text-[#f7f0b9]/70">
              1-on-1 expert guidance to help you meet your goals with form, consistency, and drive.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:scale-105 transition">
            <Dumbbell className="w-8 h-8 text-[#aa7f47] mb-4" />
            <h3 className="text-xl font-bold mb-2">Strength Training</h3>
            <p className="text-sm text-[#f7f0b9]/70">
              Modern equipment and tailored programs to boost power, stability, and muscle growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:scale-105 transition">
            <Users className="w-8 h-8 text-[#aa7f47] mb-4" />
            <h3 className="text-xl font-bold mb-2">Group Workouts</h3>
            <p className="text-sm text-[#f7f0b9]/70">
              High-energy classes with motivation, camaraderie, and fun to keep you moving.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl hover:scale-105 transition">
            <HeartPulse className="w-8 h-8 text-[#aa7f47] mb-4" />
            <h3 className="text-xl font-bold mb-2">Cardio Burn</h3>
            <p className="text-sm text-[#f7f0b9]/70">
              Heart-pumping treadmill, cycling, and HIIT training zones to boost stamina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

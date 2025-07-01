const Contact = () => {
  return (
    <section id="contact" className="bg-black text-[#f7f0b9] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Get in <span className="text-[#aa7f47]">Touch</span>
          </h2>
          <p className="text-[#f7f0b9]/80 mb-6">
            Have questions or want to visit? We’re here to help.
          </p>
          <ul className="space-y-4 text-[#f7f0b9]/90">
            <li>
              📍 <strong>Location:</strong> Sadik Tower, 7th Floor (Gents), 5th Floor (Ladies), Noya Sorok, Sylhet 3100
            </li>
            <li>
              📞 <strong>Phone:</strong> <a href="tel:01312128494" className="text-[#aa7f47] hover:underline">01312-128494</a>
            </li>
            <li>
              🔗 <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/thesylhetgym/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aa7f47] hover:underline"
              >
                facebook.com/thesylhetgym
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full bg-[#1a1a1a] text-white border border-[#aa7f47]/30 rounded-md px-4 py-2 focus:outline-none focus:border-[#aa7f47]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Your Email</label>
            <input
              type="email"
              className="w-full bg-[#1a1a1a] text-white border border-[#aa7f47]/30 rounded-md px-4 py-2 focus:outline-none focus:border-[#aa7f47]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full bg-[#1a1a1a] text-white border border-[#aa7f47]/30 rounded-md px-4 py-2 focus:outline-none focus:border-[#aa7f47]"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

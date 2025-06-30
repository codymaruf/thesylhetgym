const Contact = () => {
  return (
    <section id="contact" className="bg-black text-gray py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div>
          <h2 className="text-3xl text-white sm:text-4xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray mb-4">
            Have a question or want to join? Fill out the form or reach us directly!
          </p>

          <div className="space-y-2 text-gray">
            <div>
              <span className="font-semibold text-white">Address:</span><br />
              Spring Garden, Shahjalal Uposhohor, Sylhet, Bangladesh
            </div>
            <div>
              <span className="font-semibold text-white">Phone:</span><br />
              <a href="tel:01731106006" className="hover:text-[#f39f45]">01731-106006</a>
            </div>
            <div>
              <span className="font-semibold text-white">Email:</span><br />
              <a href="mailto:bootcampfitnessclub@gmail.com" className="hover:text-[#f39f45]">bootcampfitnessclub@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold text-white">Facebook:</span><br />
              <a
                href="https://www.facebook.com/BootCampSylhet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f39f45]"
              >
                facebook.com/BootCampSylhet
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="Your Name"
              
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="you@example.com"
              
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 bg-white/5 rounded-md border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f39f45]"
              placeholder="Your message..."
              
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-[#f39f45] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

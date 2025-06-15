import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "5aff6a20-30c2-483d-b82e-96aac5d2f2fe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      event.target.reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-900 text-white flex flex-col md:flex-row justify-center items-center gap-12"
    >
      {/* Left Text Section */}
      <div className="text-left md:max-w-lg font-serif">
        <h2 className="text-6xl md:text-8xl font-semibold leading-none text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
          <span className="ml-8 ">Want to</span> <br />
          <span className="italic md:ml-24 ml-16">start</span> <br />
          <span className="">a new </span><span className="italic md:ml-32 ml-20">project?</span>
        </h2>
        <p className="mt-4 text-2xl tracking-wide">Or just say hello.</p>
      </div>

      {/* Right Contact Form Section */}
      <div className="w-full max-w-3xl bg-black/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-8 text-center">
          Contact Me
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md outline-none focus:ring-2 ring-blue-500 placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md outline-none focus:ring-2 ring-blue-500 placeholder-gray-400"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Contact Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 bg-white/10 text-white rounded-md outline-none focus:ring-2 ring-blue-500 placeholder-gray-400"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-white/10 text-white rounded-md outline-none focus:ring-2 ring-purple-500 placeholder-gray-400"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md w-full"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-400 text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

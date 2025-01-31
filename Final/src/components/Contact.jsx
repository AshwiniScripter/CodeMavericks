import React, { useState } from "react";
import Member1 from "../images/member1.png";
import Member2 from "../images/member2.png";
import Member3 from "../images/member3.jpg";

const Contact = () => {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !msg) {
      alert("Please fill all the fields");
      return;
    }

    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "ef21ebc7-b74a-4ea6-88c6-e1fb500d79f8");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", msg);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        setResult("Failed to Submit: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact <span className="text-blue-600">Us</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Sadiya's Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <img
            src={Member3}
            alt="Sadiya karanache"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Sadiya karanache</h3>
          <p className="text-sm text-gray-600">Member 1</p>
          <p className="text-sm text-gray-600">Email: sadiya.223112881@viit.ac.in</p>
          <p className="text-sm text-gray-600">Phone: +91 9876543210</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold">
            Contact Now
          </button>
        </div>

        {/* Adwait's Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <img
            src={Member1}
            alt="Adwait"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Adwait Deshmukh</h3>
          <p className="text-sm text-gray-600">Member 2</p>
          <p className="text-sm text-gray-600">Email: adwait.22311626@viit.ac.in</p>
          <p className="text-sm text-gray-600">Phone: +91 9123456789</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold">
            Contact Now
          </button>
        </div>

        {/* Ashwini's Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <img
            src={Member2}
            alt="Ashwini"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Ashwini Salunke</h3>
          <p className="text-sm text-gray-600">Member 3</p>
          <p className="text-sm text-gray-600">Email: ashwini.22420201@viit.ac.in</p>
          <p className="text-sm text-gray-600">Phone: +91 9876543210</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4 w-full font-semibold">
            Contact Now
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-12 w-full max-w-6xl bg-white p-8 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Get in Touch</h2>

        {result && <p className="text-center text-blue-600">{result}</p>}

        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-2 border-gray-300 rounded-lg p-3"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-2 border-gray-300 rounded-lg p-3"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="message" className="text-sm font-semibold text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="border-2 border-gray-300 rounded-lg p-3"
              placeholder="Your Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-6 w-full font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

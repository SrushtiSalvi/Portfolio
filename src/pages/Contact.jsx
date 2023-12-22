import React, { useState } from "react";
import contactBg from "../assets/contactBg.jpg";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const submitContactForm = (e) => {
    e.preventDefault();

    window.open(
      `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=srushtisalvi4@gmail.com&su=${subject}&body=${message}`
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div
      name="contact"
      id="contact"
      className="text-white h-full bg-cover bg-no-repeat justify-center bg-black w-full pt-20 px-8 md:p-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)) ,url(${contactBg})`,
      }}
    >
      <h1
        className="text-center font-extrabold md:text-4xl text-2xl my-10"
        data-aos="fade-up"
      >
        Get In Touch
        <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" />
      </h1>
      <div className="flex justify-center" data-aos="fade-up">
        <form className="w-full max-w-lg" onSubmit={submitContactForm}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-gray-400 border-b py-3 px-2 mb-3 leading-tight focus:outline-none "
                id="grid-first-name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-gray-400 border-b py-3 px-2 mb-3 leading-tight focus:outline-none "
                id="grid-last-name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-gray-400 border-b py-3 px-2 mb-3 leading-tight focus:outline-none "
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-transparent text-gray-400 border-b py-3 px-2 mb-3 leading-tight focus:outline-none "
                id="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" appearance-none block w-full bg-transparent text-gray-400 border-b py-3 px-2 mb-3 leading-tight focus:outline-none  "
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white py-1 px-6 rounded "
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Contact;

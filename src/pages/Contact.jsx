import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className=" container md:w-2/3 w-[95%] mx-auto border border-[#E5E5E5] rounded-lg p-4 md:p-14">
      <h1 className="text-center font-semibold text-lg md:text-4xl">
        GOT A QUESTION?
      </h1>
      <form className="flex flex-col items-start gap-4">
        <label htmlFor="name" className="block font-semibold">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none border border-[#E5E5E5] rounded-lg h-10 w-full px-3"
          type="text"
        />
        <label htmlFor="name" className="block font-semibold">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none border border-[#E5E5E5] rounded-lg h-10 w-full px-3"
          type="email"
        />
        <label htmlFor="name" className="block font-semibold">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="outline-none border border-[#E5E5E5] rounded-lg h-64 w-full px-3 resize-none"
        />
        <button className="btn-black">Send</button>
      </form>
    </div>
  );
};

export default Contact;

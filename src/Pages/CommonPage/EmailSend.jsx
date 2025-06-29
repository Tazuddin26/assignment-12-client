import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import UseAuth from "../../Hook/useAuth";
const EmailSend = () => {
  const { user } = UseAuth();
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_po8443b",
        "template_ib7286k",
        form.current,
        "SFsaNLstbDzz7RGyd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="">
      <section className="max-w-4xl mt-4 p-6 mx-auto bg-white/10 rounded-md shadow-md ">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className=""></label>
              <input
                name="username"
                defaultValue={user?.displayName}
                type="text"
                placeholder="Name..."
                className="block w-full px-4 py-2 mt-2  bg-white/10 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 border border-gray-200 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className=""></label>
              <input
                name="email"
                defaultValue={user?.email}
                type="email"
                placeholder="Email Address.."
                className="block w-full px-4 py-2 mt-2  bg-white/10 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 border border-gray-200 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <label
              for="Description"
              className="block text-start text-xl font-abel  mt-2"
            ></label>

            <textarea
              name="message"
              placeholder="Write Your Text..."
              className="block mt-6 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white/10 px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>
          </div>
          <div className="flex flex-col justify-end mt-4">
            <button
              type="submit"
              className="px-8 py-3 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-500 focus:outline-none focus:bg-gray-600"
            >
              Send Message
            </button>
            {isSent && (
              <p className="text-green-500 text-center mt-4">
                Your email has been sent successfully!
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default EmailSend;

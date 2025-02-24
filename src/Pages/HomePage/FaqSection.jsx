import { useState } from "react";
import { FaChevronDown, FaQuestion } from "react-icons/fa";
import { RiQuestionMark } from "react-icons/ri";

const faqs = [
  {
    question: "What are the available apartment sizes?",
    answer:
      "We offer 1BHK, 2BHK, and 3BHK apartments with varying square footage.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we provide secure parking spaces for residents and guests.",
  },
  {
    question: "What amenities are included?",
    answer:
      "Our apartments include a gym, swimming pool, community hall, security, and more.",
  },
  {
    question: "What is the security arrangement?",
    answer:
      "24/7 security with CCTV surveillance and professional guards ensures safety.",
  },
  {
    question: "Are pets allowed?",
    answer: "Yes, we have pet-friendly apartments with designated pet zones.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50" >
      <div className="container mx-auto text-center px-6 ">
        <div className="lg:flex ">
          <div className="lg:w-6/12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 font-abel">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 text-xl font-tauri px-3">
              Find answers to the most common queries about our apartments.
            </p>
            <p className=" flex justify-center items-center py-6">
              <RiQuestionMark size={96} className="text-green-500" />
            </p>
          </div>

          <div className="lg:w-7/12 mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white mb-4 p-4 hover:bg-green-100 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold font-abel text-xl">
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
      question: "What’s the quality of your products?",
      answer: "We prioritize quality in every item we sell. Our products are designed to be durable, functional, and stylish."
    },
    {
      question: "Do you offer returns?",
      answer: "Yes! If you're not 100% satisfied with your purchase, we offer a 30-day return policy on all products."
    },
    {
      question: "Do you ship internationally?",
      answer: "Absolutely. We offer worldwide shipping, so you can enjoy our products no matter where you are."
    },
    {
      question: "How long will my order take to arrive?",
      answer: "Shipping times vary by location, but we aim to deliver within 5-10 business days for most orders."
    },
    {
      question: "Are your products environmentally friendly?",
      answer: "We are committed to sustainability and use eco-friendly materials whenever possible in the production and packaging of our products."
    }
  ];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] mb-30 mx-auto p-6">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-3 text-left text-2xl font-medium text-gray-800 hover:text-black"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="text-gray-600 text-xl pb-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

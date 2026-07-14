// components/faq/FAQItem.jsx
import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-700 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-xl md:text-2xl text-white">
          {question}
        </h3>
        <span className="text-white text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p className="mt-4 text-gray-400 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

// components/faq/FAQ.jsx
import FAQItem from "./FAQItem";

export default function FAQ({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-black py-20 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-gray-100 mb-2">
          Frequently Asked Questions
        </p>
{/* 
        <h2 className="text-4xl md:text-5xl text-white mb-10">
          Common Questions
        </h2> */}

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

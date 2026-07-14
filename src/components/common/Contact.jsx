import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function ContactSection() {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return; // prevent double submit

    const name = formRef.current.name.value.trim();
    const email = formRef.current.email.value.trim();
    const phone = formRef.current.phone.value.trim();
    const message = formRef.current.textarea.value.trim();

    if (!name || !email || !phone || !message) {
      toast.error("All fields are required");
      return;
    }

    // email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // phone validation - exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }


    setLoading(true);

    sendForm(
      "service_bieykdy",
      "template_261som3",
      formRef.current,
      "xegRks9AiGypGKvhc"
    )
      .then(() => {
        toast.success("Message Sent Successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contactSection"
      className="relative w-full min-h-screen py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-four-videos-contact-image/swastixa-contact.png)`,
      }}
    >
      <div className="absolute "></div>
      <div className="relative z-10 w-[95%] md:w-[85%] lg:w-[80%] max-w-6xl">
        <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">
          Contact Us
        </h1>

        <div className="bg-[#843c29]/25 backdrop-blur-md rounded-2xl p-6 md:p-10 flex flex-col justify-between md:flex-row gap-10">

          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            noValidate
            className="w-full md:w-[40%] flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"

              className="w-full bg-transparent border-b focus:bg-transparent
                  autofill:bg-transparent  border-white/40 text-white placeholder-white/70 py-3 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent border-b focus:bg-transparent
                 autofill:bg-transparent border-white/40 text-white  py-3 focus:outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Enter Your Mobile no."
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
              }}
              className="w-full bg-transparent border-b focus:bg-transparent
                autofill:bg-transparent  border-white/40 text-white placeholder-white/70 py-3 focus:outline-none"
            />

            <textarea
              placeholder="Enter Your Query"
              name="textarea"
              rows={2}
              className="w-full bg-transparent border-b focus:bg-transparent
            autofill:bg-transparent border-white/40 text-white placeholder-white/70 py-3 focus:outline-none resize-none focus:border-white transition"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`text-white text-xl mt-6 w-fit relative 
                after:content-[''] cursor-pointer after:absolute after:left-0 after:bottom-0 
                after:h-0.5 after:w-full after:bg-neutral-200 
                after:scale-x-0 after:origin-left 
                after:transition-transform after:duration-300 
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:after:scale-x-100"}
              `}
            >
              {loading ? "Sending..." : "submit"}
            </button>

          </form>

          {/* CONTACT INFO (UNCHANGED) */}
          <div className="w-full md:w-[40%] text-white flex text-end flex-col gap-2">
            <div>
              <h2 className="text-[20px]  md:text-2xl font-bold">Swastixa Services LLP</h2>
              {/* <p className="opacity-90 text-[18px]"><span className="font-bold text-[22px]">Head Office : </span   > Plot No. 2-A,</p> */}
              <p className="opacity-90 "><span className=" text-[20px] font-bold">Head Office </span   ></p>
              <p className="opacity-80 text-[15px] md:text-[17px]  ">Plot No. 2-A,</p>
              <p className="opacity-80 text-[15px] md:text-[17px] "></p>
              <p className="opacity-80 text-[15px] md:text-[17px] "> Third Floor, Jai Vihar,</p>
              <p className="opacity-80 text-[15px] md:text-[17px] "> New Delhi - 110043</p>
            </div>
            <br />
            <div>
              {/* <h2 className="font-bold text-[20px]"></h2> */}
               <p className="opacity-90 "><span className=" text-[20px] font-bold">Registered Office </span   ></p>
              <p className="opacity-80 text-[15px] md:text-[17px]">Plot No. J04A, Street 12,</p>
              <p className="opacity-80 text-[15px] md:text-[17px]">  Shiv Ram Park,</p>
              <p className="opacity-80 text-[15px] md:text-[17px]"></p>
              <p className="opacity-80 text-[15px] md:text-[17px]">New Delhi - 110041</p>
            </div>
            <div className="mt-4">

              <div className="flex justify-end gap-3">
                <a
                  href="https://www.facebook.com/share/1BavrtTDFV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="https://www.instagram.com/swastixadigital?igsh=ZHQwMmthamV3a3Vu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/company/swastixa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="https://youtube.com/@swastixadigital?si=Pfy9tRbjKuLInRJE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

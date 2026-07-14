import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-black p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] 2xl:px-[130px]" >
            <div className="bg-[#232323] rounded-[18px] min-h-[300px]  flex items-center justify-between px-[42px] relative"
                  style={{
                     backgroundImage: "url('https://pub-6aea620a48a5427f992db658caf5fb4a.r2.dev/swastixadigital/swastixa-ad-section-bg-images/swastixa-ad-bg-image.jpeg')",
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                 }}>

                {/* Left Content */}
                <div>
                    <h2 className="text-white text-[21px] sm:text-[24px] md:text-[42px] font-normal leading-[1.05] tracking-[-0.02em]">
                        Ready to build the future of
                        <br />
                        your business?
                    </h2>

                    <button
                        className="mt-5 bg-black text-white text-[11px] font-semibold px-7 py-3 rounded-[4px]"
                        onClick={() => {
                            navigate("/#contact");
                        }}
                    >
                        Contact Us
                    </button>
                </div>


                {/* Right Social Icons */}
                <div className="flex flex-col gap-4">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/share/1BavrtTDFV/"
                        className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <FaFacebookF size={18} />
                    </a>

                    <a
                        target="_blank"
                        href="https://www.instagram.com/swastixadigital?igsh=ZHQwMmthamV3a3Vu"
                        className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <FaInstagram size={18} />
                    </a>

                    <a
                        target="_blank"
                        href="https://www.linkedin.com/company/swastixa/"
                        className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <FaLinkedinIn size={18} />
                    </a>

                    <a
                        target="_blank"
                        href="https://youtube.com/@swastixadigital?si=Pfy9tRbjKuLInRJE"
                        className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <FaYoutube size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default CTASection;
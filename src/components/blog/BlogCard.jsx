import { Link } from "react-router-dom";
import { GlowingBorder } from "../common/GlowingBorder";

export default function BlogCard({ blog }) {

    return (
        <GlowingBorder
            // data-aos="zoom-out-down"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            containerClassName="shadow-md hover:shadow-2xl transition-all  duration-300 bg-zinc-900"
            className="p-4 rounded-sm  h-auto"
            borderRadius="0.8rem"
        // color="rgba(255, 255, 255, 0.4)"

        >

            {/* IMAGE SECTION */}
            <div
                className="
                    rounded-[0.8rem]
                    w-full
                    h-[50vw]          /* Mobile */
                    sm:h-[40vw]        /* Small screens */
                    md:h-[30vw]        /* Tablets */
                    lg:h-[22vw]        /* Laptops */
                    xl:h-[38.133vh]        /* Large monitors */
                    2xl:h-[57.2vh]       /* Ultra wide screens */
                    max-h-160      /* hard safety cap */
                    overflow-hidden
                "
                style={{
                    background: "#4e4e4e66", // Transparent background
                    backdropFilter: "blur(15px)",        // Blur effect
                    boxShadow: "rgb(110 109 109 / 25%) 1.5px 1px 2.8px inset", // Inner shadow
                    borderRadius: "0.8rem"
                }} >
                <img
                    src={blog.image || blog.hero?.image}
                    alt={blog.title || blog.hero?.title}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                />
            </div>

            {/* TEXT SECTION */}
            <div className="p-[1.2rem]">
                
                <Link to={`/blog/${blog.slug}`}>
                    <p className="
                  text-[0.95rem]
                  text-gray-300
                  mt-[0.6rem]
                  2xl:text-[1.3rem]
                  line-clamp-2
                  cursor-pointer
                  hover:text-white
                  transition
          ">
                        {blog.hero?.metaTitle || blog.hero?.subtitle || blog.hero?.title}
                    </p>
                </Link>

            </div>

        </GlowingBorder>
    );
}

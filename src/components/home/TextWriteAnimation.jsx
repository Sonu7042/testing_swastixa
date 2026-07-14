import { TypeAnimation } from "react-type-animation";

const TextWriteAnimation = () => {

  return (
    <TypeAnimation
      sequence={[

        ' BRAND STRATEGY ',
        1500,

        '  SOCIAL MEDIA ',
        1500,

        '  CONTENT MARKETING ',
        1500,

        '  GRAPHIC DESIGN ',
        1500,

        '  WEB DEVELOPMENT ',
        1500,

        '  VIDEO PRODUCTION ',
        1500,

        '  SEO & ANALYTICS ',
        1500,

      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 leading-snug"
    />
  );
};

export default TextWriteAnimation;

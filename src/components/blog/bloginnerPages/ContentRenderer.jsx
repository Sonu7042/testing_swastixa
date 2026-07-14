






import { Link } from "react-router-dom";

export default function ContentRenderer({ block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-white tracking-tight">
          {block.text}
        </h2>
      );

    case "subHeading":
      return (
        <h3 className="text-2xl md:text-3xl font-semibold mt-10 mb-5 text-white/90">
          {block.text}
        </h3>
      );

    case "subSubHeading":
      return (
        <h4 className="text-lg font-semibold mt-5 mb-2">
          {block.text}
        </h4>
      );

    case "paragraph":
      return (
        <p className="text-gray-300 mb-8 text-lg leading-relaxed md:leading-loose opacity-90">
          {renderTextWithLinks(block.text)}
        </p>
      );
    case "paragraphbold": {
      const [heading, ...rest] = block.text.split("\n");
      const bodyText = rest.join("\n");

      return (
        <p className="text-gray-300 mb-4 leading-relaxed">
          {heading && (
            <span className="block text-center font-bold text-white mb-2">
              {heading}
            </span>
          )}
          {renderTextWithLinks(bodyText)}
        </p>
      );
    }



    case "imageLeftText":
      return (
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-white/10">
            <img
              src={block.image}
              alt={block.alt || "content image"}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-300 text-lg leading-relaxed">
            {renderTextWithLinks(block.text)}
          </div>
        </div>
      );

    // case "imageRightText":
    //   return (
    //     <div className="grid md:grid-cols-2 text-center items-center mb-6">
    //       {/* <p className="text-gray-300">
    //         {renderTextWithLinks(block.text)}
    //       </p> */}
    //       <img src={block.image} alt={block.alt} className="rounded-lg" />
    //     </div>
    //   );

    case "imageRightText":
      return (
        <div className="flex justify-center items-center mb-12 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={block.image}
            alt={block.alt || "image"}
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
      );


    case "list":
      return block.variant === "ordered" ? (
        <ol className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            // <li key={i}>{item}</li>
            // <li key={i}>{item}{item.text}</li>
            <li key={i}> {typeof item === "string" ? item : item.text}</li>

          ))}
        </ol>
      ) : (
        <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}> {typeof item === "string" ? item : item.text}</li>
          ))}
        </ul>
      );


    case "linkList":
      return (
        <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              {renderTextWithLinks(item)}
            </li>
          ))}
        </ul>
      );


    case "boldList":
      return (
        <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-white">
                {item.bold}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );
    case "boldListpara":
      return (
        <ul className="list-none list-inside   ml-0 text-gray-400 mb-6 ">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-white">
                {item.bold}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );
    case "unorderedBoldListdecimal":
      return (
        <ul className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-white">
                {item.bold}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}





// import { Link } from "react-router-dom";

function renderTextWithLinks(text) {
  if (!text) return null;

  // Step 1: split by link pattern
  const linkRegex = /\{\{link:([^|]+)\|([^}]+)\}\}/g;
  const parts = text.split(linkRegex);

  return parts.map((part, index) => {
    // Normal text OR bold handling
    if (index % 3 === 0) {
      // Handle **bold** inside normal text
      return part.split(/(\*\*.*?\*\*)/g).map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={`${index}-${i}`} className="font-semibold text-white">
              {p.replace(/\*\*/g, "")}
            </strong>
          );
        }
        return <span key={`${index}-${i}`}>{p}</span>;
      });
    }

    // Label (ignore, used with slug)
    if (index % 3 === 1) return null;

    // Slug → Link
    if (index % 3 === 2) {
      const label = parts[index - 1];
      const slug = part;

      return (
        <Link
          key={index}
          to={`/blog/${slug}`}
          className="text-blue-400 hover:underline"
        >
          {label}
        </Link>
      );
    }

    return null;
  });
}
// export default function BlogContent({ content }) {
//   return (
//     <div className="max-h-[70vh] overflow-y-auto pr-4 custom-scroll">
//       <h2 className="text-2xl font-semibold mb-4">
//         {content.heading}
//       </h2>


//       {content.paragraphs.map((p, i) => (
//         <p key={i} className="text-gray-300 mb-4">
//           {p}
//         </p>
//       ))}

//       {content.sections.map((section, i) => (
//         <div key={i} className="mt-6">
//           <h3 className="text-xl font-semibold mb-2">
//             {section.title}
//           </h3> 

//           <ul className="list-disc ml-6 text-gray-400">
//             {section.points.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }


// import ContentRenderer from "./ContentRenderer";
import ContentRenderer from "./ContentRenderer";

export default function BlogContent({ content }) {
  return (
    <div className="w-full">
      {content.map((block, index) => (
        <ContentRenderer key={index} block={block} />
      ))}
    </div>
  );
}

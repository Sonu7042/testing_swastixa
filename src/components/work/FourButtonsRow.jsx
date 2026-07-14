export default function FourButtonsRow() {
  return (
    <div className="flex gap-3 justify-center mb-10 flex-wrap ">
      <button className="px-4 py-2 w-1/5 cursor-pointer bg-white text-black rounded">Production House</button>
      <button className="px-4 py-2 w-1/5 cursor-pointer bg-white text-black rounded">Social Media Management</button>
      <button className="px-4 py-2 w-1/5 cursor-pointer bg-white text-black rounded">Website Development</button>
      <button className="px-4 py-2 w-1/5 cursor-pointer bg-white text-black rounded">Digital Marketing</button>
    </div>
  );
}
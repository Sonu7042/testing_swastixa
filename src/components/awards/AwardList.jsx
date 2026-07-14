export default function AwardList() {
  const awards = [
    "🏆 Design Excellence Award 2024",
    "⭐ Best Startup UI Design 2025",
  ];

  return (
    <ul className="list-disc ml-6 text-gray-700">
      {awards.map((a, i) => <li key={i}>{a}</li>)}
    </ul>
  );
}

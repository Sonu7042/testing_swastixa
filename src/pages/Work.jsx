
import VirtualVideoList from "../components/work/VirtualVideoList";
import WorkHero from "../components/work/WorkHero";

const Work = () => {
  return (
    <main className="bg-black">
      {/* <InnerPageHeader
        title="Work"
        description="High-performance creative work powered by optimized video delivery."
        /> */}
      {/* <WorkFilterSearch /> */}
      <WorkHero />
      
      <VirtualVideoList />
    </main>
  );
};

export default Work;
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const workItems = [
  {
    image: "/work1.png",
    title: "KongaPay",
    subtitle: "Empowering Growth for Businesses and Individuals",
  },
  {
    image: "/work2.png",
    title: "iPaidThat",
    subtitle: "The all in one accounting tool for small businesses",
  },
  {
    image: "/work3.png",
    title: "iPaidThat",
    subtitle: "The all in one accounting tool for small businesses",
  },
  {
    image: "/work4.jpg",
    title: "iPaidThat",
    subtitle: "The all in one accounting tool for small businesses",
  },
];

export default function Page() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const reelsSection = document.getElementById("reels");
    if (reelsSection) {
      reelsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero />
      <section id="reels" className="reels-section reels-section--spaced">
        {/* Video reel will go here */}
        <div className="reel-placeholder">
          Favor Reel Placeholder
        </div>
      </section>
      <section className="work-section">
        <Projects limit={4} />
        <div className="view-more-container">
          <a href="/work" className="view-more-btn">View more work</a>
        </div>
      </section>
    </>
  );
}
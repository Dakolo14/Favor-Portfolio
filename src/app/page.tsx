import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Link from "next/link";

export default function Page() {
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
          <Link href="/work" className="view-more-btn">View more work</Link>
        </div>
      </section>
    </>
  );
}
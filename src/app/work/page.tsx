import Projects from "../components/Projects";

export default function WorkPage() {
  return (
    <main style={{minHeight: '60vh', padding: '3rem 0'}}>
      <section className="work-section">
        <Projects />
      </section>
    </main>
  );
}

export const metadata = {
  title: "Work | Favor Akinniyi",
  description: "Explore the motion design and graphic projects of Favor Akinniyi.",
}; 
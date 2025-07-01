import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "kongapay",
    image: "/work1.png",
    title: "KongaPay",
    subtitle: "Empowering Growth for Businesses and Individuals",
  },
  {
    slug: "ipaidthat",
    image: "/work2.jpg",
    title: "iPaidThat",
    subtitle: "The all in one accounting tool",
  },
  {
    slug: "alchemy",
    image: "/work3.jpg",
    title: "Alchemy",
    subtitle: "The era of blockchain",
  },
  {
    slug: "calmhealth",
    image: "/work4.jpg",
    title: "Calm Health",
    subtitle: "Calm Health Project",
  },
  {
    slug: "KongaHealth",
    image: "/work1.png",
    title: "Konga Health",
    subtitle: "Konga Health Project",
  },
  {
    slug: "Kongae_commerce",
    image: "/work3.png",
    title: "Konga E-commerce",
    subtitle: "Konga E-commerce Project",
  },
];

export default function Projects({ limit }: { limit?: number } = {}) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="work-grid">
      {displayProjects.map((item) => (
        <Link href={`/work/${item.slug}`} className="work-item" key={item.slug}>
          <div className="work-thumb-container">
            <Image src={item.image} alt={item.title} className="work-thumb" fill sizes="(max-width: 700px) 100vw, 50vw" style={{objectFit: 'cover'}} />
            <div className="work-overlay" />
          </div>
          <div className="work-info">
            <div className="work-title">{item.title}</div>
            <div className="work-subtitle">{item.subtitle}</div>
          </div>
        </Link>
      ))}
    </div>
  );
} 
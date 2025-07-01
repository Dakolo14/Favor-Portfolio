// src/app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const projects = {
  kongapay: "KongaPay",
  ipaidthat: "iPaidThat",
  alchemy: "Alchemy",
  calmhealth: "Calm Health",
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const title = projects[params.slug as keyof typeof projects];
  if (!title) return {};
  return {
    title: `${title} | Favor Akinniyi`,
    description: `Case study and details for ${title} by Favor Akinniyi.`,
  };
}

export function generateStaticParams() {
  return Object.keys(projects).map(slug => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const title = projects[params.slug as keyof typeof projects];
  if (!title) return notFound();

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "2.5rem",
        fontWeight: 700,
      }}
    >
      {title}
    </main>
  );
}

// src/app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const projects = {
  kongapay: "KongaPay",
  ipaidthat: "iPaidThat",
  alchemy: "Alchemy",
  calmhealth: "Calm Health",
};

type PageProps = {
  params: {
    slug: keyof typeof projects;
  };
};

// Metadata generator
export function generateMetadata({ params }: PageProps): Metadata {
  const title = projects[params.slug];
  if (!title) return {};
  return {
    title: `${title} | Favor Akinniyi`,
    description: `Case study and details for ${title} by Favor Akinniyi.`,
  };
}

// Page component
export default function ProjectPage({ params }: PageProps) {
  const title = projects[params.slug];
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

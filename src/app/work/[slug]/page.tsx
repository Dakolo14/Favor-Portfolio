import { notFound } from "next/navigation";

const projects = {
  kongapay: "KongaPay",
  ipaidthat: "iPaidThat",
  alchemy: "Alchemy",
  calmhealth: "Calm Health",
};

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const title = projects[params.slug as keyof typeof projects];
  if (!title) return {};
  return {
    title: `${title} | Favor Akinniyi`,
    description: `Case study and details for ${title} by Favor Akinniyi.`,
  };
}

export default function ProjectPage({ params }: Props) {
  const title = projects[params.slug as keyof typeof projects];
  if (!title) return notFound();
  return (
    <main style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2.5rem', fontWeight: 700}}>
      {title}
    </main>
  );
} 
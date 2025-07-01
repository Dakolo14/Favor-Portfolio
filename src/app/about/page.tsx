import Image from "next/image";

export const metadata = {
  title: "About | Favor Akinniyi",
  description: "Learn more about Favor Akinniyi, a Nigerian freelance 2D animator, motion specialist, and graphic designer.",
};

export default function AboutPage() {
  return (
    <main className="about-main">
      <div className="about-container">
        <div className="about-image">
          <Image src="/favor.jpg" alt="Favor Akinniyi" width={260} height={260} style={{borderRadius: '50%', objectFit: 'cover'}} />
        </div>
        <div className="about-text">
          <h1 className="about-title">Hello, my name is Favor Akinniyi.</h1>
          <p className="about-bio">
            I am a Nigerian freelance 2D animator, motion specialist, and graphic designer.<br /><br />
            Giving life to ideas with animation and design is my passion.<br /><br />
            I'm always learning, experimenting, and combining different styles, techniques, and approaches. Animation is like solving a puzzle—trying different options until you get that spark that brings everything to life. Once you see the whole picture come together, you can't help but replay it with a big smile.<br /><br />
            After earning my degree in design, I started my career as a freelancer, working with clients to bring their visions to life.<br /><br />
            When I'm not creating animations, I love playing video games and watching anime for inspiration.
          </p>
          <div className="about-connect">
            <a href="mailto:Favorakinniyi@gmail.com" className="about-connect-link">Let's Connect</a>
          </div>
        </div>
      </div>
    </main>
  );
} 
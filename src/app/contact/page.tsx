export const metadata = {
  title: "Contact | Favor Akinniyi",
  description: "Contact Favor Akinniyi for collaborations, projects, or a friendly chat about design and animation.",
};

export default function ContactPage() {
  return (
    <main className="contact-main">
      <div className="contact-container">
        <h1 className="contact-title">Let&apos;s Connect</h1>
        <p className="contact-text">
          I&apos;m always open to new projects, collaborations, or just a friendly chat about design, motion, or animation.<br /><br />
          You can reach me directly at:
        </p>
        <a href="mailto:Favorakinniyi@gmail.com" className="contact-link">Favorakinniyi@gmail.com</a>
        <div className="contact-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">Instagram</a>
          {/* Add more socials if you want */}
        </div>
      </div>
    </main>
  );
} 
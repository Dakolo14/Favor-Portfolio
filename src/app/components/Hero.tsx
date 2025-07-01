"use client";
import React from "react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const reelsSection = document.getElementById("reels");
    if (reelsSection) {
      reelsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="hero">
      <header className="hero-header">
        <h1 className="hero-title">Hello there, I'm Favor</h1>
        <p className="hero-subtitle">A graphic designer and UX motion specialist based in Nigeria.</p>
        <a href="#reels" className="hero-link" onClick={handleScroll}>
          Scroll down
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </header>
    </main>
  );
} 
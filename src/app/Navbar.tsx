"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/" className="navbar-logo-link">Favor Akinniyi</Link>
      </div>
      <button
        className="mobile-nav-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setNavOpen((open) => !open)}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>
      <div className={`navbar-right${navOpen ? " open" : ""}`} onClick={() => setNavOpen(false)}>
        <a href="/work" className="nav-item">Work</a>
        <Link href="/about" className="nav-item">About</Link>
        <Link href="/contact" className="nav-item">Contact</Link>
        <a href="https://instagram.com" className="nav-item" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle' }}>
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="17" cy="7" r="1.5"/>
          </svg>
        </a>
      </div>
    </nav>
  );
} 
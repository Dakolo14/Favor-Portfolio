"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '0.5rem'}}><path d="M3 12l18-7-7 18-2.5-7L3 12z" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Favorakinniyi@gmail.com
        </div>
        <div className="footer-right">
          <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            back to top
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginLeft: '0.5rem'}}><path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
} 
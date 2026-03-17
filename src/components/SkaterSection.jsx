import React from 'react';

const SkaterIcon = ({ size = 48, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Helmet Main Dome */}
    <path d="M12 3c-4.5 0-8 3-8 7.5v2.5c0 1 1 2 2 2h2" />
    <path d="M20 10.5C20 6 16.5 3 12 3" />
    
    {/* Helmet Ridges */}
    <path d="M10 3v4" />
    <path d="M14 3v4" />
    
    {/* Ear Piece & Side details */}
    <circle cx="16" cy="13" r="1.5" />
    <path d="M18 10v4" />
    <path d="M15 15h3c1 0 2-1 2-2v-2" />
    
    {/* Visor */}
    <path 
      d="M4 10.5C5.5 9 10 8.5 12 10.5c1.5 1.5 1.5 3.5 1.5 3.5H9" 
      style={{ opacity: 0.6 }} 
    />
    
    {/* Chin Strap */}
    <path d="M8 15v1c0 1.5 2 2.5 4 2.5s4-1 4-2.5v-1" />
  </svg>
);

const SkaterSection = () => {
  return (
    <section id="skater-evaluation" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <SkaterIcon size={48} className="text-accent" />
        </div>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Player Evaluation Strategy</h2>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          Stop letting major holes in your game go unnoticed. We break down the intricate details of what scouts are looking for at the highest levels. <strong style={{ color: '#fff' }}>I provide tailored, highly applicable feedback that you simply won't get from most coaches, highlighting the nuances that generic evaluations miss.</strong>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'left', marginBottom: '3rem', backgroundColor: '#111', padding: '2rem', borderRadius: '8px', border: '1px solid #222' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>Skating & Skills</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Stride Efficiency</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Puck Control</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Puck Protection</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Shot & Release</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>Hockey IQ & Reads</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Offensive/Defensive IQ</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Reads & Awareness</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Puck Support</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Gap Positioning</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>Game Application</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Zone Entries</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Half-Wall Play</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Physicality</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Compete Level</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a href="#intake-funnel" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
            Get Evaluated Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkaterSection;

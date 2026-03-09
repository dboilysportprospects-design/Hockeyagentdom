import React from 'react';

const GoalieMaskIcon = ({ size = 48, className = "" }) => (
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
    {/* Main helmet outline */}
    <path d="M12 2C6.5 2 3.5 6 3.5 12c0 4 2.5 8.5 7 10 0.5 0.5 1 0.5 1.5 0.5s1 0 1.5-0.5c4.5-1.5 7-6 7-10C20.5 6 17.5 2 12 2z" />
    
    {/* Forehead Ridge */}
    <path d="M8.5 5.5C10 5 14 5 15.5 5.5" />

    {/* Chin piece */}
    <path d="M8 20.5c1.5 1 4 1 5.5 0" />
    <path d="M6 18c1.5 1 4 2 6 2s4.5-1 6-2" />

    {/* Cage Top Bar */}
    <path d="M6 9h12" />
    
    {/* Cage Middle Bar */}
    <path d="M5.5 12h13" />
    
    {/* Cage Bottom Bar */}
    <path d="M6.5 15h11" />

    {/* Cage Vertical Bars */}
    <path d="M12 9v6" />
    <path d="M9 9v6" />
    <path d="M15 9v6" />

    {/* Side detailing */}
    <path d="M4 11s1-2 2-2" />
    <path d="M20 11s-1-2-2-2" />

    {/* Ear holes */}
    <circle cx="4.5" cy="14.5" r="1" />
    <circle cx="19.5" cy="14.5" r="1" />
  </svg>
);

const GoaltenderSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#0a0a0a', borderTop: '1px solid #1f1f1f', borderBottom: '1px solid #1f1f1f' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <GoalieMaskIcon size={48} className="text-accent" />
        </div>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Are You a Goaltender?</h2>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          Stop relying on generic feedback. Goaltending is a highly specialized craft, and getting to the next level requires a deep understanding of read-and-react situations, edge work, and positional mechanics. As an agency's dedicated goaltending specialist with an extensive playing background in the crease, <strong style={{ color: '#fff' }}>I provide tailored, pro-level evaluations specifically designed to help elite goaltenders dominate their crease and get noticed by scouts.</strong>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'left', marginBottom: '3rem', backgroundColor: '#111', padding: '2rem', borderRadius: '8px', border: '1px solid #222' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>Technical Mechanics</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Crease Management</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Depth Control</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Angle Management</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Post Integrations</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>Game Execution</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Net Coverage</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Tracking</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Rebound Control</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Recovery Mechanics</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>Hockey IQ</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-muted)' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Rush Control</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Play Assessment</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> Composure</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--color-accent)' }}>•</span> And more...</li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
};

export default GoaltenderSection;

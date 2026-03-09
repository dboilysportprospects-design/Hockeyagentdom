import React from 'react';
import { EyeOff, FileQuestion, TrendingDown } from 'lucide-react';

const GapSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>The Modern Hockey Landscape is Broken</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
            Politics, "Daddy coaches," and pay-to-play programs have made it almost impossible to get a real, objective assessment of your true skill level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <EyeOff size={32} style={{ color: 'var(--color-error)' }} />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Blind Spots</h3>
            <p>You don't know what scouts are actually looking for. You're working hard on the wrong details.</p>
          </div>

          <div className="card text-center" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <FileQuestion size={32} style={{ color: 'var(--color-accent)' }} />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Sugar-Coated Feedback</h3>
            <p>Coaches often tell you what you want to hear to keep tuition checking coming. We deliver the raw, actionable truth you actually need to transform your game.</p>
          </div>

          <div className="card text-center" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <TrendingDown size={32} style={{ color: 'var(--color-error)' }} />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Stagnant Development</h3>
            <p>Without an elite-level roadmap, you plateau while players with professional connections pass you by.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;

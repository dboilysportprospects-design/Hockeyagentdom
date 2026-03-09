import React from 'react';
import { Check } from 'lucide-react';

const Pricing = ({ onSelectPlan }) => {
  return (
    <section id="pricing" style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Choose Your Evaluation Tier</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>Professional scouting analysis tailored to your current career stage.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Tier 1 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>The Scorecard Evaluation</h3>
              <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>$49</div>
              <p style={{ color: 'var(--color-text-muted)' }}>A professional PDF scouting report with 1-10 rankings on core hockey skillsets.</p>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Skating (Explosion, Side-to-Side)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Hands & Shot evaluation</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Offensive & Defensive IQ</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Physicality & Compete level scoring</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Delivered as a downloadable PDF report</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>2-week turnaround time for all evaluations</span>
              </li>
            </ul>
            
            <button onClick={() => onSelectPlan('scorecard')} className="btn btn-outline btn-full">
              Select Scorecard
            </button>
          </div>

          {/* Tier 2 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', border: '2px solid var(--color-accent)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)', padding: '4px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Most Popular
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>The Video Audit</h3>
              <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>$149</div>
              <p style={{ color: 'var(--color-text-muted)' }}>A personalized video analysis where a pro agent breaks down your film with direct feedback.</p>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px' }} />
                <strong>Everything in The Scorecard</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Personalized video filmed by me with direct feedback</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Honest, unfiltered review of your game</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Deep dive into the strong and weak points of your play</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Check size={20} className="text-accent" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>2-week turnaround time for all evaluations</span>
              </li>
            </ul>
            
            <button onClick={() => onSelectPlan('video')} className="btn btn-primary btn-full">
              Select Video Audit
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';
import { ArrowRight, Trophy, Target } from 'lucide-react';
import heroBg from '../assets/images/hq-college-hockey-bg.png';
import sportProspectsLogo from '../assets/images/sport-prospects-logo.png';

const Hero = ({ onStart }) => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Background Image with Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.4) 100%)',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Powered by</span>
              <img src={sportProspectsLogo} alt="Sport Prospects" style={{ height: '36px', width: 'auto', borderRadius: '4px' }} />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
              <Trophy size={16} className="text-accent" />
              <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Elite Scouting Analysis</span>
            </div>
            
            <h1 style={{ marginBottom: '1.5rem', color: '#fff' }}>
              Stop Guessing. <br />
              <span style={{ color: 'var(--color-accent)' }}>Get Noticed By Scouts.</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#d1d5db', lineHeight: 1.6 }}>
              Get raw, highly applicable feedback you won't hear from most coaches. We provide professional grading and the exact roadmap you need to bypass politics and actually reach the next level.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onStart} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem', padding: '1rem 2rem' }}>
                Start Your Evaluation
                <ArrowRight size={20} />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                <Target size={24} className="text-muted" />
                <span className="text-muted" style={{ fontWeight: 500 }}>For Ambitious Players & Parents</span>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '325px', 
              aspectRatio: '9/16', 
              backgroundColor: 'rgba(0,0,0,0.5)', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              position: 'relative'
            }}>
              <iframe 
                src="https://www.tiktok.com/embed/v2/7549308221152857375" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
                allow="autoplay; encrypted-media; fullscreen" 
                title="TikTok Player"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

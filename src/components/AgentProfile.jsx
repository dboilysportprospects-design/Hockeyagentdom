import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import dominicProfile from '../assets/images/ProfilePic.png';

const AgentProfile = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Image Side */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div 
              style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '10px',
                bottom: '10px',
                border: '2px solid var(--color-accent)',
                borderRadius: '8px',
                zIndex: 0
              }}
            />
            <img 
              src={dominicProfile}
              alt="Dominic - Sports Agent" 
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: '8px',
                position: 'relative',
                zIndex: 1,
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: 'var(--color-surface)' 
              }}
            />
            
            <div 
              className="card"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '10%',
                zIndex: 2,
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--color-bg)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderLeft: '4px solid var(--color-accent)'
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent)' }}>$20M+</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', lineHeight: 1.2 }}>
                Generated in<br />NIL & Scholarships
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div style={{ paddingLeft: '1rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '100px', border: '1px solid rgba(249, 115, 22, 0.2)', marginBottom: '1.5rem' }}>
              <Target size={16} className="text-accent" />
              <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent)' }}>The Pro Behind The Evaluation</span>
            </div>
            
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>
              I know exactly what it takes to <span className="text-accent" style={{ fontStyle: 'italic' }}>make it.</span>
            </h2>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              I'm Dominic Boily, a sports agent working with <strong style={{ color: '#fff' }}>Sport Prospects</strong>, an NHLPA agency. For years, I've been in the trenches evaluating elite-level players and placing them in programs where they excel, building a vast network of connections that spans across PREP, AAA, Junior hockey, NCAA D1, and the NHL.
            </p>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              My job is to cut through the noise, eliminate the politics, and give you the raw, unfiltered truth about your game. I've helped my clients secure over <strong>$20 million</strong> in scholarships and NIL deals by focusing on what scouts <em style={{ color: 'var(--color-accent)' }}>actually</em> look for.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                <span style={{ fontWeight: 600 }}>Professional Sports Agent</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                <span style={{ fontWeight: 600 }}>Sport Prospects Agency</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}></div>
                <span style={{ fontWeight: 600 }}>Elite Player Development</span>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://www.tiktok.com/@hockeyagentdom?_r=1&_t=ZP-94YSr1j8b3W" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  backgroundColor: '#000000', 
                  color: '#ffffff', 
                  border: '1px solid #333333',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textTransform: 'none',
                  fontSize: '1rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '100px',
                  textDecoration: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
                <span style={{ fontWeight: 600 }}>TikTok</span>
              </a>

              <a 
                href="https://www.instagram.com/hockeyagentdom/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', 
                  color: '#ffffff', 
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textTransform: 'none',
                  fontSize: '1rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '100px',
                  textDecoration: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span style={{ fontWeight: 600 }}>Instagram</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/dominicboily?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  backgroundColor: '#0077b5', 
                  color: '#ffffff', 
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textTransform: 'none',
                  fontSize: '1rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '100px',
                  textDecoration: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span style={{ fontWeight: 600 }}>LinkedIn</span>
              </a>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgentProfile;

import React from 'react';
import './JuniorHockeyGuide.css';

const JuniorHockeyGuide = () => {
    return (
        <div className="junior-hockey-guide-wrapper" id="guide" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="bg-glow bg-left"></div>
            <div className="bg-glow bg-right"></div>
            
            <section className="hero container custom-guide-hero" style={{ paddingTop: '80px', minHeight: 'auto' }}>
                <div className="hero-content">
                    <div className="hero-badge">New Release</div>
                    <h1 className="hero-title">Inside the <span className="text-orange" style={{color: '#f97316'}}>Junior Hockey</span> System</h1>
                    <p className="hero-subtitle">As a hockey agent with over a decade of industry experience, having assisted more than 100 players in securing Division I scholarships and professional contracts, this guide is designed to help athletes and families navigate the junior hockey landscape with a clear understanding of how the process truly works.</p>
                    
                    <div className="cta-buttons" style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-start' }}>
                        <a href="https://buy.stripe.com/7sY9AUdlu86Q3z55Wv5sA1m" className="btn btn-primary btn-large" style={{ backgroundColor: '#f97316', color: '#fff', textDecoration: 'none' }}>
                            Get The Full Guide
                        </a>
                    </div>
                </div>
                
                <div className="hero-image-wrapper">
                    <a href="https://buy.stripe.com/7sY9AUdlu86Q3z55Wv5sA1m" style={{ textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.3s ease', display: 'inline-block' }}>
                        <div className="book-mockup">
                            <div className="book-cover" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px', paddingBottom: '24px' }}>
                                <h2 style={{ fontSize: '1.5rem', lineHeight: '1.1', marginBottom: '12px', textAlign: 'left', color: '#fff' }}>Inside the <span className="highlight" style={{color: '#f97316'}}>Junior Hockey</span> System</h2>
                                <img src="/cover-graphic.jpg" style={{ width: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} alt="Infographic" />
                                <div className="author-profile" style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src="/author.jpg" alt="Dominic Boily" className="author-img" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #f97316' }} />
                                    <span className="author-name" style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>Dominic Boily</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            <section id="guide-preview" className="guide-preview-section" style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '16px', fontFamily: '"Outfit", sans-serif' }}>Read a Free Excerpt</h2>
                        <p style={{ fontSize: '1.25rem', color: '#a1a1aa' }}>Get a taste of what the complete guide offers.</p>
                    </div>

                    <div className="document-container" id="pdf-content">
                        <div className="document-header">
                            <h1 className="doc-title" style={{fontFamily: '"Outfit", sans-serif'}}>Inside the Junior Hockey System</h1>
                            <h2 className="doc-subtitle">The Complete Junior hockey Guide</h2>
                        </div>
                        <div className="document-body">
                            <div className="doc-section pillar-section">
                                <span className="pillar-label">Pillar 2</span>
                                <h3>Truth behind how teams really recruit</h3>
                                <h4>How Junior Hockey Teams Recruit Players</h4>
                                <p>One of the most misunderstood aspects of junior hockey is the recruiting process. Many players and parents assume that strong performances, statistics, or sending emails to teams will automatically lead to opportunities. In reality, recruiting in junior hockey is much more structured and competitive behind the scenes.</p>
                                <p>Understanding how teams evaluate and recruit players can help families better position themselves throughout the process.</p>
                                <div className="doc-divider"></div>
                                <h4>Your Elite Prospects Is Often the First Impression</h4>
                                <p>For most junior teams, the first place they will look when evaluating a player is their profile on platforms such as Elite Prospects. This page often serves as the player’s digital résumé. It includes important information such as age, height, weight, current team, league history, and statistics. Because of this, it is extremely important that a player’s profile is up to date and contains accurate information.</p>
                                <h4>Understanding How Scouting Staffs Work</h4>
                                <p>Every junior hockey organization operates with a scouting staff responsible for identifying potential players. However, many families are surprised to learn that most scouts within junior hockey are not full-time employees. In many leagues, scouts are unpaid or receive only minimal compensation.</p>
                                <p>Their primary role is to identify players and recommend them to the team’s leadership. While scouts provide valuable information, they typically do not have the final authority to sign, tender, or draft players. The ultimate decision-makers in most organizations are usually the <strong>General Manager</strong> or the <strong>Director of Recruiting</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bottom-cta-container" style={{ padding: '100px 24px', textAlign: 'center', background: 'linear-gradient(to top, rgba(9, 9, 11, 1), rgba(249, 115, 22, 0.05))', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '3rem', color: '#fff', marginBottom: '24px', lineHeight: '1.2' }}>Your Journey to the Next Level Starts Here.</h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.25rem', color: '#a1a1aa', marginBottom: '40px' }}>Join the hundreds of players who have successfully navigated the junior hockey landscape using these exact proven strategies.</p>
                    <a href="https://buy.stripe.com/7sY9AUdlu86Q3z55Wv5sA1m" className="btn btn-primary btn-large" style={{ fontSize: '1.25rem', padding: '18px 48px', boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)', textDecoration: 'none' }}>
                        Purchase The Full Guide Now
                    </a>
                    <p style={{ marginTop: '16px', fontSize: '0.875rem', color: '#71717a' }}>Secure payment powered by Stripe. Instant PDF Download.</p>
                </div>
            </section>
        </div>
    );
};

export default JuniorHockeyGuide;

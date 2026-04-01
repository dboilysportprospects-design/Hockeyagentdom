import React, { useState } from 'react';
import { Lock, Shield, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const IntakeFunnel = ({ selectedPlan, initialStep = 1 }) => {
  const [step, setStep] = useState(initialStep); // 1: Contact, 2: Vitals, 3: Hockey, 4: Ambition, 5: Media, 6: Success
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    height: '', weight: '', gpa: '',
    eliteProspects: '', currentTeam: '', position: '',
    nextSeasonPlan: '', shortTermGoal: '', longTermGoal: '',
    videoUrl: '', noFilm: false
  });

  const planName = selectedPlan === 'video' ? 'The Video Audit' : 'The Scorecard Evaluation';
  const planPrice = selectedPlan === 'video' ? '$149' : '$49';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const nextStep = (e) => {
    e?.preventDefault();
    setStep(s => s + 1);
  };

  const prevStep = () => {
    setStep(s => s - 1);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data captured:", formData);
    
    // 1. Send data to a Webhook (Zapier/Make) to trigger emails if configured
    const webhookUrl = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const payload = {
          planName: selectedPlan === 'video' ? 'The Video Audit' : 'The Scorecard Evaluation',
          planPrice: selectedPlan === 'video' ? '$149' : '$49',
          ...formData
        };

        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
        console.log("Successfully sent order details to Webhook");
      } catch (error) {
        console.error("Failed to send tracking data to webhook:", error);
      }
    }

    // 2. Redirect to Stripe Payment Link
    const stripeLinks = {
      scorecard: "https://buy.stripe.com/test_eVqfZidlu5YIglRckT5sA00", // TEST LINK
      video: "https://buy.stripe.com/test_eVqfZidlu5YIglRckT5sA00" // TEST LINK
    };

    const baseUrl = stripeLinks[selectedPlan];
    
    // Automatically pre-fill the customer's email on the Stripe checkout page
    const emailParam = formData.email ? `?prefilled_email=${encodeURIComponent(formData.email)}` : '';
    const link = `${baseUrl}${emailParam}`;
    
    // For local development simulation
    if (baseUrl.includes('DUMMY_LINK')) {
      window.location.href = `/?payment=success&plan=${selectedPlan}`;
    } else {
      window.location.href = link; 
    }
  };

  const renderProgress = () => {
    if (step === 6) return null;
    const progress = ((step - 1) / 5) * 100;
    return (
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          <span>Step {step} of 5</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div style={{ height: '4px', backgroundColor: 'var(--color-surface-hover)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: 'var(--color-accent)', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>
    );
  };

  return (
    <section style={{ padding: '4rem 0', minHeight: '80vh', backgroundColor: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        
        <div className="card animate-fade-in" style={{ backgroundColor: '#0f0f0f' }}>
          
          {/* Step 0 Checkout completely removed as Stripe handles it now */}

          {renderProgress()}

          {step === 1 && (
            <form onSubmit={nextStep} className="animate-fade-in">
              <h3 style={{ marginBottom: '0.5rem' }}>Contact Information</h3>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>Where should we send your evaluation?</p>

              <div className="form-group">
                <label className="form-label">Player's Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="e.g. John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="(555) 000-0000" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={nextStep} className="animate-fade-in">
              <h3 style={{ marginBottom: '0.5rem' }}>Player Vitals</h3>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>Physical stats and academic standing.</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Height</label>
                  <input required type="text" name="height" value={formData.height} onChange={handleChange} className="form-input" placeholder="e.g. 5'11&quot;" />
                </div>
                <div className="form-group">
                  <label className="form-label">Weight (lbs)</label>
                  <input required type="number" name="weight" value={formData.weight} onChange={handleChange} className="form-input" placeholder="e.g. 175" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Current GPA</label>
                <input required type="text" name="gpa" value={formData.gpa} onChange={handleChange} className="form-input" placeholder="e.g. 3.5" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <ArrowLeft size={18} /> Back
                </button>
                <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={nextStep} className="animate-fade-in">
              <h3 style={{ marginBottom: '0.5rem' }}>Hockey Data</h3>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>Your playing history.</p>

              <div className="form-group">
                <label className="form-label">Elite Prospects Link (Optional)</label>
                <input type="url" name="eliteProspects" value={formData.eliteProspects} onChange={handleChange} className="form-input" placeholder="https://eliteprospects.com/player/..." />
              </div>
              <div className="form-group">
                <label className="form-label">Current Team & Level</label>
                <input required type="text" name="currentTeam" value={formData.currentTeam} onChange={handleChange} className="form-input" placeholder="e.g. U16 AAA Knights" />
              </div>
              <div className="form-group">
                <label className="form-label">Primary Position</label>
                <select required name="position" value={formData.position} onChange={handleChange} className="form-select">
                  <option value="">Select a position...</option>
                  <option value="C">Center</option>
                  <option value="LW">Left Wing</option>
                  <option value="RW">Right Wing</option>
                  <option value="LD">Left Defense</option>
                  <option value="RD">Right Defense</option>
                  <option value="G">Goalie</option>
                </select>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-outline">
                  <ArrowLeft size={18} />
                </button>
                <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <form onSubmit={nextStep} className="animate-fade-in">
              <h3 style={{ marginBottom: '0.5rem' }}>Ambition Profiles</h3>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>We evaluate based on where you want to go.</p>

              <div className="form-group">
                <label className="form-label">Plan for Next Season</label>
                <input required type="text" name="nextSeasonPlan" value={formData.nextSeasonPlan} onChange={handleChange} className="form-input" placeholder="e.g. Make the Junior A roster" />
              </div>
              <div className="form-group">
                <label className="form-label">Short-Term Goal (1-2 years)</label>
                <textarea required name="shortTermGoal" value={formData.shortTermGoal} onChange={handleChange} className="form-textarea" rows="2" placeholder="e.g. Secure an NCAA commitment" />
              </div>
              <div className="form-group">
                <label className="form-label">Long-Term Goal</label>
                <textarea required name="longTermGoal" value={formData.longTermGoal} onChange={handleChange} className="form-textarea" rows="2" placeholder="e.g. Play professional hockey in Europe or NA" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-outline">
                  <ArrowLeft size={18} />
                </button>
                <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}

          {step === 5 && (
            <form onSubmit={handleFinalSubmit} className="animate-fade-in">
              <h3 style={{ marginBottom: '0.5rem' }}>Media Submission</h3>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>
                To ensure fast review times without overwhelming servers, we only accept URL links. Do not attempt to upload raw video files.
              </p>

              <div className="form-group">
                <label className="form-label">Highlight Tape / Game Film URL</label>
                <input 
                  required={!formData.noFilm} 
                  disabled={formData.noFilm}
                  type="url" 
                  name="videoUrl" 
                  value={formData.videoUrl} 
                  onChange={handleChange} 
                  className="form-input" 
                  style={{ 
                    borderColor: formData.noFilm ? 'var(--color-border)' : 'var(--color-accent)', 
                    opacity: formData.noFilm ? 0.3 : 1 
                  }}
                  placeholder="https://youtube.com/watch?v=..." 
                />
                <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>Must be a YouTube, Vimeo, or Google Drive link.</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', marginBottom: '1rem', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                <input 
                  type="checkbox" 
                  id="noFilm" 
                  name="noFilm" 
                  checked={formData.noFilm} 
                  onChange={handleChange} 
                  style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer', accentColor: 'var(--color-accent)' }}
                />
                <label htmlFor="noFilm" style={{ cursor: 'pointer', margin: 0, userSelect: 'none' }}>I do not have film right now. Proceed anyway.</label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-outline">
                  <ArrowLeft size={18} />
                </button>
                <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', backgroundColor: 'var(--color-success)', color: '#000' }}>
                  <Lock size={18} /> Proceed to Payment
                </button>
              </div>
            </form>
          )}

          {step === 6 && (
            <div className="animate-fade-in text-center" style={{ padding: '2rem 0' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--color-success)' }} />
              </div>
              <h2 style={{ marginBottom: '1rem' }}>Application Received</h2>
              <p className="text-muted" style={{ marginBottom: '2rem' }}>
                Your {planName} profile has been submitted successfully to our scouting department. You will receive an email confirmation shortly.
              </p>
              <button onClick={() => window.location.reload()} className="btn btn-outline">
                Return to Home
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default IntakeFunnel;

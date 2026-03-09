import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    epLink: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Elite Prospects Link: ${formData.epLink || 'N/A'}

Message:
${formData.message}`);

    window.location.href = `mailto:dboily.sportprospects@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
            <Mail size={32} className="text-accent" />
          </div>
          <h2 style={{ marginBottom: '1rem' }}>Contact Me</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
            Have a question or want to discuss your development? Fill out the form below and I'll get back to you.
          </p>
        </div>

        {submitted ? (
          <div className="card text-center animate-fade-in" style={{ padding: '3rem', backgroundColor: '#0a0a0a' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-success)' }}>Message Sent Successfully!</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Thanks for reaching out. I will review your message and get back to you as soon as possible.</p>
            <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '2rem' }}>Send Another Message</button>
          </div>
        ) : (
          <div className="card animate-fade-in" style={{ backgroundColor: '#0a0a0a' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="e.g. John Doe" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Elite Prospects Link</label>
                <input type="url" name="epLink" value={formData.epLink} onChange={handleChange} className="form-input" placeholder="https://www.eliteprospects.com/player/..." />
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} className="form-textarea" rows="5" placeholder="Let me know how I can help..." />
              </div>

              <button type="submit" className="btn btn-primary btn-full" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

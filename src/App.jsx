import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import GapSection from './components/GapSection';
import AgentProfile from './components/AgentProfile';
import SkaterSection from './components/SkaterSection';
import GoaltenderSection from './components/GoaltenderSection';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import IntakeFunnel from './components/IntakeFunnel';

import JuniorHockeyGuide from './components/JuniorHockeyGuide';

function App() {
  const [showIntake, setShowIntake] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [initialStep, setInitialStep] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') {
      const plan = params.get('plan') || 'scorecard';
      setSelectedPlan(plan);
      setInitialStep(6);
      setShowIntake(true);
      
      // Clean up the URL so it looks professional while keeping state active
      window.history.replaceState({}, document.title, window.location.pathname);
      
      setTimeout(() => {
        const funnel = document.getElementById('intake-funnel');
        if (funnel) funnel.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleStartEvaluation = () => {
    // Scroll to pricing section
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setInitialStep(1);
    setShowIntake(true);
    setTimeout(() => {
      const funnel = document.getElementById('intake-funnel');
      if (funnel) funnel.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app-container">
      <Hero onStart={handleStartEvaluation} />
      <GapSection />
      <AgentProfile />
      <SkaterSection />
      <GoaltenderSection />
      <Pricing onSelectPlan={handleSelectPlan} />
      
      <JuniorHockeyGuide />
      
      <Contact />
      
      {showIntake && (
        <div id="intake-funnel">
          {/* We hide the hero and pricing if they are filling out the intake form to remove distractions */}
          <div style={{ backgroundColor: 'var(--color-bg)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, overflowY: 'auto' }}>
            <IntakeFunnel selectedPlan={selectedPlan} initialStep={initialStep} />
          </div>
        </div>
      )}
      
      <footer style={{ borderTop: '1px solid var(--color-border)', padding: '2rem 0', textAlign: 'center', marginTop: '4rem' }}>
        <p className="text-muted">© 2026 Pro Hockey Evaluation. Elevate your game.</p>
      </footer>
    </div>
  );
}

export default App;

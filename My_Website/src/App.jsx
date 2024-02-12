import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ProfExpSummary from './components/ProfExpSummary';
import ProjectSummary from './components/ProjectSummary';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <HomePage style={{ backgroundColor: scrollPosition < window.innerHeight ? '#color1' : '#color2' }} />
      <ProfExpSummary />
      <ProjectSummary />
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import BarPlot from './components/BarPlot';
import BubblePlot from './components/BubblePlot';
import LInePlot from './components/LInePlot';
import PiePlot from './components/PiePlot';
import RadarPlot from './components/RadarPlot';

function App() {
  return (
    <div className="App">
       <LInePlot />
       <PiePlot />
       <BarPlot />
       <RadarPlot />
       <BubblePlot />
    </div>
  );
}

export default App;
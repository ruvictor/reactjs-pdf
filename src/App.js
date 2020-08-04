import React from 'react';
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './components/PDF';

function App() {
  return (
    <div className="App">
      <PDFViewer>
        <PDF />
      </PDFViewer>
    </div>
  );
}

export default App;

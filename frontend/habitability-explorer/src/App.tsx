import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ExploreView from './components/explore/ExploreView';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ExploreView />} />
          {/* Additional routes can be added here */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
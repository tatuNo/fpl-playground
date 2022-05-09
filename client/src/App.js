import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomepageLayout from './components/HomepageLayout';
import { MediaContextProvider } from './utils';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

const App = () => (
  <MediaContextProvider>
    <DesktopMenu />
    <MobileMenu />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageLayout />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </MediaContextProvider>
);

export default App;

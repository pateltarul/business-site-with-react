import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGallery from '@/components/ProductGallery';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Login from '@/components/Login';
import Admin from '@/components/Admin';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Helmet>
        <title>AXIS PAINTS - Premium Wall Paint Solutions</title>
        <meta name="description" content="Transform your space with AXIS PAINTS' premium wall paints. Explore our vibrant colour gallery, competitive pricing, and get expert consultation today." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ProductGallery />
              <Pricing />
              <Contact />
            </main>
          } />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/admin" element={<Admin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
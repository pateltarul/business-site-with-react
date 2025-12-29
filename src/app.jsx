import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGallery from '@/components/ProductGallery';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>AXIS PAINTS - Premium Wall Paint Solutions</title>
        <meta name="description" content="Transform your space with AXIS PAINTS' premium wall paints. Explore our vibrant colour gallery, competitive pricing, and get expert consultation today." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <ProductGallery />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
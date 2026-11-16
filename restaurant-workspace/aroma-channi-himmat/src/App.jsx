import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsBanner from './components/PillarsBanner';
import HeritageStory from './components/HeritageStory';
import ChefSpecials from './components/ChefSpecials';
import InteractiveMenu from './components/InteractiveMenu';
import Testimonials from './components/Testimonials';
import LocationAndHours from './components/LocationAndHours';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import DishDetailModal from './components/DishDetailModal';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  const handleSelectDish = (dish) => {
    setSelectedDish(dish);
  };

  const handleCloseDishModal = () => {
    setSelectedDish(null);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      const navOffset = 70;
      const elementPosition = menuEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      {/* Top Sticky Glassmorphic Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenReservation={handleOpenReservation} 
          onExploreMenu={handleExploreMenu} 
        />

        {/* 4 Pillars of Integrity */}
        <PillarsBanner />

        {/* The Heritage Story & Kashmiri Roots */}
        <HeritageStory />

        {/* Executive Chef's Royal Spotlight */}
        <ChefSpecials 
          onSelectDish={handleSelectDish} 
          onOpenReservation={handleOpenReservation} 
        />

        {/* Interactive Artisanal Menu (Filterable, Searchable, 44 items) */}
        <InteractiveMenu 
          onSelectDish={handleSelectDish} 
          onOpenReservation={handleOpenReservation} 
        />

        {/* Verified Jammu Diner Testimonials */}
        <Testimonials />

        {/* Location, Driving Directions & Service Hours */}
        <LocationAndHours onOpenReservation={handleOpenReservation} />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Fixed Bottom Action Bar for Mobile (< 768px) */}
      <MobileActionBar onOpenReservation={handleOpenReservation} />

      {/* Interactive Dish Inspection Modal */}
      {selectedDish && (
        <DishDetailModal 
          dish={selectedDish} 
          onClose={handleCloseDishModal} 
          onOpenReservation={handleOpenReservation} 
        />
      )}

      {/* Interactive Table Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={handleCloseReservation} 
      />
    </div>
  );
}

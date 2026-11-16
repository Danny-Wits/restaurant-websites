import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudentPerkBanner from './components/StudentPerkBanner';
import InteractiveMenu from './components/InteractiveMenu';
import MusicGigsRoster from './components/MusicGigsRoster';
import HeritageStory from './components/HeritageStory';
import Testimonials from './components/Testimonials';
import LocationAndHours from './components/LocationAndHours';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import DishDetailModal from './components/DishDetailModal';
import GigReservationModal from './components/GigReservationModal';

export default function App() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [selectedGig, setSelectedGig] = useState(null);

  // Trigger reservation from Navbar or Hero
  const handleOpenReserve = () => {
    setSelectedGig(null);
    setIsReserveModalOpen(true);
  };

  // Trigger reservation with a specific gig pre-selected
  const handleSelectGig = (gig) => {
    setSelectedGig(gig);
    setIsReserveModalOpen(true);
  };

  // Trigger reservation for a specific dish
  const handleReserveForDish = (dish) => {
    setSelectedDish(dish);
    setIsReserveModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F1110] text-[#F4F4F5] font-sans selection:bg-amber-500 selection:text-zinc-950 w-full max-w-full overflow-x-hidden relative">
      {/* Top Fixed Navbar */}
      <Navbar onOpenReserve={handleOpenReserve} />

      {/* Main Content */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section with Dynamic Day Cafe / Night Lounge vibe */}
        <Hero onOpenReserve={handleOpenReserve} />

        {/* University of Jammu Student Perks Banner */}
        <StudentPerkBanner onOpenReserve={handleOpenReserve} />

        {/* Interactive 40-Dish Culinary Menu with Search & Filter Tabs */}
        <InteractiveMenu onSelectDish={(dish) => setSelectedDish(dish)} />

        {/* Live Weekly Music & Gigs Roster */}
        <MusicGigsRoster onSelectGig={handleSelectGig} />

        {/* The Raasta Soul / Heritage Story */}
        <HeritageStory onOpenReserve={handleOpenReserve} />

        {/* Student & Patron Testimonials */}
        <Testimonials />

        {/* Panama Chowk Location, Hours & Amenities */}
        <LocationAndHours />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Mobile Fixed Thumb Action Bar */}
      <MobileActionBar onOpenReserve={handleOpenReserve} />

      {/* Dish Recipe & Pairing Detail Modal */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onReserveForDish={handleReserveForDish}
        />
      )}

      {/* Interactive Gig & Table Reservation Modal */}
      <GigReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => {
          setIsReserveModalOpen(false);
          setSelectedGig(null);
        }}
        preselectedGig={selectedGig}
        preselectedDish={selectedDish}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedExcavator } from './components/FeaturedExcavator';
import { HeavyEquipmentGrid } from './components/HeavyEquipmentGrid';
import { EngineeringProductsGrid } from './components/EngineeringProductsGrid';
import { YouAskWeSource } from './components/YouAskWeSource';
import { GlobalSourcingGlobe } from './components/GlobalSourcingGlobe';
import { NegotiationSection } from './components/NegotiationSection';
import { BulkOrderSection } from './components/BulkOrderSection';
import { ExportProcessTimeline } from './components/ExportProcessTimeline';
import { WhyNovaterra } from './components/WhyNovaterra';
import { WhoWeServe } from './components/WhoWeServe';
import { TransparencySection } from './components/TransparencySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuotationFormModal } from './components/QuotationFormModal';
import { EquipmentDetailModal } from './components/EquipmentDetailModal';
import { EquipmentItem } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<string>('');
  const [selectedEquipmentDetail, setSelectedEquipmentDetail] = useState<EquipmentItem | null>(null);

  const handleOpenQuoteModal = (product?: string) => {
    setSelectedQuoteProduct(product || '');
    setQuoteModalOpen(true);
  };

  const handleOpenNegotiationModal = (product?: string) => {
    // Scroll directly to negotiation section with smooth animation
    const el = document.getElementById('negotiation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomRequirement = () => {
    const el = document.getElementById('you-ask-we-source');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Header Navigation */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenNegotiationModal={() => handleOpenNegotiationModal()}
      />

      {/* Main Sections */}
      <main>
        {/* 06 — HERO SECTION */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenNegotiationModal={handleOpenNegotiationModal}
        />

        {/* 07 — FIRST PRODUCT FEATURE: EXCAVATOR */}
        <FeaturedExcavator
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenNegotiationModal={handleOpenNegotiationModal}
        />

        {/* 08 — HEAVY EQUIPMENT SECTION (14 Cards) */}
        <HeavyEquipmentGrid
          onSelectEquipment={(item) => setSelectedEquipmentDetail(item)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 09 — ALL ENGINEERING PRODUCTS (10 Categories) */}
        <EngineeringProductsGrid
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenCustomRequirement={handleOpenCustomRequirement}
        />

        {/* 10 — YOU ASK, WE SOURCE (Custom Sourcing USP) */}
        <YouAskWeSource />

        {/* 11 — GLOBAL SOURCING (3D Animated Globe) */}
        <GlobalSourcingGlobe />

        {/* 12 — NEGOTIATION SECTION */}
        <NegotiationSection
          onOpenNegotiationModal={() => {
            const el = document.getElementById('negotiation');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 14 — BULK ORDER SECTION */}
        <BulkOrderSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 15 — EXPORT PROCESS TIMELINE */}
        <ExportProcessTimeline />

        {/* 16 — WHY NOVATERRA MACHINARY */}
        <WhyNovaterra />

        {/* 17 — WHO WE SERVE (12 B2B Buyer Archetypes) */}
        <WhoWeServe />

        {/* 18 — TRANSPARENCY SECTION */}
        <TransparencySection />

        {/* 19 — FINAL CTA */}
        <FinalCTA
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenNegotiationModal={handleOpenNegotiationModal}
          onOpenCustomRequirement={handleOpenCustomRequirement}
        />
      </main>

      {/* 20 — CONTACT & FOOTER */}
      <Footer />

      {/* 21 — FLOATING WHATSAPP & MOBILE STICKY CTAS */}
      <FloatingWhatsApp
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenNegotiationModal={handleOpenNegotiationModal}
      />

      {/* 13 — CUSTOM QUOTATION FORM MODAL */}
      <QuotationFormModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={selectedQuoteProduct}
      />

      {/* EQUIPMENT DETAIL SPECIFICATIONS MODAL */}
      <EquipmentDetailModal
        item={selectedEquipmentDetail}
        onClose={() => setSelectedEquipmentDetail(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenNegotiationModal={handleOpenNegotiationModal}
      />
    </div>
  );
}

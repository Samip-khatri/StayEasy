import { useState } from 'react'
import { motion } from 'framer-motion'
import SearchCard from './SearchCard'

function HeroSection() {
  const [activeTab, setActiveTab] = useState<'stays' | 'experiences'>('stays')

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/12/29122005/yak.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center px-4 mt-[-60px]"
      >
        <h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Find your perfect stay
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">
          Discover hotels, villas & unique accommodations around the world
        </p>

        <div className="flex items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('stays')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'stays'
                ? 'bg-white text-gray-900 shadow-md'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Stays
          </button>
          <button
            onClick={() => setActiveTab('experiences')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'experiences'
                ? 'bg-white text-gray-900 shadow-md'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Experiences
          </button>
        </div>

        <div className="w-full max-w-3xl">
          <SearchCard />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

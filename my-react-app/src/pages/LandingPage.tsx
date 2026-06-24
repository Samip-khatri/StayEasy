import { useState } from "react";
import { ChevronRight, Star, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { CategoryFilter } from "../components/CategoryFilter";
import { HotelCard } from "../components/HotelCard";
import { DestinationCard } from "../components/DestinationCard";
import { Footer } from "../components/Footer";
import { hotels } from "../data/hotels";

const destinations = [
  { city: "Bali", country: "Indonesia", properties: 4820, imageUrl: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=530&fit=crop&auto=format" },
  { city: "Santorini", country: "Greece", properties: 1930, imageUrl: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=400&h=530&fit=crop&auto=format" },
  { city: "Tokyo", country: "Japan", properties: 7210, imageUrl: "https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?w=400&h=530&fit=crop&auto=format" },
  { city: "Kathmandu", country: "Nepal", properties: 840, imageUrl: "https://images.unsplash.com/photo-1529094344530-42b4571ac6b8?w=400&h=530&fit=crop&auto=format" },
];

const trustPoints = [
  { icon: Shield, title: "Verified Properties", desc: "Every listing is manually reviewed and verified by our quality team before going live." },
  { icon: Star,   title: "Curated Experiences", desc: "Hand-picked hotels, villas and stays across 195+ countries for every type of traveller." },
  { icon: Globe,  title: "24/7 Support",         desc: "Dedicated support in 12 languages, wherever you are in the world." },
];

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? hotels : hotels.filter(h => h.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", fontFamily: "'Inter', sans-serif" }}>
      <HeroSection />
      <CategoryFilter selected={activeCategory} onChange={setActiveCategory} />

      <main className="max-w-[1280px] mx-auto px-6 py-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
            {filtered.map(hotel => <HotelCard key={hotel.id} {...hotel} />)}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-4xl">🏨</p>
            <p className="font-semibold" style={{ fontSize: "1.0625rem", color: "var(--foreground)" }}>No properties in this category</p>
            <button onClick={() => setActiveCategory("all")} className="px-5 py-2.5 rounded-full border text-sm font-medium transition-all hover:bg-accent" style={{ borderColor: "var(--border)", color: "var(--foreground)" }}>
              Clear filter
            </button>
          </div>
        )}
      </main>

      <section className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: "1.625rem", color: "var(--brand-dark)" }}>Popular destinations</h2>
            <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>Trending places loved by travellers worldwide</p>
          </div>
          <button className="flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: "var(--primary)" }}>
            Show all <ChevronRight size={15} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map(dest => <DestinationCard key={dest.city} {...dest} />)}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: "1.625rem", color: "var(--brand-dark)" }}>Why choose StayEasy?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-border p-6 flex flex-col gap-4 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
                <Icon size={22} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p className="font-semibold mb-1.5" style={{ color: "var(--brand-dark)" }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-6 md:mx-auto max-w-[1280px] mb-16">
        <div
          className="rounded-2xl overflow-hidden relative min-h-[260px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(26,60,94,0.88) 0%, rgba(26,60,94,0.5) 60%), url('https://images.unsplash.com/photo-1554647286-f365d7defc2d?w=1200&h=500&fit=crop&auto=format')`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 px-10 py-12 max-w-lg">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#EBF5FB", opacity: 0.8 }}>Become a Host</p>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem,3vw,2rem)", color: "white", lineHeight: 1.2 }}>
              Turn your property into income
            </h2>
            <p className="text-sm mt-3 mb-6 leading-relaxed" style={{ color: "rgba(235,245,251,0.82)" }}>
              Join thousands of hosts earning extra income by sharing their spaces with travellers around the world.
            </p>
            <Link to="/host" className="inline-block bg-white text-sm font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all" style={{ color: "var(--brand-dark)" }}>
              Learn more about hosting
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

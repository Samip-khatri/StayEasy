import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export function SearchBar() {
  const [activeTab, setActiveTab] = useState<"stays" | "experiences">("stays");
  const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-1 rounded-full p-1" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
        {(["stays", "experiences"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-6 py-2 rounded-full text-sm font-semibold transition-all capitalize"
            style={{
              backgroundColor: activeTab === tab ? "white" : "transparent",
              color: activeTab === tab ? "var(--brand-dark)" : "rgba(255,255,255,0.9)",
              boxShadow: activeTab === tab ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden border border-border">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr_auto] items-stretch">
          <div className="flex items-center gap-3 px-5 py-4 hover:bg-accent/50 transition-colors cursor-pointer rounded-tl-2xl rounded-bl-2xl">
            <MapPin size={17} style={{ color: "var(--primary)", flexShrink: 0 }} />
            <div className="min-w-0">
              <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">Where</div>
              <input
                type="text"
                placeholder="Search destinations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-sm bg-transparent border-none outline-none placeholder:text-muted-foreground"
                style={{ color: "var(--foreground)" }}
              />
            </div>
          </div>

          <div className="hidden md:block bg-border w-px my-4" />

          <div className="flex items-center gap-3 px-5 py-4 hover:bg-accent/50 transition-colors cursor-pointer">
            <Calendar size={17} style={{ color: "var(--primary)", flexShrink: 0 }} />
            <div>
              <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">Check in</div>
              <div className="text-sm text-muted-foreground">Add dates</div>
            </div>
          </div>

          <div className="hidden md:block bg-border w-px my-4" />

          <div className="flex items-center gap-3 px-5 py-4 hover:bg-accent/50 transition-colors cursor-pointer">
            <Users size={17} style={{ color: "var(--primary)", flexShrink: 0 }} />
            <div>
              <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">Guests</div>
              <div className="text-sm text-muted-foreground">Add guests</div>
            </div>
          </div>

          <div className="flex items-center justify-center p-3">
            <button
              className="rounded-xl px-5 py-3 flex items-center gap-2 font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <Search size={15} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

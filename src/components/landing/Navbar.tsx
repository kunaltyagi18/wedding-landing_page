import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const go = (id: string) => {
  if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const links: [string, string][] = [
  ["Our Story", "our-story"],
  ["Services", "services"],
  ["Gallery", "gallery"],
  ["Journal", "journal"],
];
const weddings = ["Destination", "Traditional", "Royal", "Intimate"];

export function Navbar({ onEnquire }: { onEnquire: () => void }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const nav = (id: string) => { go(id); setOpen(false); setDrop(false); };
  const item = "font-serif text-[17px] text-maroon-dark transition hover:text-maroon focus-visible:outline-none focus-visible:text-gold active:opacity-70";

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <button onClick={() => nav("top")} aria-label="Ananta Sutra home" className="relative lg:ml-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-gold bg-cream text-center font-serif text-[10px] leading-tight text-maroon shadow-md ring-4 ring-maroon lg:h-20 lg:w-20 lg:translate-y-4 lg:text-xs">
            ANANTA<br />SUTRA
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          <button onClick={() => nav("top")} className={`${item} border-b-2 border-maroon pb-1`}>Home</button>
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button onClick={() => nav("services")} onFocus={() => setDrop(true)} className={`${item} flex items-center gap-1`}>
              Weddings <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {drop && (
              <div className="absolute left-0 top-full w-48 border border-gold/30 bg-cream py-2 shadow-xl animate-fade-in">
                {weddings.map((w) => (
                  <button key={w} onClick={() => nav("services")} className="block w-full px-4 py-2 text-left font-serif text-maroon-dark transition hover:bg-gold/15 hover:text-maroon">
                    {w} Weddings
                  </button>
                ))}
              </div>
            )}
          </div>
          {links.map(([l, id]) => (
            <button key={l} onClick={() => nav(id)} className={item}>{l}</button>
          ))}
          <button onClick={() => nav("contact")} className={item}>Contact</button>
        </nav>

        <button onClick={onEnquire} className="hidden bg-maroon px-8 py-3 font-serif text-[16px] text-cream shadow transition hover:bg-maroon-dark focus-visible:outline-2 focus-visible:outline-gold active:scale-95 lg:mr-10 lg:block">
          Plan Your Wedding →
        </button>
        <button className="p-2 text-maroon lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-cream px-6 py-4 lg:hidden animate-fade-in">
          <button onClick={() => nav("top")} className={`${item} block py-2`}>Home</button>
          <button onClick={() => setDrop(!drop)} className={`${item} flex items-center gap-1 py-2`}>Weddings <ChevronDown className="h-4 w-4" /></button>
          {drop && weddings.map((w) => (
            <button key={w} onClick={() => nav("services")} className="block py-1.5 pl-4 font-serif text-maroon-dark/80">{w} Weddings</button>
          ))}
          {links.map(([l, id]) => (
            <button key={l} onClick={() => nav(id)} className={`${item} block py-2`}>{l}</button>
          ))}
          <button onClick={() => nav("contact")} className={`${item} block py-2`}>Contact</button>
          <button onClick={() => { onEnquire(); setOpen(false); }} className="mt-3 w-full bg-maroon py-3 font-serif text-cream active:scale-95">Plan Your Wedding →</button>
        </div>
      )}
    </header>
  );
}

export { go };

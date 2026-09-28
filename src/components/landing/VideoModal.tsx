"use client";

import { Modal } from "./Modal";
import { Film } from "lucide-react";

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} dark className="max-w-4xl bg-maroon-dark p-2 pt-12">
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 border border-gold/20">
        <Film className="h-12 w-12 text-gold/50" strokeWidth={1.2} />
        <p className="font-serif text-lg text-cream/60">Video coming soon.</p>
        <p className="font-serif text-sm text-cream/35">Add your video link in VideoModal.tsx</p>
      </div>
    </Modal>
  );
}

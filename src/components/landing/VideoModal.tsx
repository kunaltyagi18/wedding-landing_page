import { Modal } from "./Modal";

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} dark className="max-w-4xl bg-maroon-dark p-2 pt-12">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Our Story"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>
    </Modal>
  );
}

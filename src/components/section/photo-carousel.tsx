/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";

export default function PhotoCarousel() {
  if (DATA.photos.length === 0) return null;
  // Rendered twice so the -50% translate loops seamlessly.
  const photos = [...DATA.photos, ...DATA.photos];
  return (
    <div className="photo-carousel">
      <div className="photo-carousel-track">
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden={i >= DATA.photos.length}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

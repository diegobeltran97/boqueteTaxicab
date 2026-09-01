/**
 * Photo header for the tour cards. Files live in /public/tours, so swapping a
 * destination photo is a one-line change here. Filenames are case-sensitive
 * once deployed, so they must match the files on disk exactly.
 */

type SceneName = "baru" | "canyon" | "waterfall";

const TOUR_PHOTOS: Record<SceneName, string> = {
  baru: "/tours/volcanbaru.jpeg",
  canyon: "/tours/penaBlanca.jpeg",
  waterfall: "/tours/lostwaterfall.jpeg",
};

/**
 * The photo is cropped to a 4:3 frame by `.tour-art` in globals.css, so
 * portrait and widescreen source files both sit in the card cleanly.
 */
export function TourArt({
  scene,
  photo,
  alt,
}: {
  scene: SceneName;
  photo?: string;
  alt: string;
}) {
  return (
    <div className="tour-art">
      <img src={photo ?? TOUR_PHOTOS[scene]} alt={alt} loading="lazy" />
    </div>
  );
}

// Shows the real photo when `place.image` is set, otherwise a coloured
// placeholder made from the destination's two colours and its photo label.
export default function DestinationPhoto({ place, large = false }) {
  const className = large ? "photo photo-lg" : "photo";

  if (place.image) {
    return <img className={className} src={place.image} alt={place.name} />;
  }

  const [a, b] = place.colors || ["#1b6f8a", "#1f4a3a"];
  return (
    <div
      className={`${className} ph-grad`}
      style={{ background: `linear-gradient(155deg, ${a}, ${b})` }}
      role="img"
      aria-label={`Photo placeholder: ${place.photo}`}
    >
      <span>{place.photo}</span>
    </div>
  );
}

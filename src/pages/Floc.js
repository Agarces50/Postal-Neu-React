export default function Floc({ x, y, z }) {
  return (
    <span
      style={{ top: `${y}%`, left: `${z}%`, right: `${y}%` }}
      className="floc"
    >
      ❆
    </span>
  );
}

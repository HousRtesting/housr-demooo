export default function Logo({ className = "", size = "medium" }) {
  const sizes = {
    small: "h-6",
    medium: "h-8",
    large: "h-10",
    xlarge: "h-14",
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className={`font-bold ${size === "xlarge" ? "text-5xl" : "text-2xl"}`}>
        HousR
      </span>
    </div>
  );
}
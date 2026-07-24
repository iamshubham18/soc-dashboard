import clsx from "clsx";

function Badge({ severity }) {
  const colors = {
    Critical: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={clsx(
        "px-3 py-1 rounded-full text-xs font-semibold",
        colors[severity]
      )}
    >
      {severity}
    </span>
  );
}

export default Badge;
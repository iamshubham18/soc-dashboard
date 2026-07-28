import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { ClipboardList } from "lucide-react";

const incidents = [
  {
    id: 1,
    title: "Phishing Email Investigation",
    status: "In Progress",
    analyst: "John",
  },
  {
    id: 2,
    title: "Ransomware Detection",
    status: "Critical",
    analyst: "Alice",
  },
  {
    id: 3,
    title: "Unauthorized Login",
    status: "Resolved",
    analyst: "David",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "Critical":
      return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400";

    case "In Progress":
      return "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400";

    case "Resolved":
      return "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400";

    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300";
  }
}

function RecentIncidents() {
  return (
    <Card className="p-6">
      <SectionHeader
        title="Recent Incidents"
        subtitle="Latest investigation cases"
        action={<ClipboardList className="text-blue-500" size={22} />}
      />

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              p-4
              transition-all
              duration-300
              hover:border-blue-300
              hover:shadow-md
            "
          >
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {incident.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Analyst: {incident.analyst}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                incident.status
              )}`}
            >
              {incident.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentIncidents;
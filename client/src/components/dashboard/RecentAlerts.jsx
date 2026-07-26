import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { ShieldAlert } from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "Brute Force Login Attempt",
    severity: "Critical",
    source: "Firewall",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Malware Detected",
    severity: "High",
    source: "Windows Defender",
    time: "15 min ago",
  },
  {
    id: 3,
    title: "Suspicious Network Traffic",
    severity: "Medium",
    source: "IDS",
    time: "30 min ago",
  },
  {
    id: 4,
    title: "Multiple Failed Login Attempts",
    severity: "Low",
    source: "Active Directory",
    time: "1 hour ago",
  },
];

function getSeverityColor(severity) {
  switch (severity) {
    case "Critical":
      return "bg-red-100 text-red-700";
    case "High":
      return "bg-orange-100 text-orange-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-green-100 text-green-700";
  }
}

function RecentAlerts() {
  return (
    <Card className="p-6">
      <SectionHeader
        title="Recent Alerts"
        subtitle="Latest security events"
        action={<ShieldAlert className="text-blue-600" size={22} />}
      />

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">
                  {alert.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {alert.source}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${getSeverityColor(
                  alert.severity
                )}`}
              >
                {alert.severity}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {alert.time}
              </span>

              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View →
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentAlerts;
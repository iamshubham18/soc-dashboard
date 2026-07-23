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
    title: "Multiple Failed Logins",
    severity: "Low",
    source: "Active Directory",
    time: "1 hour ago",
  },
];

function RecentAlerts() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold mb-5">
        Recent Alerts
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-3">Alert</th>
            <th className="pb-3">Severity</th>
            <th className="pb-3">Source</th>
            <th className="pb-3">Time</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr
              key={alert.id}
              className="border-b hover:bg-slate-50"
            >
              <td className="py-4">{alert.title}</td>

              <td>{alert.severity}</td>

              <td>{alert.source}</td>

              <td>{alert.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentAlerts;
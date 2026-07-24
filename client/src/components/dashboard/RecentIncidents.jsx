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

function RecentIncidents() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold mb-5">
        Recent Incidents
      </h2>

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex justify-between items-center border-b pb-3 last:border-none"
          >
            <div>
              <h3 className="font-medium">{incident.title}</h3>

              <p className="text-sm text-slate-500">
                Analyst: {incident.analyst}
              </p>
            </div>

            <span className="text-sm font-semibold text-blue-600">
              {incident.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentIncidents;
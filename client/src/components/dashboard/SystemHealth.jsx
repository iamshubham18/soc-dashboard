function HealthBar({ label, value, color }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-3 bg-slate-200 rounded-full">
        <div
          className={`${color} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function SystemHealth() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold mb-6">
        System Health
      </h2>

      <div className="space-y-6">
        <HealthBar
          label="CPU Usage"
          value={42}
          color="bg-blue-500"
        />

        <HealthBar
          label="Memory"
          value={67}
          color="bg-orange-500"
        />

        <HealthBar
          label="Disk Usage"
          value={35}
          color="bg-green-500"
        />

        <HealthBar
          label="Network"
          value={82}
          color="bg-red-500"
        />
      </div>
    </div>
  );
}

export default SystemHealth;
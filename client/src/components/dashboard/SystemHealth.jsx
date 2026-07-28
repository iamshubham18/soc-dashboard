import Card from "../ui/Card";
import CardHeader from "../ui/CardHeader";
import { Activity } from "lucide-react";

function HealthBar({ label, value, color }) {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {label}
        </span>

        <span className="font-semibold text-slate-500 dark:text-slate-400">
          {value}%
        </span>
      </div>

      {/* Progress Track */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function SystemHealth() {
  return (
    <Card className="p-6">
      <CardHeader
        icon={<Activity size={22} />}
        title="System Health"
        subtitle="Real-time infrastructure monitoring"
      />

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
    </Card>
  );
}

export default SystemHealth;
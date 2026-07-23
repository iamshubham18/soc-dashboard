import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import ThreatChart from "../components/dashboard/ThreatChart";
import RecentAlerts from "../components/dashboard/RecentAlerts";

import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  Server,
} from "lucide-react";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <h1 className="text-3xl font-bold">
          SOC Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Total Alerts"
            value="1,248"
            icon={<ShieldAlert className="text-white" />}
            color="bg-blue-500"
          />

          <StatCard
            title="Critical Alerts"
            value="18"
            icon={<Activity className="text-white" />}
            color="bg-red-500"
          />

          <StatCard
            title="Active Incidents"
            value="7"
            icon={<ShieldCheck className="text-white" />}
            color="bg-orange-500"
          />

          <StatCard
            title="System Uptime"
            value="99.98%"
            icon={<Server className="text-white" />}
            color="bg-green-500"
          />
          <div className="grid grid-cols-1 gap-6">
            <ThreatChart />
          </div>

           {/* Recent Alerts */}
          <RecentAlerts />
          
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
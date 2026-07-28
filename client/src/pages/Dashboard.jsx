import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import ThreatChart from "../components/dashboard/ThreatChart";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import RecentIncidents from "../components/dashboard/RecentIncidents";
import SystemHealth from "../components/dashboard/SystemHealth";
import TopAttackSources from "../components/dashboard/TopAttackSources";
import LiveActivityFeed from "../components/dashboard/LiveActivityFeed";

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

        {/* Dashboard Header */}
        <DashboardHeader />

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Alerts"
            value="1,248"
            trend="+18%"
            icon={<ShieldAlert className="text-white" />}
            color="bg-blue-500"
          />

          <StatCard
            title="Critical Alerts"
            value="18"
            trend="+5%"
            icon={<Activity className="text-white" />}
            color="bg-red-500"
          />

          <StatCard
            title="Active Incidents"
            value="7"
            trend="-2%"
            icon={<ShieldCheck className="text-white" />}
            color="bg-orange-500"
          />

          <StatCard
            title="System Uptime"
            value="99.98%"
            trend="+0.3%"
            icon={<Server className="text-white" />}
            color="bg-green-500"
          />
        </div>

        {/* Threat Chart + Recent Alerts */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <ThreatChart />
          </div>

          <RecentAlerts />
        </div>

        {/* Recent Incidents + System Health */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <RecentIncidents />

          <SystemHealth />
        </div>

        {/* Top Attack Sources + Live Activity */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <TopAttackSources />

          <LiveActivityFeed />
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
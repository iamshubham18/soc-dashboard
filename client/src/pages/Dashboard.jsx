import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import ThreatChart from "../components/dashboard/ThreatChart";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import RecentIncidents from "../components/dashboard/RecentIncidents";
import SystemHealth from "../components/dashboard/SystemHealth";
import TopAttackSources from "../components/dashboard/TopAttackSources";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  Server,
  Download,
} from "lucide-react";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Dashboard Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              SOC Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Monitor alerts, incidents, and system health in real time.
            </p>
          </div>

          <Button className="flex items-center gap-2">
            <Download size={18} />
            Export Report
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ThreatChart />
          </div>

          <RecentAlerts />
        </div>

        {/* Recent Incidents + System Health */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RecentIncidents />

          <SystemHealth />
        </div>

        {/* Top Attack Sources + Live Activity Feed */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <TopAttackSources />

          <Card className="p-6">

            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Live Activity Feed
            </h2>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <span className="h-3 w-3 mt-2 rounded-full bg-green-500"></span>

                <div>
                  <p className="font-medium">
                    Admin logged into the SOC Portal
                  </p>

                  <p className="text-sm text-slate-500">
                    2 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="h-3 w-3 mt-2 rounded-full bg-red-500"></span>

                <div>
                  <p className="font-medium">
                    Malware detected on PC-102
                  </p>

                  <p className="text-sm text-slate-500">
                    8 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="h-3 w-3 mt-2 rounded-full bg-yellow-500"></span>

                <div>
                  <p className="font-medium">
                    Firewall security policy updated
                  </p>

                  <p className="text-sm text-slate-500">
                    18 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="h-3 w-3 mt-2 rounded-full bg-blue-500"></span>

                <div>
                  <p className="font-medium">
                    New endpoint connected to the network
                  </p>

                  <p className="text-sm text-slate-500">
                    30 minutes ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="h-3 w-3 mt-2 rounded-full bg-green-500"></span>

                <div>
                  <p className="font-medium">
                    Incident #204 successfully resolved
                  </p>

                  <p className="text-sm text-slate-500">
                    1 hour ago
                  </p>
                </div>
              </div>

            </div>

          </Card>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
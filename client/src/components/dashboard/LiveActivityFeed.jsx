import Card from "../ui/Card";
import CardHeader from "../ui/CardHeader";
import { Activity } from "lucide-react";

const activities = [
  {
    id: 1,
    color: "bg-green-500",
    message: "User admin logged in",
    time: "Just now",
  },
  {
    id: 2,
    color: "bg-red-500",
    message: "Malware detected on PC-102",
    time: "2 min ago",
  },
  {
    id: 3,
    color: "bg-yellow-500",
    message: "Firewall policy updated",
    time: "10 min ago",
  },
  {
    id: 4,
    color: "bg-blue-500",
    message: "New endpoint connected",
    time: "18 min ago",
  },
  {
    id: 5,
    color: "bg-green-500",
    message: "Incident #204 resolved",
    time: "24 min ago",
  },
];

function LiveActivityFeed() {
  return (
    <Card className="p-6">
      <CardHeader
        icon={<Activity size={22} />}
        title="Live Activity"
        subtitle="Real-time SOC events"
      />

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="
              flex
              items-start
              gap-4

              rounded-xl

              border
              border-slate-200
              dark:border-slate-700

              p-4

              transition-all
              duration-300

              hover:border-blue-400
              hover:shadow-md
              hover:-translate-y-1
            "
          >
            <div
              className={`mt-1 h-3 w-3 rounded-full ${activity.color}`}
            />

            <div className="flex-1">
              <p className="font-medium text-slate-900 dark:text-white">
                {activity.message}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default LiveActivityFeed;
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { day: "Mon", threats: 18 },
  { day: "Tue", threats: 32 },
  { day: "Wed", threats: 21 },
  { day: "Thu", threats: 45 },
  { day: "Fri", threats: 38 },
  { day: "Sat", threats: 55 },
  { day: "Sun", threats: 42 },
];

function ThreatChart() {
  return (
    <Card className="p-6">
      <SectionHeader
  title="Weekly Threat Trend"
  subtitle="Detected threats over the last 7 days"
 />

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="threatGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="day"
              tick={{ fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#64748B" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="threats"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#threatGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default ThreatChart;
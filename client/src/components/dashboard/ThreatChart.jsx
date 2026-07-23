import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", alerts: 120 },
  { day: "Tue", alerts: 98 },
  { day: "Wed", alerts: 150 },
  { day: "Thu", alerts: 180 },
  { day: "Fri", alerts: 160 },
  { day: "Sat", alerts: 110 },
  { day: "Sun", alerts: 90 },
];

function ThreatChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
      <h2 className="text-lg font-semibold mb-5">
        Weekly Threat Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="alerts"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ThreatChart;
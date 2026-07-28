import { useState } from "react";
import Card from "../ui/Card";
import CardHeader from "../ui/CardHeader";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const weeklyData = [
  { day: "Mon", threats: 18 },
  { day: "Tue", threats: 32 },
  { day: "Wed", threats: 21 },
  { day: "Thu", threats: 45 },
  { day: "Fri", threats: 38 },
  { day: "Sat", threats: 55 },
  { day: "Sun", threats: 42 },
];

function ThreatChart() {
  const [range, setRange] = useState("7D");

  return (
    <Card className="p-6">
      <CardHeader
        title="Threat Trend"
        subtitle="Detected threats over time"
        action={
          <div className="flex rounded-xl bg-slate-100 dark:bg-slate-700 p-1">
            {["24H", "7D", "30D"].map((item) => (
              <button
                key={item}
                onClick={() => setRange(item)}
                className={`rounded-lg px-3 py-1 text-sm transition ${
                  range === item
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        }
      />

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklyData}>
            <defs>
              <linearGradient
                id="threatGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563EB"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#2563EB"
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#CBD5E1"
              vertical={false}
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

            <Tooltip
              cursor={{
                stroke: "#2563EB",
                strokeWidth: 1,
              }}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              }}
            />

            <Area
              type="monotone"
              dataKey="threats"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#threatGradient)"
              activeDot={{
                r: 6,
                fill: "#2563EB",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default ThreatChart;
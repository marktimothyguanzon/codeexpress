import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { month: "Jan", revenue: 35 },
  { month: "Feb", revenue: 45 },
  { month: "Mar", revenue: 55 },
  { month: "Apr", revenue: 52 },
  { month: "May", revenue: 70 },
  { month: "Jun", revenue: 90 },
];

export default function RevenueChart() {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area
            dataKey="revenue"
            stroke="#2563EB"
            fill="#93C5FD"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
"use client";
import { useFriends } from '@/context/FriendsContext';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
export const metadata = {
  title: "Stats | KeenKeeper",
  description: "Homepage of KeenKeeper",
};

const COLORS = {
  call: "#244D3F",
  text: "#8B5CF6",
  video: "#22C55E",
};

const Stats = () => {
  const { timelineHistory } = useFriends();

  const callCount = timelineHistory.filter((h) => h.contact === "call").length;
  const textCount = timelineHistory.filter((h) => h.contact === "text").length;
  const videoCount = timelineHistory.filter((h) => h.contact === "video").length;

  const chartData = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ].filter((d) => d.value > 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-4xl md:text-5xl text-[#1F2937] mb-8">
        Friendship Analytics
      </h1>

      <div className="rounded-2xl p-6 bg-white shadow-md">
        <p className="text-gray-500 mb-4">By Interaction Type</p>

        {chartData.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p>No interactions yet. Log a call, text, or video first!</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart style={{outline: 'none', border:'none'}}>
              <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={110}
                paddingAngle={4}
                strokeWidth={0}
              >
                {chartData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[entry.name.toLowerCase()]}
                    cornerRadius={6}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [value, name]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              />
              <Legend
                formatter={(value) => (
                  <span className="text-sm text-gray-600">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Stats;
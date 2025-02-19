// import ReactApexChart from "react-apexcharts";
import UseAuth from "../../Hook/useAuth";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import StatisticsPieChart from "./StatisticsPieChart";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Legend } from "chart.js";
const COLORS = ["#fe008c", "#00C49F", "#FFBB28", "#FF8042"];

const StatisticsChart = () => {
  // const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const {
    data: stats = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
      console.log(res.data);
    },
  });
  console.log(stats);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const availablePercentage = parseFloat(stats.availablePercentage) || 0;
  const agreementPercentage = parseFloat(stats.agreementPercentage) || 0;
  const users = parseFloat(stats.users) || 0;
  const members = parseFloat(stats.members) || 0;
  const total = 100; // availablePercentage + agreementPercentage;

  const pieChartData = [
    { name: "Available", value: (availablePercentage / total) * 100 },
    { name: "Agreement", value: (agreementPercentage / total) * 100 },
    { name: "Users", value: users }, 
    { name: "Members", value: members },
  ];

  return (
    <div className="w-full lg:flex  gap-4 px-3 py-3 space-y-4 lg:space-y-0">
      <div className="border bg-white p-3 rounded-lg w-full">
        <StatisticsPieChart className=""/>
      </div>
      <div className="border bg-white p-3 rounded-lg">
        <h1 className="text-lg font-bold text-center">Statistics</h1>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};
export default StatisticsChart;

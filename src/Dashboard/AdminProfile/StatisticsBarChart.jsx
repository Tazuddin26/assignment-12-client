import ReactApexChart from "react-apexcharts";
import UseAuth from "../../Hook/useAuth";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const StatisticsBarChart = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const availablePercentage = parseFloat(stats?.availablePercentage) || 0;
  const users = stats?.users || 0;
  const members = stats?.members || 0;
  const totalApartments = stats?.totalApartments || 0;
  const coupons = stats?.coupons || 0;
  const announcements = stats?.announcements || 0;

  const pieChartData = {
    series: [availablePercentage, 100 - availablePercentage],
    options: {
      labels: ["Available(%)", "UnAvailable (%)"],
      chart: {
        type: "pie",
      },
      colors: ["#28a745", "#dc3545"],
      legend: {
        position: "bottom",
      },
    },
  };

  // **Bar Chart Config (User, Member, Apartment, Coupon, Announcement)**
  const barChartData = {
    series: [
      {
        name: "Users",
        data: [users],
      },
      {
        name: "Members",
        data: [members],
      },
      {
        name: "Apartments",
        data: [totalApartments],
      },
      {
        name: "Coupons",
        data: [coupons],
      },
      {
        name: "Announcements",
        data: [announcements],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 400,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Sattistics"],
      },
      colors: ["#007bff", "#28a745", "#ffc107", "#ff5733", "#6f42c1"],
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full p-4 shadow-lg bg-white rounded-lg border">
        <h2 className="text-xl font-abel font-semibold mb-3 ">BarChart Statistics</h2>
        <hr />
        <ReactApexChart
          options={barChartData.options}
          series={barChartData.series}
          type="bar"
          height={400}
        />
      </div>
      {/* Pie Chart for Apartments */}
      <div className="p-4 shadow-lg bg-white rounded-lg border">
        <h2 className=" font-semibold mb-3 font-abel text-xl">Apartments Statistics</h2>
        <hr />
        <ReactApexChart
          options={pieChartData.options}
          series={pieChartData.series}
          type="pie"
          height={350}
        />
      </div>
    </div>
  );
};

export default StatisticsBarChart;

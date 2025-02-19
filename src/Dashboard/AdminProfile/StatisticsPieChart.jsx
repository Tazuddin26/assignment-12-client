import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import UseAuth from "../../Hook/useAuth";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const StatisticsPieChart = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  const availablePercentage = stats?.totalApartments || 0;
  const users = stats?.users || 0;
  const members = stats?.members || 0;
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Apartments",
        type: "column",
        data: [availablePercentage, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "Users",
        type: "area",
        data: [users, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "Members",
        type: "line",
        data: [members, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2024",
        "02/01/2024",
        "03/01/2024",
        "04/01/2024",
        "05/01/2024",
        "06/01/2024",
        "07/01/2024",
        "08/01/2024",
        "09/01/2024",
        "10/01/2024",
        "11/01/2024",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
  });

  return (
    <div className="w-full md:w-1/2 lg:w-full p-4">
      <ReactApexChart
        className=""
        options={chartState.options}
        series={chartState.series}
        type="line"
        width="100%"
        height={350}
      />
    </div>
  );
};

export default StatisticsPieChart;

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Underweight", "Normal", "Obesity"],
  datasets: [
    {
      data: [18.5, 24.9, 40],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "50%",
  circumference: 180, // Adjust the cutout percentage as needed
  rotation: 270, // Rotate the chart to make it a half donut
  tooltiptemplate: "<%= value %>",

  showtooltips: true,

  onanimationcomplete: function() {
    this.showtooltip(this.datasets[0].points, true);
  },
  tooltipevents: []
};

const HalfDonutChart = () => {
  return <Doughnut data={data} options={options} />;
};

// const HalfDonutChart = ({ userBMI }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef && chartRef.current) {
//       const ctx = chartRef.current.getContext("2d");

//       // Define the categories and their respective colors
//       const categories = ["Underweight", "Normal", "Obesity"];
//       const colors = ["#FF5733", "#33FF57", "#5733FF"];

//       // Calculate the angle for the user's BMI
//       const userAngle = ((userBMI - 0) / (25 - 0)) * Math.PI;

//       // Calculate the data for the chart
//       const data = {
//         labels: categories,
//         datasets: [
//           {
//             data: [18.5, 24.9, 30], // User's BMI and remaining space
//             backgroundColor: colors,
//             borderWidth: 0,
//           },
//         ],
//       };

//       // Create chart options
//       const options = {
//         responsive: true,
//         cutout: "50%",
//         circumference: 180, // Adjust the cutout percentage as needed
//         rotation: 270, // Rotate the chart to make it a half donut
//         legend: {
//           display: false,
//         },
//         tooltips: {
//           enabled: false,
//         },
//       };

//       // Create the chart
//       new Chart(ctx, {
//         type: "doughnut",
//         data: data,
//         options: options,
//       });
//     }
//   }, [userBMI]);

//   return <canvas ref={chartRef} />;
// };

export default HalfDonutChart;

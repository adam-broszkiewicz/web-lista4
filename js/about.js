const xValues = [
  "aplikacje webowe (tylko frontend)",
  "aplikacje webowe (frontend + backend)",
  "aplikacje mobilne",
];
const yValues = [35, 46, 19];
const barColors = ["#b91d47", "#2b5797", "#1e7145"];

new Chart("project-types", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production",
    },
  },
});

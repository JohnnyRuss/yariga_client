import { ApexOptions } from "apexcharts";

const usersRangeOptions = (
  categories: Array<string>,
  max: number
): ApexOptions => ({
  grid: { show: false },
  stroke: { width: 5, curve: "smooth" },
  chart: { type: "line", toolbar: { show: false } },
  yaxis: {
    min: 0,
    max: max * 2,
    tickAmount: 4,
    // labels: { formatter: (value) => `${value}` },
  },
  xaxis: { categories, tickAmount: categories.length },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
});

const addressTypesOptions = (categories: Array<string>): ApexOptions => ({
  chart: { type: "bar", toolbar: { show: false } },
  colors: ["#475BE8", "#CFC8FF"],
  plotOptions: {
    bar: { borderRadius: 4, horizontal: false, columnWidth: "55%" },
  },
  dataLabels: { enabled: false },
  grid: { show: false },
  stroke: { colors: ["transparent"], width: 4 },
  xaxis: { categories },
  // yaxis: { title: { text: "$ (thousands)" } },
  fill: { opacity: 1 },
  legend: { position: "top", horizontalAlign: "right", show: false },
  tooltip: { y: { formatter: (val: number) => `$ ${val} thousands` } },
});

const propertyTypesOptions = (
  categories: Array<string>,
  max: number
): ApexOptions => ({
  chart: { type: "bar", toolbar: { show: false } },
  colors: ["#2ED480"],
  plotOptions: { bar: { horizontal: true, barHeight: 30, borderRadius: 5 } },
  grid: {
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: false } },
  },
  xaxis: { categories },
  yaxis: {
    reversed: true,
    axisTicks: { show: true },
    max: max * 1.5,
  },
});

const locationOptions = (
  categories: Array<string>,
  max: number
): ApexOptions => ({
  chart: { width: "100%", type: "line", toolbar: { show: false } },
  legend: { position: "top", offsetX: 2 },
  stroke: { width: [2, 0, 0], curve: "smooth" },
  grid: { show: false },
  plotOptions: { bar: { columnWidth: "80%" } },
  fill: {
    colors: ["#F2C335", "#2ED480", "#475BE8"],
    opacity: [1, 0.6, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  labels: categories,
  markers: { size: 0 },
  xaxis: { tickAmount: categories.length },
  yaxis: { min: 0, max: max * 2, tickAmount: 3 },
  tooltip: { shared: true, intersect: false, y: {} },
});

export {
  addressTypesOptions,
  propertyTypesOptions,
  usersRangeOptions,
  locationOptions,
};

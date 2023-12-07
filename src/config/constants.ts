import { nanoid } from "@reduxjs/toolkit";
import { ApexOptions } from "apexcharts";

const PROPERTY_REFERRALS_INFO = [
  {
    title: "Social Media",
    percentage: 64,
    color: "#475be8",
  },
  {
    title: "Marketplace",
    percentage: 40,
    color: "#6C5DD3",
  },
  {
    title: "Websites",
    percentage: 50,
    color: "#4ccae4",
  },
  {
    title: "Digital Ads",
    percentage: 80,
    color: "#7FBA7A",
  },
  {
    title: "Others",
    percentage: 15,
    color: "#F45252",
  },
];

const DASHBOARD_PIE_CHARTS = [
  {
    id: nanoid(),
    title: "Properties for Sale",
    value: 684,
    series: [75, 25],
    colors: ["#475be8", "#c4e8ef"],
  },
  {
    id: nanoid(),
    title: "Properties for Rent",
    value: 550,
    series: [60, 40],
    colors: ["#4ccae4", "#c4e8ef"],
  },
  {
    id: nanoid(),
    title: "Total Customers",
    value: 5684,
    series: [55, 45],
    colors: ["#7FBA7A", "#c4e8ef"],
  },
  {
    id: nanoid(),
    title: "Properties for Cities",
    value: 555,
    series: [45, 55],
    colors: ["#7e5ce2", "#c4e8ef"],
  },
];

const TOTAL_REVENUE_SERIES = [
  {
    name: "Last Month",
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: "Running Month",
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];

const TOTAL_REVENUE_OPTIONS: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8", "#CFC8FF"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`;
      },
    },
  },
};

export {
  DASHBOARD_PIE_CHARTS,
  TOTAL_REVENUE_SERIES,
  TOTAL_REVENUE_OPTIONS,
  PROPERTY_REFERRALS_INFO,
};

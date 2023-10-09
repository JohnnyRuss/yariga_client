import { nanoid } from "@reduxjs/toolkit";

const propertyReferralsInfo = [
  {
    title: "Social Media",
    percentage: 64,
    color: "#6C5DD3",
  },
  {
    title: "Marketplace",
    percentage: 40,
    color: "#7FBA7A",
  },
  {
    title: "Websites",
    percentage: 50,
    color: "#FFCE73",
  },
  {
    title: "Digital Ads",
    percentage: 80,
    color: "#FFA2C0",
  },
  {
    title: "Others",
    percentage: 15,
    color: "#F45252",
  },
];

const PropertyTypes = [
  {
    id: nanoid(),
    label: "Apartment",
    value: "apartment",
  },
  {
    id: nanoid(),
    label: "Villa",
    value: "villa",
  },
  {
    id: nanoid(),
    label: "Farmhouse",
    value: "farmhouse",
  },
  {
    id: nanoid(),
    label: "Condos",
    value: "condos",
  },
  {
    id: nanoid(),
    label: "Townhouse",
    value: "townhouse",
  },
  {
    id: nanoid(),
    label: "Duplex",
    value: "duplex",
  },
  {
    id: nanoid(),
    label: "Studio",
    value: "studio",
  },
  {
    id: nanoid(),
    label: "Chalet",
    value: "chalet",
  },
];

export { propertyReferralsInfo, PropertyTypes };

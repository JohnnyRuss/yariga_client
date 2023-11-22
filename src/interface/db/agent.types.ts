import { PROPERTY_STATUS } from "./properties.types";

type AgentShortInfoT = {
  _id: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  listing: Array<string>;
  serviceArea: {
    name: string;
    displayName: string;
    city: string;
    country: string;
    state: string;
    addressType: string;
    postcode: string;
    lat: string;
    lon: string;
  };
};

type AgentT = {
  _id: string;
  username: string;
  email: string;
  birthDate: string;
  avatar: string;
  location: {
    name: string;
    displayName: string;
    city: string;
    country: string;
    state?: string;
    addressType: string;
    lat: string;
    lon: string;
    postcode: string;
  };
  bio: string;
  agentId: string;
  taxNumber: string;
  phone: string;
  agency: {
    title: string;
    agencyLicense: string;
  };
  listing: Array<AgentListingShortT>;
  serviceArea: {
    name: string;
    displayName: string;
    city: string;
    country: string;
    state?: string;
    addressType: string;
    lat: string;
    lon: string;
    postcode: string;
  };
  rent: number;
  sold: number;
};

enum HIRED_BY {
  AGENT = "AGENT",
  PROPERTY = "PROPERTY",
}

// API
type HireAgentArgsT = {
  agentId: string;
  propertyId: string;
  hiredBy: keyof typeof HIRED_BY;
};

type AgentListingShortT = {
  _id: string;
  propertyStatus: keyof typeof PROPERTY_STATUS;
};

type HireAgentResponseT = Omit<AgentShortInfoT, "listing"> & {
  listing: Array<AgentListingShortT>;
};

type GetAgentArgsT = {
  agentId: string;
};

type GetAgentsArgsT = {
  query?: string;
};

type GetAgentsResponseT = {
  agents: Array<AgentShortInfoT>;
  currentPage: number;
  pagesCount: number;
};

export type {
  AgentShortInfoT,
  AgentT,
  HireAgentArgsT,
  AgentListingShortT,
  HireAgentResponseT,
  GetAgentArgsT,
  GetAgentsArgsT,
  GetAgentsResponseT,
};
export { HIRED_BY };

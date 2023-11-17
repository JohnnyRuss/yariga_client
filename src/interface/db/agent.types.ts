import { PropertyStatus } from "./properties.types";

export interface AgentShortInfoT {
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
}

export interface AgentT {
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
}

export enum HireByT {
  AGENT = "AGENT",
  PROPERTY = "PROPERTY",
}

export interface HireAgentArgsT {
  agentId: string;
  propertyId: string;
  hiredBy: keyof typeof HireByT;
}

export interface AgentListingShortT {
  _id: string;
  propertyStatus: keyof typeof PropertyStatus;
}

export interface HireAgentResponseT extends Omit<AgentShortInfoT, "listing"> {
  listing: Array<AgentListingShortT>;
}

export type GetAgentsArgsT = {
  query?: string;
};

export type GetAgentsResponseT = {
  agents: Array<AgentShortInfoT>;
  currentPage: number;
  pagesCount: number;
};

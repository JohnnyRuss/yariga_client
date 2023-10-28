export interface AgentShortInfoT {
  _id: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  listing: Array<string>;
  location: {
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
  listing: Array<string>;
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
}

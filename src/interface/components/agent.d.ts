export interface AgentCardProp {
  id?: string | undefined;
  name: string;
  email: string;
  avatar: string;
  noOfProperties: number;
}

export interface InfoBarProps {
  icon: ReactNode;
  name: string;
}

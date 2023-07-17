export interface ItimeLineProps {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Iprops {
  data: ItimeLineProps[];
}

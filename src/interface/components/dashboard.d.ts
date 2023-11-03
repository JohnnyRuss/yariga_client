export interface PieChartPropsT {
  title: string;
  value: number;
  series: Array<number>;
  labels?: Array<string>;
  colors: Array<string>;
  mainBoxProps?: { [key as string]: string };
  labelBoxProps?: { [key as string]: string };
}

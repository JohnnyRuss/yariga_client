export interface PieChartPropsT {
  title: string;
  value: number;
  series: Array<number>;
  colors: Array<string>;
  mainBoxProps?: { [key as string]: string };
  labelBoxProps?: { [key as string]: string };
}

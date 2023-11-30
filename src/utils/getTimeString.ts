export default function getTimeString(date: string): string {
  return new Intl.DateTimeFormat("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

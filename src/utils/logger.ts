import { ENV_MODE } from "config/env";

export default function logger(error: any, log = true): string {
  const message =
    typeof error === "string"
      ? error
      : error?.response?.data?.message || error?.message || "";

  if (ENV_MODE === "DEV" && log) console.log({ error, message });

  return message;
}

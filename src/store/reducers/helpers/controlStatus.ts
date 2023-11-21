import {
  STATUS_STAGE,
  StatusT,
  LoadingStatusT,
} from "interface/store/common.types";

const controlStatus = {
  loading: (): LoadingStatusT => ({
    status: STATUS_STAGE.PENDING,
    loading: true,
    error: false,
    message: "",
  }),

  success: (stage: StatusT): LoadingStatusT => ({
    status: stage || STATUS_STAGE.IDLE,
    loading: false,
    error: false,
    message: "",
  }),

  error: (message: string): LoadingStatusT => ({
    status: STATUS_STAGE.FAIL,
    loading: false,
    error: true,
    message,
  }),

  default: (): LoadingStatusT => ({
    status: STATUS_STAGE.IDLE,
    loading: false,
    error: false,
    message: "",
  }),
};

type SetStatusArgsT = {
  stage: keyof typeof controlStatus;
  message?: string;
};

const setStatus = ({ stage, message }: SetStatusArgsT) => {
  if (stage === "error") return controlStatus.error(message || "");
  else if (stage === "success") return controlStatus.success("SUCCESS");
  else return controlStatus[stage]();
};

export { controlStatus, setStatus };
export type { SetStatusArgsT };

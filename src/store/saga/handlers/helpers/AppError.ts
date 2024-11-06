import { AxiosError } from "axios";
import { put } from "redux-saga/effects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { SetStatusArgsT } from "store/reducers/helpers/controlStatus";
import logger from "utils/logger";

type ErrorSetterT = SetStatusArgsT & Object;

interface SetErrorArgsT {
  location: string;
  error: AxiosError | Error;
  errorSetterArgs?: ErrorSetterT;
  errorSetter?: ActionCreatorWithPayload<ErrorSetterT>;
}

function* setError({
  location,
  error,
  errorSetter,
  errorSetterArgs = { stage: "error" },
}: SetErrorArgsT) {
  try {
    let message: string = "";

    if (error instanceof AxiosError)
      message = error.response?.data.message || "";
    else if (error instanceof Error) message = error.message;

    if (errorSetter) yield put(errorSetter({ ...errorSetterArgs, message }));

    if (process.env.REACT_APP_ENV_MODE !== "DEV") return;

    console.error({
      hasError: true,
      message,
      error,
      stack: error.stack,
      location: `sagaHandler - ${location}`,
    });
  } catch (error: any) {
    logger(`Ocurred Error in ErrorController ${error?.message}`);
  }
}

function* triggerError(loadMs: number = 1000) {
  yield new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("triggered new error"));
    }, loadMs);
  });
}

function* triggerLoading(loadingMs: number = 1000) {
  yield new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(true);
    }, loadingMs);
  });
}

export { setError, triggerError, triggerLoading };

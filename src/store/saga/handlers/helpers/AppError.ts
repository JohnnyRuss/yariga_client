import { AxiosError } from "axios";
import { put } from "redux-saga/effects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { SetStatusArgsT } from "store/reducers/helpers/controlStatus";

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
  errorSetterArgs,
}: SetErrorArgsT) {
  try {
    let message: string = "";

    if (error instanceof AxiosError)
      message = error.response?.data.message || "";
    else if (error instanceof Error) message = error.message;

    if (errorSetter && errorSetterArgs)
      yield put(errorSetter({ ...errorSetterArgs, message, stage: "error" }));

    // if (process.env.REACT_APP_ENV_MODE !== "DEV") return;

    console.error({
      hasError: true,
      message,
      error,
      stack: error.stack,
      location: `sagaHandler - ${location}`,
    });
  } catch (error: any) {
    console.log(`Ocurred Error in ErrorController ${error?.message}`);
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

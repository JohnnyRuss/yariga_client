import { put } from "redux-saga/effects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface SetErrorArgsT {
  location: string;
  error: AxiosError | Error;
  errorSetter: ActionCreatorWithPayload<any>;
  errorSetterArgs?: { [key: string]: string };
}

function* setError({
  location,
  error,
  errorSetter,
  errorSetterArgs,
}: SetErrorArgsT) {
  try {
    let message: string = "";

    if (error instanceof AxiosError) message = error.response?.data || "";
    else if (error instanceof Error) message = error.message;

    yield put(errorSetter({ ...errorSetterArgs, message }));

    // if (process.env.REACT_APP_ENV_MODE !== "DEV") return;

    console.log({
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

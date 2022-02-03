import { addApiDataAction } from "../store/apiDataReducer.js";

export const apiData = () => {
  return (dispatch) => {
    const cors_api_url = process.env.CORS_API_UTL;
    const  doCORSRequest = (options, printResult) => {
      const x = new XMLHttpRequest();
      x.responseType = "json";
      x.open(options.method, cors_api_url + options.url);
      x.onload = x.onerror = function () {
        printResult(x.response);
      };
      if (/^POST/i.test(options.method)) {
        x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      }
      x.send(options.data);
    }

    doCORSRequest(
      {
        method: "GET",
        url: process.env.REACT_APP_API,
      },
      function printResult(result) {
        dispatch(addApiDataAction(result));
      }
    );
  };
};

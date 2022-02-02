import { addApiDataAction } from "../store/apiDataReducer.js";

export const apiData = () => {
    return (dispatch) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => dispatch(addApiDataAction(json)));
    };
};

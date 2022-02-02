import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UseAppCustomHook = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);
  const subTitle = useSelector((state) => state.subTitle);

  const [formValue, setFormValue] = useState({
    title: "",
    subTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue.title)
      dispatch({ type: "ADD_TITLE", payload: formValue.title });
    if (formValue.subTitle)
      dispatch({ type: "ADD_SUB_TITLE", payload: formValue.subTitle });

    formValue.title = "";
    formValue.subTitle = "";
  };

  return { handleSubmit, handleChange, title, subTitle, formValue };
};

export default UseAppCustomHook;

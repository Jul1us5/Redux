import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubTitleAction } from "../store/subTitleReducer";
import { addTitleAction } from "../store/titleReducer";

const UseAppCustomHook = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title.title);
  const subTitle = useSelector((state) => state.subTitle.subTitle);

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
      dispatch(addTitleAction(formValue.title));
    if (formValue.subTitle)
      dispatch(addSubTitleAction(formValue.subTitle));

    formValue.title = "";
    formValue.subTitle = "";
  };

  return { handleSubmit, handleChange, title, subTitle, formValue };
};

export default UseAppCustomHook;

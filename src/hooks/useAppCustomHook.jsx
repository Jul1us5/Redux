import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from "../api/data.js";
import { addSubTitleAction } from "../store/subTitleReducer";
import { addTitleAction } from "../store/titleReducer";

const UseAppCustomHook = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title.title);
  const subTitle = useSelector((state) => state.subTitle.subTitle);
  const data = useSelector((state) => state.apiData.data);

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

  const handleApiData = () => {
    dispatch(apiData());
  }

  return { handleSubmit, handleChange, handleApiData, title, subTitle, formValue, data };
};

export default UseAppCustomHook;

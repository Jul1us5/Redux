import React, { useState } from "react";
import style from "./App.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
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

    if (formValue.title) dispatch({ type: 'ADD_TITLE', payload: formValue.title })
    if (formValue.subTitle) dispatch({ type: 'ADD_SUB_TITLE', payload: formValue.subTitle })

    formValue.title = ""
    formValue.subTitle = ""
  }

  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.p}>{subTitle}</p>
      </main>
      <section className={style.section}>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={formValue.title} onChange={handleChange}/>
          <label>Sub title:</label>
          <input type="text" name="subTitle" value={formValue.subTitle} onChange={handleChange}/>
          <button type="submit">submit</button>
        </form>
      </section>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.object,
  getState: PropTypes.object,
};

export default App;

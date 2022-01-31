import React, { useState } from "react";
import style from "./App.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);
  const subTitle = useSelector((state) => state.subTitle);

  const [formTitle, setFormTitle] = useState("");
  const [formSubTitle, setFormSubTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formTitle) dispatch({ type: 'ADD_TITLE', payload: formTitle })
    if (formSubTitle) dispatch({ type: 'ADD_SUB_TITLE', payload: formSubTitle })
    
    
  };

  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.p}>{subTitle}</p>
      </main>
      <section className={style.section}>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)}/>
          <label>Sub title:</label>
          <input type="text" value={formSubTitle} onChange={(e) => setFormSubTitle(e.target.value)}/>
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

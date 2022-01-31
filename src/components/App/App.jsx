import React from "react";
import style from './App.module.scss';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const App = () => {

  const dispatch = useDispatch()
  const title = useSelector((state) => state.title)
  const subTitle = useSelector((state) => state.subTitle)
  

  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.p}>{subTitle}</p>
      </main>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.object,
  getState: PropTypes.object,
};

export default App;

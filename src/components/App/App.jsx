import React, {useEffect} from "react";
import style from "./App.module.scss";
import PropTypes from "prop-types";
import UseAppCustomHook from "../../hooks/useAppCustomHook.jsx";

const App = () => {

  const { handleSubmit, handleChange, handleApiData, title, subTitle, formValue, data } = UseAppCustomHook()


  useEffect(() => {
    if (data !== null) console.log(data)
  },[data])


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
      <button className={style.press} onClick={handleApiData}>Call api</button>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.object,
  getState: PropTypes.object,
};

export default App;

import style from "./Tbody.module.css";

function Tbody(props) {
  return <tbody className={style.main}>{props.children}</tbody>;
}

export default Tbody;

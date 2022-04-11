import style from "./Th.module.css";

function Th(props) {
  return <th className={style.main}>{props.children}</th>;
}

export default Th;

import style from "./Tr.module.css";

function Tr(props) {
  return <tr className={style.main}>{props.children}</tr>;
}

export default Tr;

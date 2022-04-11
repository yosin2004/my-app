import style from "./Td.module.css";

function Td(props) {
  return <td className={style.main}>{props.children}</td>;
}

export default Td;

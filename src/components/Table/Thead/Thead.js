import style from "./Thead.module.css";

function Thead(props) {
  return <thead className={style.main}>{props.children}</thead>;
}

export default Thead;

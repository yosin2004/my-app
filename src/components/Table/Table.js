import style from "./Table.module.css";

import React from "react";

function Table(props) {
  return <table className={style.main}>{props.children}</table>;
}

export default Table;

import React, { ReactElement } from "react";
import "./Main.scss";

interface Props {
    children: React.ReactNode
}

function Main(props: Props): ReactElement {
  return <div className="main">{props.children}</div>;
}

export default Main;

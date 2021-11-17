import { ReactElement } from "react";
import { Menubar } from "primereact/menubar";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";

interface Props {}

function Header(props: Props): ReactElement {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: "Courses",
      command: () => navigate("/courses"),
    },
  ];

  return (
    <Menubar
      model={items}
      start={
        <h4 className="logo" onClick={() => navigate("/")}>
          vLearnify
        </h4>
      }
      className="header"
    />
  );
}

export default Header;

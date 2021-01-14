import "./Sidebar.css";
import Background from "../../assets/set.png";
import { faTasks, faLongArrowAltRight, faPlus, faSearchPlus, faShieldVirus, faThList, faCog } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <h1>LOGO HERE</h1>
      </div>
      <div className="sidebar__menu">
        <div style={{ backgroundImage: `url(${Background})` }} className="sidebar__link">
          <FontAwesomeIcon icon={faShieldVirus} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Menu Option 1</a>
        </div>
        <div className="sidebar__link">
          <FontAwesomeIcon icon={faSearchPlus} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Menu Option 2</a>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#9dab86" }} />
        </div>
        <div className=" sidebar__link">
          <FontAwesomeIcon icon={faFolder} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Menu Option 3</a>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#9dab86" }} />
        </div>
        <div className="sidebar__link">
          <FontAwesomeIcon icon={faGift} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Menu Option 4</a>
        </div>
        <div className=" effect sidebar__link">
          <FontAwesomeIcon icon={faTasks} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Menu Option 5</a>
          <FontAwesomeIcon icon={faLongArrowAltRight} style={{ color: "#ffffff" }} />
        </div>
        <div className="sidebar__link">
          <FontAwesomeIcon icon={faCopy} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Menu Option 6</a>
        </div>
        <div className=" last__menu effect sidebar__link">
          <FontAwesomeIcon icon={faThList} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Menu Option 7</a>
          <FontAwesomeIcon icon={faLongArrowAltRight} style={{ color: "#ffffff" }} />
        </div>
        <div className="setting sidebar__link">
          <FontAwesomeIcon icon={faCog} style={{ color: "#2657eb" }} />
          <a className="text-title" href="#">Settings</a>
        </div>
      </div>
    </div>


  );
};

export default Sidebar;

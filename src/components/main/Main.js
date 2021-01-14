import "./Main.css";
import Chart from "../charts/Chart";
import Footer from "../footer/Footer";
import { faCalendarAlt, faCircleNotch, faCopy, faShieldVirus, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Date from "../date/Date";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="title">
          <button className="button"> Upgrade </button>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS START HERE --> */}
        <div className="main__cards">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faCircleNotch} size='3x' style={{ color: "2657eb" }} />
            </div>
            <div className="content">
              <span className="font-bold text-title">245/500<p className="card__name text-primary-p">Attribute 1</p></span>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faShieldVirus} size='3x' style={{ color: "2657eb" }} />
            </div>
            <div className="content">
              <span className="font-bold text-title">125<p className=" card__name text-primary-p">Attribute 2</p></span>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faCopy} size='3x' style={{ color: "2657eb" }} />
            </div>
            <div className="content">
              <span className="font-bold text-title">120<p className=" card__name text-primary-p">Attribute 3</p></span>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faTasks} size='3x' style={{ color: "2657eb" }} />
            </div>
            <div className="content">
              <span className="font-bold text-title">0<p className=" card__name text-primary-p">Attribute 4</p></span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS END HERE --> */}

        {/* <!-- CHART STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="date">
              <div>
                < Date />
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "2657eb" }} />
              </div>
            </div>
            <div className="charts__left__title">
              <div>
                <h1>Analytics</h1>
              </div>
              <div>
                <span className=" attr font-bold text-title">245/500 <span className="name">Attribute</span></span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span className=" attr font-bold text-title"> 125 <span className="name">Attribute 1</span></span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span className=" attr font-bold text-title"> 120 <span className="name">Attribute 2</span></span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span className=" attr font-bold text-title"> 0 <span className="name">Attribute 3</span></span>
              </div>
            </div>
            <Chart />
          </div>
        </div>

        {/* <!-- FOOTER STARTS HERE --> */}
        <div>
          <Footer />
        </div>
        {/* <!-- FOOTER ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;

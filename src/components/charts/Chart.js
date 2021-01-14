import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

const Chart = () => {
  const data1 = [
    { x: "Jan20", y: 130 },
    { x: "Feb20", y: 190 },
    { x: "Mar20", y: 250 },
    { x: "Apr20", y: 130 },
    { x: "May20", y: 460 },
    { x: "Jun20", y: 110 },
    { x: "Jul20", y: 170 },
    { x: "Aug20", y: 535 }
  ];
  const data2 = [
    { x: "Jan20", y: 140 },
    { x: "Feb20", y: 290 },
    { x: "Mar20", y: 400 },
    { x: "Apr20", y: 230 },
    { x: "May20", y: 160 },
    { x: "Jun20", y: 180 },
    { x: "Jul20", y: 470 },
    { x: "Aug20", y: 335 }
  ];
  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={325} width={1090} xType="ordinal" yDomain={[100, 600]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data1} color="#2657eb" />
        <LineSeries data={data2} color="lightgreen" />
      </XYPlot>
    </div>
  );
};

export default Chart;

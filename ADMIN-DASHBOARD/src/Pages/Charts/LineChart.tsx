import { LineChart } from "../../Components/Charts";
import Sidebar from "../../Components/Sidebar";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const LineCharts = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="chart-container">
        <h1>Line Chart</h1>
        <section>
          <LineChart
            data={[
              200, 444, 944, 556, 778, 455, 990, 1444, 256, 447, 1000, 1200,
            ]}
            label="Users"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255,0.5)"
            labels={months}
          />
        </section>
      </main>
    </div>
  );
};

export default LineCharts;

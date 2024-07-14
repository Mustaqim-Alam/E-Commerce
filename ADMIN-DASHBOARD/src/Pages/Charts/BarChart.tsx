import { Barchart } from "../../Components/Charts";
import Sidebar from "../../Components/Sidebar";

const BarChart = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main>
        <section>
          <div>
            <h2>Bar Charts</h2>
            <Barchart
              data_1={[100, 650, 456, 390, 700, 400, 901]}
              data_2={[233, 900, 555, 400, 337, 321, 700]}
              bgColor_1="rgb(158, 240, 26)"
              bgColor_2="rgb(116, 198, 157)"
              title_1=""
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default BarChart;

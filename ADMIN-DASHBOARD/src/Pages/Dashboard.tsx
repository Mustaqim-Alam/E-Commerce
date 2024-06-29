import { FaRegBell } from "react-icons/fa";
import Sidebar from "../Components/Sidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/dummy-user-img.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder=" Search for data , user , docs" />
          <FaRegBell />
          <img src={userImg} alt="UserImg" />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={40}
            value={340000}
            heading="Revenue"
            amount={true}
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={40}
            value={340000}
            heading="Revenue"
            amount={true}
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={40}
            value={340000}
            heading="Revenue"
            amount={true}
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={40}
            value={340000}
            heading="Revenue"
            amount={true}
            color="rgb(0, 115, 255)"
          />
        </section>
      </main>
    </div>
  );
};

interface widgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: widgetItemProps) => (
  <article className=" widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> + {percent}%{" "}
        </span>
      )}
    </div>
  </article>
);

export default Dashboard;

import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad,  FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon2Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  interface ListItem {
    url: string;
    text: string;
    Icon: IconType;
  }
  interface Section {
    heading: string;
    item: ListItem[];
  }

  const sideBarData: Section[] = [
    {
      heading: "Dashboard",
      item: [
        { url: "/admin/dashboard", text: "Dashboard", Icon: RiDashboardFill },
        { url: "/admin/product", text: "Product", Icon: RiShoppingBag3Fill },
        { url: "/admin/customer", text: "Customer", Icon: IoIosPeople },
        {
          url: "/admin/transaction",
          text: "Transaction",
          Icon: AiFillFileText,
        },
      ],
    },
		{
			heading: "Charts",
			item: [
				{ url: "/admin/chart/bar", text: "Bar", Icon: FaChartBar },
        { url: "/admin/chart/pie", text: "Pie", Icon: FaChartPie },
        { url: "/admin/chart/line", text: "Line", Icon: FaChartLine },
			]
		},
		{
			heading: "Apps",
			item: [
				{ url: "/admin/app/stopwatch", text: "Stopwatch", Icon: FaStopwatch },
        { url: "/admin/app/coupon", text: "Coupon", Icon: RiCoupon2Fill },
        { url: "/admin/app/toss", text: "Toss", Icon: FaGamepad },
			]
		}
		
  ];

  return (
    <aside>
      <h2>Shopping KarT.</h2>
      {sideBarData.map((section, index) => (
        <div key={index}>
          <h5>{section.heading}</h5>
          <ul>
            {section.item.map((item, index) => (
              <Li
                key={index}
                url={item.url}
                text={item.text}
                Icon={item.Icon}
                location={location}
              />
            ))}
          </ul>
        </div>
      ))}
    </aside>

    // <aside>
    //   <h2>Shopping KarT.</h2>
    //   <div>
    //     <h5>Dashboard</h5>
    //     <ul>
    //       <Li
    //         url="/admin/dashboard"
    //         text="Dashboard"
    //         location={location}
    //         Icon={RiDashboardFill}
    //       />
    //       <Li
    //         url="/admin/product"
    //         text="Product"
    //         location={location}
    //         Icon={RiShoppingBag3Fill}
    //       />
    //       <Li
    //         url="/admin/customer"
    //         text="Customer"
    //         location={location}
    //         Icon={IoIosPeople}
    //       />
    //       <Li
    //         url="/admin/transaction"
    //         text="Transaction"
    //         location={location}
    //         Icon={AiFillFileText}
    //       />
    //     </ul>
    //   </div>
    // </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  Icon: IconType;
  location: Location;
}

const Li = ({ url, text, Icon, location }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? " rgb(0, 115, 255, 0.2)"
        : " white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? " rgb(0, 115, 255)" : " black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default Sidebar;

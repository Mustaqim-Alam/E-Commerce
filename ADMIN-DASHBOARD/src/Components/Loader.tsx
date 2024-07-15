import { Loader } from "rsuite";

const LoaderComp = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "lavender",
      }}
    >
      {<Loader />}
    </div>
  );
};

export default LoaderComp;

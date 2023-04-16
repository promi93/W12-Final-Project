import erro404 from "../assets/erro404.png";

const ErrorPage = () => {
  return (
    <div className="offset-4 mt-1">
      <img style={{ width: "50vw" }} src={erro404} alt="404 not found" />
    </div>
  );
};

export default ErrorPage;

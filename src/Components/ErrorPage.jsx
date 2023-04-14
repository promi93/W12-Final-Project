import erro404 from "../assets/erro404.png";

const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={erro404} alt="404 not found" />
    </div>
  );
};

export default ErrorPage;

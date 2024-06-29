import { Link } from "react-router-dom";
export default function OpenAccount() {
  const handleClick = () => {
    console.log("button clicked");
    window.location.href = "https://stocksagefrontend.onrender.com/signup";
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1 className="fs-2 fw-medium mb-4">Open a Zerodha account</h1>
        <p className="text-muted mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          onClick={handleClick}
          style={{ width: "25%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

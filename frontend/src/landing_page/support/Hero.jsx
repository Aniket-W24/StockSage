export default function Hero() {
  return (
    <div className="container-fluid text-white" style={{ backgroundColor: "#387ed1", margin: "0px" }}>
      <div className="d-flex justify-content-between mx-5 p-5 mb-5">
        <h4 className="fw-normal mx-2"> Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row mx-5 px-5 mb-5">
        <div className="col-6 mb-5">
          <h3 className="fw-normal mb-5 fs-4">Search for an answer or browse help topics to create a ticket</h3>
          <input style={{width: "100%", padding: "1rem", borderRadius: "10px", border: "none", marginBottom: "1rem"}}placeholder="Eg. how do I activate F&O, why is my order getting rejected ..." /><br></br>
            <a href="" style={{color: "white", marginTop: "1.7rem", marginRight: "1.75rem"}}>Track account opening</a>
            <a href="" style={{color: "white", marginTop: "1.7rem", marginRight: "1.75rem"}}>Track segment activation</a>
            <a href="" style={{color: "white", marginTop: "1.7rem", marginRight: "1.75rem"}}>Intraday margins</a>
            <a href="" style={{color: "white", marginTop: "1.7rem", marginRight: "1.75rem"}}>Kite user manual</a>
        </div>
        <div className="col-6 mb-5 px-5">
        <h3 className="fw-normal mb-5 fs-4">Featured</h3>
        <p>Due to an issue with HDFC Bank, you may face issues adding funds to your trading account via IMPS. We are working with them to resolve the issue. In the meantime, you can use UPI, NEFT/RTGS, or payment gateway, to add funds.</p>
        </div>
      </div>
    </div>
  );
}

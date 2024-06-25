export default function RightSection({
    imgUrl,
    productName,
    productDescription,
    learnMore,
  }) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 p-5" style={{marginTop: "10rem"}}>
              <h1 className="fw-medium fs-2">{productName}</h1>
              <p className="text-muted">{productDescription}</p>
            <a href={learnMore} style={{textDecoration: "none", color: "rgb(13, 110, 253)"}}>Learn More<i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="col-6">
              <img src={imgUrl}/>
          </div>
        </div>
      </div>
    );
}
export default function LeftSection({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 ">
            <img src={imgUrl} />
        </div>
        <div className="col-6 p-5">
            <h1 className="fw-medium fs-2 mb-3">{productName}</h1>
            <p className="mb-4 text-muted">{productDescription}</p>
            <div className="mb-3">
                <a href={tryDemo} style={{textDecoration: "none", color: "rgb(13, 110, 253)", paddingRight: "4.5rem"}}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore} style={{textDecoration: "none", color: "rgb(13, 110, 253)"}}>Learn More<i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div>
                <a href={googlePlay} style={{textDecoration: "none", marginRight: "1.5rem"}}><img src="/media/images/google-play-badge.svg" /></a>
                <a href={appStore} style={{textDecoration: "none"}}><img src="/media/images/appstore-badge.svg" /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

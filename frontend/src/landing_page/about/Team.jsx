export default function Team(){
    return (
        <div className="container">
            <div className="row mb-5 text-center">
                <h1 className="fw-normal">People</h1>
            </div>

            <div className="row">
                <div className="col-6 text-muted text-center p-5" >
                    <img src="media/images/myImg.JPEG" style={{width: "60%", height: "19rem", borderRadius: "50%"}}/>
                    <h4 className="mt-4">Aniket</h4>
                    <h6>Founder, CEO</h6>
                </div>

                <div className="col-6 text-muted fs-6 py-5" style={{lineHeight: "2rem", fontSize: "1.3rem"}}>
                <p>Aniket bootstrapped and founded StockSage in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, StockSage has changed the landscape of the Indian broking industry.</p>

                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing Video Games is his zen.</p>

                <p>Connect on <a href="" style={{textDecoration: "none"}}>Homepage</a> / <a href="" style={{textDecoration: "none"}}>TradingQnA</a> / <a href="https://x.com/sonianiket179" target="_blank" style={{textDecoration: "none"}}>Twitter</a> </p>
                </div>
            </div>
        </div>
    )
}
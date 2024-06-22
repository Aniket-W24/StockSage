export default function Hero(){
    return (
        <div className="container mt-5 border-bottom">
            <div className="row text-center mt-5 mb-5 p-5">
                <h1>Pricing</h1>
                <h3 className="fs-5 fw-normal mt-2 mb-5">Free equity investments and flat ₹20 intraday and F&O trades</h3>
            </div>
            <div className="row mt-5 mb-5 border-top p-5">
                <div className="col text-center">
                    <img src="/media/images/pricing-eq.svg" />
                    <h3>Free equity delivery</h3>
                    <p className="text-muted mt-3">All equity delivery investments (NSE, BSE),<br></br>
                    are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col text-center">
                    <img src="/media/images/other-trades.svg" />
                    <h3>Intraday and F&O trades</h3>
                    <p className="text-muted mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col text-center mb-5">
                    <img src="/media/images/pricing-eq.svg" />
                    <h3>Free direct MF</h3>
                    <p className="text-muted mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}
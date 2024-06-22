export default function Universe(){
    return (
        <div className="container">
            <div className="row mt-5 text-center">
               <h1 className="fw-medium fs-2 mb-3">The Zerodha Universe</h1>
               <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row mt-5 text-center">
               <div className="col">
                    <img src="/media/images/smallcase-logo.png" />
                    <p className="text-muted text-small">Thematic investment platform</p>
                    <img src="/media/images/zerodhafundhouse.png" className="mt-5" style={{width: "45%"}}/>
                    <p className="text-muted text-small">Thematic investment platform</p>
               </div>
               <div className="col">
                    <img src="/media/images/streak-logo.png" style={{width: "45%"}}/>
                    <p className="text-muted text-small">Thematic investment platform</p>
                    <img src="/media/images/tijori.svg" className="mt-5" style={{width: "40%"}}/>
                    <p className="text-muted text-small">Thematic investment platform</p>
               </div>
               <div className="col">
                    <img src="/media/images/sensibull-logo.svg" style={{width: "50%"}}/>
                    <p className="text-muted text-small">Thematic investment platform</p>
                    <img src="/media/images/ditto-logo.png" className="mt-5" style={{width: "45%"}}/>
                    <p className="text-muted text-small">Thematic investment platform</p>
               </div>
            </div>
            <div className="row text-center mt-5 mb-5">
            <button className="p-2 btn btn-primary fs-5" style={{width: "25%", margin: "0 auto"}}>Sign up now</button>
            </div>
        </div>
    )
}
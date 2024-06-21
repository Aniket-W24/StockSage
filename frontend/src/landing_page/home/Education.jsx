export default function Education(){
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/index-education.svg" style={{width: "90%", marginBottom: "1rem"}}/>
                </div>
                <div className="col-6 p-5 ml-5">
                    <h2 className="fs-4 fw-medium mb-4">Free and open market education</h2>
                    <p className="text-muted mb-3 mt-2">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=""  style={{textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className="text-muted mb-3 mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}
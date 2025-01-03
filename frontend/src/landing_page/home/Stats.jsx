export default function Stats(){
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5 ml-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4 fw-medium">Customer-first always</h2>
                    <p className="text-muted mb-4">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>

                    <h2 className="fs-4 fw-medium">No spam or gimmicks</h2>
                    <p className="text-muted mb-4">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className="fs-4 fw-medium">The Zerodha universes</h2>
                    <p className="text-muted mb-4">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className="fs-4 fw-medium">Do better with money</h2>
                    <p className="text-muted mb-4">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" style={{width: "90%", marginBottom: "1rem"}}/>
                    <a href="" className="mx-5" style={{textDecoration: "none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="" style={{textDecoration: "none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}
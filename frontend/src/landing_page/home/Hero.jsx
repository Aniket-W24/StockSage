export default function Hero(){
    return (
        <>
            <div className="container p-5 mb-5">
                <div className="row text-center">
                    <img src="media/images/landing.png" alt="hero.png"/>
                    <h1 className="mt-5">Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button className="p-2 btn btn-primary fs-5" style={{width: "25%", margin: "0 auto"}}>Sign up now</button>
                </div>
            </div>
        </>
    )
}
export default function Pricing(){
    return (
        <div className="container mt-5 p-5 mb-5">
            <div className="row">
                <div className="col-4">
                <h1 className="mb-3">Unbeatable Pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="" style={{textDecoration: "none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6 border py-4 text-center">
                            <h1>&#x20B9;0</h1>
                            <p>Free equity delivery and <br></br>direct mutual funds</p>
                        </div>
                        <div className="col-6 border py-4 text-center">
                            <h1>&#x20B9;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
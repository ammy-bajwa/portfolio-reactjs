import React from 'react';



class Price extends React.Component {
    render() {
        return (
            <div className="container" id='priceMain'>
                <div id='priceHeading'>
                    <h1 className='text-center' id='headingProject'>Price</h1>
                    <p className='text-center' id='projectPara'>We also have packages for the clients who want to work with us for long time</p>
                </div>
                <div className="card-deck">
                    <div className="card featureCard">
                        <div className="row align-items-center justify-content-center">
                            <img className="card-img-top" src="./images/startup.svg" alt="Card image cap" />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">STARTER</h5>
                            <p className="card-text">For startup and newly emerged business.</p>
                            <p className="card-text"><small className="text-muted">$15 per Hour</small></p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <div className="row align-items-center justify-content-center">
                            <img className="card-img-top" src="./images/normal.svg" alt="Card image cap" />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">REGULAR</h5>
                            <p className="card-text">Basic customer support for small business.</p>
                            <p className="card-text"><small className="text-muted">$25 per Hour</small></p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <div className="row align-items-center justify-content-center">
                            <img className="card-img-top" src="./images/plus.svg" alt="Card image cap" />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">PLUS</h5>
                            <p className="card-text">For those who want to work for long time with me but dont have a big company.</p>
                            <p className="card-text"><small className="text-muted">$35 per Hour</small></p>
                        </div>
                    </div>
                </div>
                <div className="card featureCard">
                    <div className="row align-items-center justify-content-center">
                        <img className="card-img-top" src="./images/enterprice.svg" alt="Card image cap" id='priceImg' />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">ENTERPRICE</h5>
                        <p className="card-text">For Enterprices having large and long term projects.</p>
                        <p className="card-text"><small className="text-muted">$40 per Hour</small></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Price;
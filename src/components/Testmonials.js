import React from 'react';



class Navbar extends React.Component {
    render() {
        return (
            <div className="container" id='testmonialMain'>
                <div id='featuresDivHeading'>
                    <h1 className='text-center' id='headingProject'>Features</h1>
                    <p className='text-center' id='projectPara'>We provide our best to give you best features available in the market and those which fits best your requirements.</p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card featureCard">
                            <div className="card-body">
                                <h5 className="card-title">John Doe, CEO</h5>
                                <small>Start Computer</small>
                                <p className="card-text">“Have I told you lately that I love working with you Amir? Your thoroughness and fairness is awesome.....You are so easy to work with!”.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card featureCard">
                            <div className="card-body">
                                <h5 className="card-title">Emely, CEO</h5>
                                <small>Latest Fasions</small>
                                <p className="card-text">“Great, you do good work! It's perfect, and done quickly.”</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="card featureCard">
                        <div className="card-body">
                            <h5 className="card-title">Alen Smith, Founder</h5>
                            <small>Northan Forms</small>
                            <p className="card-text">“Great, you do good work! It's perfect, and done quickly.”</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
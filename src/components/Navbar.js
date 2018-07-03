import React from 'react';



class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id='navMain'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img src="/images/coding.svg" width="50" height="50" alt="Amir Ali" />
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
                        <li className="nav-item active">
                            <a data-toggle="collapse" data-target=".navbar-collapse" className="nav-link" href="#carouselExampleIndicators">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" data-target=".navbar-collapse" className="nav-link" href="#serviceMainDiv">Services</a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" data-target=".navbar-collapse" className="nav-link" href="#projectsMainDiv">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" data-target=".navbar-collapse" className="nav-link" href="#featuresMain">Features</a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" data-target=".navbar-collapse" className="nav-link" href="#">Testmonials</a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" data-target=".navbar-collapse" className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" data-target=".navbar-collapse" className="nav-link" href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
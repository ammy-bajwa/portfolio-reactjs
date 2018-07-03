import React from 'react';



class Features extends React.Component {
    render() {
        return (
            <div className="container" id='featuresMain'>
                <div id='featuresDivHeading'>
                    <h1 className='text-center' id='headingProject'>Features</h1>
                    <p className='text-center' id='projectPara'>We provide our best to give you best features available in the market and those which fits best your requirements.</p>
                </div>
                <div className="card-columns">
                    <div className="card featureCard">
                        <img className="card-img-top featureImag" src="./images/responsive.svg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Responsive and Mobile Friendly</h5>
                            <p className="card-text">Our provided project will be responsive and mobile friendly so that user exprince on mobile will not effect.</p>
                        </div>
                    </div>
                    <div className="card mt-3 featureCard">
                        <div className="card-body">
                            <h3 className="card-title">Optimized</h3>
                            <p className="card-text">Your website and its content will be optimized for different devices, browsers, data speed, search engines, and users.</p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <img className="card-img-top mb-5" src="./images/grow.svg" id='ImgFeaturesGrow' alt="Card image cap" />
                        <h5 className="card-title text-center">Scalable</h5>
                        <div className="card-body">
                            <p className="card-text">Do you need sufficient infrastructure to support your website and its visitors? I will provide infrastructure that scale to a number of potential visitor</p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <img className="card-img-top featureImag" id='ImgFeatures' src="./images/latest.svg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Made with Newest Technologies</h5>
                            <p className="card-text">We always use the new technologies so that we can keep our pace with the changing industry of web and development</p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <img className="card-img-top mb-5" src="./images/secure.svg" id='ImgFeatures' alt="Card image cap" />
                        <h5 className="card-title text-center">Secure</h5>
                        <div className="card-body">
                            <p className="card-text">Security is a major concern to today’s web visitors. You need to make sure that your website follows industry standards and guidelines</p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <img className="card-img featureImag" id='ImgFeatures' src="./images/attractive.svg" alt="Card image" />
                        <div className="card-body">
                            <h5 className="card-title">Visually Attractive and Intuitive</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <div className="card-body">
                            <h5 className="card-title">Easiness</h5>
                            <p className="card-text">Your website will be easy to use and navigate. When users visit your website, they find the information they are looking for, without struggling. Your website will provide easy navigation to jump from one page to another and go back</p>
                        </div>
                    </div>
                    <div className="card featureCard">
                        <img className="card-img-top mb-5" src="http://www.erasoft.com.np/pagegallery/affordable-price80.png" id='ImgFeatures' alt="Card image cap" />
                        <h5 className="card-title text-center">Affordable</h5>
                        <div className="card-body">
                            <p className="card-text">My Services will Be Affordable and sufficient for all your project need.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;
import React from 'react';



class Projects extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="projectsMainDiv">
                <div id='projectDivHeading'>
                    <h1 className='text-center' id='headingProject'>Projects</h1>
                    <p className='text-center' id='projectPara'>These are the projects we put our best efforts in and make them incredible</p>
                </div>
                <div className="values-slider">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="value">
                                <div className="head">
                                    <img src='./images/expensify.jpg' width="100%" />
                                </div>
                                <p className="value-text">
                                    Expensify Application To Manage Your All Monthly Expenses.
                                </p>
                                <a href='https://expensify-app-by-amirali.herokuapp.com' target="_blank">
                                    <button type="button" className="btn btn-outline-light">Link</button>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="value">
                                <div className="head">
                                    <img src='./images/bank.jpg' width="100%" />
                                </div>
                                <p className="value-text">
                                    Bank Application To Manage Your Transactions
                                </p>
                                <a href='https://bank-app-by-amirali.herokuapp.com' target="_blank">
                                    <button type="button" className="btn btn-outline-light">Link</button>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="value">
                                <div className="head">
                                    <img src='./images/indecision.jpg' width="100%" />
                                </div>
                                <p className="value-text">
                                    Indecison App Will Make Decisions For You
                                </p>
                                <a href='https://indecision-app-by-amirali.herokuapp.com' target="_blank">
                                    <button type="button" className="btn btn-outline-light">Link</button>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="value">
                                <div className="head">
                                    <img src='./images/portfolio.jpg' width="100%" />
                                </div>
                                <p className="value-text">
                                    A Portfolio Website For Alpha Coders
                                </p>
                                <a href='https://portfolio-8a0a2.firebaseapp.com' target="_blank">
                                    <button type="button" className="btn btn-outline-light">Link</button>
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="value">
                                <div className="head">
                                    <img src='./images/chat.jpg' width="100%" />
                                </div>
                                <p className="value-text">
                                    Chat Application With Chat Rooms
                                </p>
                                <a href='https://chat-app-by-amirali.herokuapp.com' target="_blank">
                                    <button type="button" className="btn btn-outline-light">Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
import React from 'react';


class Contact extends React.Component {
    render() {
        return (
            <div className="container" id='contactMain'>
                <div id='contactHeading'>
                    <h1 className='text-center' id='headingProject'>Contact</h1>
                    <p className='text-center' id='projectPara'>If You like my services contact me on upwork or send me a message.</p>
                </div>
                <div className="card card-outline-secondary featureCard">
                    <div className="card-header">
                        <h1 className="mb-0">Write Message To Contact</h1>
                    </div>
                    <div className="card-body">
                        <form method="POST" autoComplete="on" action='https://formspree.io/amirsadiqalisaifi@gmail.com' className="form" role="form">
                            <fieldset>
                                <label className="mb-0" htmlFor="name2">Name</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <input className="form-control" id="name2" name="name2" required="" type="text" required />
                                    </div>
                                </div>
                                <label className="mb-0" htmlFor="email2">Email</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <input className="form-control" id="email2" name="email2" required="" type="text" required />
                                    </div>
                                </div>
                                <label className="mb-0" htmlFor="message2">Message</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <textarea className="form-control" id="message2" name="message2" required="true" rows="6"></textarea>
                                    </div>
                                </div>
                                <div className="row align-items-center justify-content-center">
                                    <button type="submit" className="btn btn-outline-light btn-lg mt-4">Send Message</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <a href='https://www.facebook.com/amirsadiq.ali.10' target='_blank'>
                        <img src='./images/facebook.svg' className='social' />
                    </a>
                    <a href='https://www.upwork.com/o/profiles/users/_~019ebd01cc94c16a5c/' target='_blank'>
                        <img src='./images/upwork.svg' className='social' />
                    </a>
                    <a href='https://www.instagram.com/amir_sadiq_ali/' target='_blank'>
                        <img src='./images/instagram.svg' className='social' />
                    </a>
                    <a href='https://twitter.com/Amir_Sadiq_Ali' target='_blank'>
                        <img src='./images/twitter.svg' id='twitter' />
                    </a>
                    <a href='https://www.linkedin.com/in/amir-ali-400007151/' target='_blank'>
                        <img src='./images/linked.svg' className='social' />
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
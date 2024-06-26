import './Topbar.css';

const Topbar = () => {

    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center">
                        <a href="mailto:shenalperera246@gmail.com"> <span className='eml'>sampleemail@gmail.com</span></a>
                    </i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span className='nmb'>011 2254877</span></i>
                </div>
                <div className="social-links d-flex d-md-flex align-items-center">
                    <a href="#" target="_blank" className="twitter"><i className="fa-brands fa-x-twitter twitter"></i></a>
                    <a href="https://www.linkedin.com/company/connexinformationtechnologies/mycompany/" target="_blank" className="linkedin"><i className="fab fa-linkedin-in linkedIn"></i></a>
                </div>
            </div>
        </section>
    );

}

export default Topbar;
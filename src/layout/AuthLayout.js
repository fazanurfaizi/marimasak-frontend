import Logo from '../assets/images/wink.png'
import bowl from '../assets/images/mangkok.png'

const AuthLayout = ({ children }) => {
    return (
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row merged">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 d-none d-sm-none d-lg-block">
                        <div className="land-featurearea">
                            <img src={bowl}/>
                            {/* <div className="land-meta">
                                <h1>Marimasak</h1>
                                <p>
                                    Marimasak is free to use for as long as you want with two active projects.
                                </p>
                                <div className="friend-logo">
                                </div>
                                <a href="#" title="" className="folow-me">Follow Us on</a>
                            </div>	 */}
                            <div className="ikon">
                                <a><i className="fa fa-instagram"></i></a>
                                <a><i className="fa fa-twitter"></i></a>
                                <a><i className="fa fa-facebook"></i></a>
                                <a><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="login-reg-bg">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout

import Logo from '../assets/images/wink.png'

const AuthLayout = ({ children }) => {
    return (
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row merged">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 d-none d-sm-none d-lg-block">
                        <div className="land-featurearea">
                            <div className="land-meta">
                                <h1>Marimasak</h1>
                                <p>
                                    Marimasak is free to use for as long as you want with two active projects.
                                </p>
                                <div className="friend-logo">
                                    <span><img src={Logo} alt="" /></span>
                                </div>
                                <a href="#" title="" className="folow-me">Follow Us on</a>
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

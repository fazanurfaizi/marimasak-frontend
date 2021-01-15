import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className="log-reg-area sign">
            <h2 className="log-title">Forgot Password</h2>
                <p>
                    Don’t use Winku Yet? 
                    {' '}     
                    <a href="https://www.marimasak.com" title="marimasak.com" target="_blank" rel="noreferrer">
                        Take the tour
                    </a>               
                    {' '} or {' '}
                    <Link to="/register" title="Register">
                        Join now
                    </Link>
                </p>
            <form method="post">
                <div className="form-group">	
                    <input type="email" id="email" required="required"/>
                    <label className="control-label" htmlFor="email">Email</label><i className="mtrl-select"></i>
                </div>                                                         
                <div className="submit-btns justify-content-between">
                    <button className="mtr-btn signin mr-4" type="button" title="Submit">
                        <span>Submit</span>
                    </button>                                                                           
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword

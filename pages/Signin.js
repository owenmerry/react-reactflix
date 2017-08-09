import React from 'react'; 
import {Link} from 'react-router-dom';

//APP
const Signin = React.createClass({
    
getInitialState: function() {
    return {
    };
  },     
    
    
render: function() {
    return (
        <div className="signin_page">
            <div className="portal_all">
                <div className="logo">
                <Link to="/">
                    <svg viewBox="0 0 111 30" id="netflix-logo" width="100%" height="100%">    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"></path></svg>
                </Link>
                </div>
                <div className="content">
                    <h1>Sign In</h1>
                    <div className="line">
                        <h3>Email</h3>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="line password">
                        <h3>Password</h3>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="line forget">
                        <Link to="/">Forgotten your email or password?</Link>
                    </div>
                    <div className="line">
                        <Link className="btn btn-block" to="/profile">Sign In</Link>
                    </div>
                    <div className="line remember">
                        <input type="checkbox" /><p>Remember Me</p>
                        <div className="clearfix"></div>
                    </div>
                    <div className="line facebook">
                        <img src="" /> 
                        <p><Link to="/">Login with Facebook</Link></p>
                    </div>
                    <div className="line signup">
                        <p>New to Netflix? <Link to="/">Sign up now.</Link></p>
                    </div>
                </div>
            
            </div>
            <div className="footer_all"> 
                <div className="wrapper">
                <div className="call">Questions? Call 1800 948 616</div>
                <div className="lists">
                    <div className="link"><a href="/">FAQ</a></div>
                    <div className="link"><a href="/">Help Centre</a></div>
                    <div className="link"><a href="/">Account</a></div>
                    <div className="link"><a href="/">Media Centre</a></div>
                    <div className="link"><a href="/">Investor Relations</a></div>
                    <div className="link"><a href="/">Jobs</a></div>
                    <div className="link"><a href="/">Gift Cards</a></div>
                    <div className="link"><a href="/">Ways to Watch</a></div>
                    <div className="link"><a href="/">Terms of Use</a></div>
                    <div className="link"><a href="/">Privacy</a></div>
                    <div className="link"><a href="/">Cookie Preferences</a></div>
                    <div className="link"><a href="/">Corporate Information</a></div>
                    <div className="link"><a href="/">Contact Us</a></div>
                    <div className="link"><a href="/">Speed Test</a></div>
                    <div className="link"><a href="/">Netflix Originals</a></div>
                </div>
                    <div className="region">Netflix Ireland</div>
            </div>
        </div>
            
        </div>
    );
  }
});

export default Signin;
 
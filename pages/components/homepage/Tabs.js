import React from 'react';


// Components
function Tabs(props) {
   var svgyes = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 29.756 29.756"  xmlSpace="preserve">
<g>
	<path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173
		c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752
		c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"/>
</g>
</svg>;  
    
var svgno = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                      viewBox="0 0 348.333 348.334"  
                                     xmlSpace="preserve">
                                <g> 
                                    <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                                        c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                                        c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                                        l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                                        L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/>
                                </g>
                                </svg>;   
    
  return (
    <div className="tabs_all">
            <div className="tabs">
                <div className="wrapper">
                <div className={props.tabSelected===1 ? 'tab selected' : 'tab' } onClick={function() {props.onTabChange(1)}}>
                    <svg viewBox="0 0 40 48" id="icon-cancel" width="100%" height="100%"><path d="M29.55 18.7v-4.6c-5.2.4-4.6 2.8-4.6 2.8.3 1.7 2.35 2.35 2.35 2.35.6-.35 2.25-.55 2.25-.55zm3.7 1L33 21.3c-9.15-.3-8.7-3.75-8.7-3.75l.15 5.2c1.1 4.05 8.35 4.2 8.2 4.2l-.2 1.5 6.9-3.8-6.1-4.95zm-20.3 6.25c-.5-.5-1.3-.45-1.8.05-.45.5-.45 1.25.05 1.75s1.3.45 1.75-.05c.5-.5.5-1.25 0-1.75zm2.35-15.9L1.5 1.45V38.9l2.6 1.45 11.2 6.2v-36.5zM1.5 40.35C.4 39.85 0 39.7 0 38.9l1.5 1.45zM28.05 28.1h1.45v10.8c0 .8-.65 1.45-1.45 1.45H16.8v6.15c0 .849-.65 1.5-1.45 1.5L1.5 40.35 0 38.9V1.45C0 .65.65 0 1.5 0h26.55c.8 0 1.45.65 1.45 1.45v11.2h-1.45V1.45H4.1L15.6 8.6c.95.35 1.2.65 1.2 1.45V38.9h11.25V28.1z"></path></svg>
                    <h2>
                    No commitments<br />
                    Cancel online at any time
                    </h2>
                </div>
                <div className={props.tabSelected===2 ? 'tab selected' : 'tab' } onClick={function() {props.onTabChange(2)}}>
                    <svg viewBox="0 0 40 48" id="icon-cancel" width="100%" height="100%"><path d="M29.55 18.7v-4.6c-5.2.4-4.6 2.8-4.6 2.8.3 1.7 2.35 2.35 2.35 2.35.6-.35 2.25-.55 2.25-.55zm3.7 1L33 21.3c-9.15-.3-8.7-3.75-8.7-3.75l.15 5.2c1.1 4.05 8.35 4.2 8.2 4.2l-.2 1.5 6.9-3.8-6.1-4.95zm-20.3 6.25c-.5-.5-1.3-.45-1.8.05-.45.5-.45 1.25.05 1.75s1.3.45 1.75-.05c.5-.5.5-1.25 0-1.75zm2.35-15.9L1.5 1.45V38.9l2.6 1.45 11.2 6.2v-36.5zM1.5 40.35C.4 39.85 0 39.7 0 38.9l1.5 1.45zM28.05 28.1h1.45v10.8c0 .8-.65 1.45-1.45 1.45H16.8v6.15c0 .849-.65 1.5-1.45 1.5L1.5 40.35 0 38.9V1.45C0 .65.65 0 1.5 0h26.55c.8 0 1.45.65 1.45 1.45v11.2h-1.45V1.45H4.1L15.6 8.6c.95.35 1.2.65 1.2 1.45V38.9h11.25V28.1z"></path></svg>
                    <h2>Watch anywhere</h2>
                </div> 
                <div className={props.tabSelected===3 ? 'tab selected' : 'tab' } onClick={function() {props.onTabChange(3)}}>
                    <svg viewBox="0 0 63 48" id="icon-price-tag" width="100%" height="100%"><g><path d="M35.752 7.65c-1.1 0-2.1.45-2.85 1.2a3.97 3.97 0 0 0 .1 5.651c.75.7 1.7 1.1 2.75 1.1a4.01 4.01 0 0 0 2.851-1.2c.75-.8 1.149-1.8 1.1-2.85 0-1.05-.451-2.05-1.201-2.8a4.072 4.072 0 0 0-2.75-1.1m-.002 9.15c-1.35 0-2.65-.5-3.6-1.45-2.05-1.95-2.101-5.25-.15-7.3 1-1.05 2.3-1.6 3.75-1.6 1.35 0 2.6.5 3.6 1.45.95.95 1.55 2.25 1.55 3.65.05 1.35-.5 2.65-1.45 3.65-.95 1.05-2.3 1.6-3.7 1.6m-2.148 9.701a.727.727 0 0 1-1.05 0l-5.3-5.05c-.3-.3-.3-.75 0-1.05.25-.3.75-.3 1.05-.05l5.25 5.1c.3.3.3.75.05 1.05m-5.95-10.05l-4.55.098v-1.799c0-.4-.35-.7-.75-.7-.401 0-.701.3-.701.7l.05 2.55c0 .3.2.55.45.65.101.05.15.05.25.05l5.301-.1c.4 0 .7-.3.7-.7 0-.4-.35-.75-.75-.75m.1 16.15a.723.723 0 0 1-1.05 0l-5.301-5.099c-.3-.25-.3-.75 0-1.05.25-.25.75-.3 1 0l5.301 5.1c.3.25.3.75.05 1.05m-5.951-10.05l-4.55.1v-1.8c-.05-.4-.35-.75-.75-.75-.4.05-.75.35-.7.75v2.55c.05.3.2.55.5.65.05.05.15.05.25.05l5.25-.1c.4 0 .75-.35.75-.75s-.35-.7-.75-.7m.25 15.95c-.299.3-.75.3-1.049 0l-5.301-5.1c-.3-.25-.3-.75 0-1.05.3-.25.75-.3 1.05 0l5.251 5.1c.299.25.35.75.049 1.05m-5.95-10.05l-4.5.1-.05-1.8c0-.4-.35-.75-.75-.75-.401.05-.7.35-.7.75l.049 2.55c0 .3.201.55.451.65.1.05.2.05.3.05l5.25-.1c.4 0 .7-.35.7-.75s-.35-.7-.75-.7M43.903 4.9c0-.5-.122-.876-.35-1.1-.279-.274-.65-.3-.85-.3H42.402c-.799.05-1.85.05-3.049.05-5.551 0-13.151-.35-13.851-.35-.15 0-.3.05-.45.2L1.4 27.952c-.1.15-.2.3-.2.5s.1.35.25.5l18.301 17.65c.25.25.751.25 1.001-.05l23.651-24.55c.153-.197.198-.488.2-.7M20.252 48.002a1.937 1.937 0 0 1-1.351-.55L.6 29.801c-.35-.349-.6-.799-.6-1.299 0-.55.2-1 .55-1.4L24.202 2.548c.3-.299.699-.5 1.15-.549h.15c.1 0 8.1.35 13.851.35 1.149 0 2.149 0 3-.05h.35c.7 0 1.3.2 1.75.65.45.45.65 1.1.65 1.95.05.85.705 14.126.65 16.551-.011.502-.15 1-.5 1.4L21.602 47.403c-.35.35-.85.6-1.35.6"></path>        <path d="M62.004 0c-2.95 6.4-12.651 6.4-12.651 6.4-7.05.1-10.951 2.25-12.751 3.601-.7-.351-1.55-.2-2.1.35-.7.7-.65 1.85.05 2.549.7.651 1.85.651 2.5-.049.55-.55.65-1.3.4-1.951 5.05-3.5 11.9-3.299 11.9-3.299C60.105 7.601 62.855.6 62.855.6l-.85-.6z"></path>    </g></svg>
                    <h2>Pick your price</h2>
                </div>
                </div>
            </div> 
            <div className={props.tabSelected===1 ? 'description selected panel1' : 'description hidden panel1' }> 
                <div className="wrapper">
                    <div className="text">
                    <h2>
                    If you decide Netflix isn't for you - no problem. No commitment. Cancel online at any time.
                    </h2>
                    <a className="btn">JOIN FREE FOR A MONTH</a>
                    </div>
                    <div className="image">
                        <img src="./img/homepage/cancelanytime_withdevice.png" />
                    </div>
                </div>
            </div>
            <div className={props.tabSelected===2 ? 'description selected panel2' : 'description hidden panel2' }> 
                <div className="wrapper">
                    <div className="text">
                    <div className="info">
                    <h2>
                   Watch TV programmes and films anytime, anywhere – personalised for you.
                    </h2>
                    </div>
                    <div className="button">
                    <a className="btn">JOIN FREE FOR A MONTH</a>
                    </div>
                    </div>
                    <div className="apps">
                        <div className="col">
                            <div className="image"><img src="/img/homepage/asset_TV_UI.png" /></div>
                            <div className="info">
                                <h3>Watch on your TV</h3>
                            <h4>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="image"><img src="/img/homepage/asset_mobile_tablet_UI_2.png"  /></div>
                            <div className="info">
                            <h3>Watch instantly or download for later</h3>
                            <h4>Available on phone and tablet, wherever you go.</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="image"><img src="/img/homepage/asset_website_UI.png"  /></div>
                            <div className="info">
                            <h3>Use any computer</h3>
                            <h4>Watch on Netflix.com.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={props.tabSelected===3 ? 'description selected panel3' : 'description hidden panel3' }> 
                <div className="wrapper">
                    <div className="text">
                    <div className="info">
                    <h2>
                   Choose one plan and watch everything on Netflix.
                    </h2>
                    </div>
                    <div className="button">
                    <a className="btn">JOIN FREE FOR A MONTH</a>
                    </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>BASIC</td>
                                <td>STANDARD</td>
                                <td>PREMIUM</td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="ldesc">
                            Monthly price after free month ends on 29/08/2017
                            </td>
                            <td>€7.99</td>
                            <td>€9.99</td>
                            <td>€11.99</td>
                        </tr>
                        <tr>
                            <td  className="ldesc">
                            HD available
                            </td>
                            <td>{svgno}</td><td>{svgyes}</td><td>{svgyes}</td>
                        </tr>
                        <tr>
                            <td  className="ldesc">
                            Ultra HD available
                            </td>
                            <td>{svgno}</td><td>{svgno}</td><td>{svgyes}</td>
                        </tr> 
                        <tr>
                            <td  className="ldesc">
                            Screens you can watch on at the same time
                            </td>
                            <td>1</td><td>2</td><td>4</td>
                        </tr>
                        <tr>
                            <td  className="ldesc">
                            Watch on your laptop, TV, phone and tablet
                            </td>
                            <td>{svgyes}</td><td>{svgyes}</td><td>{svgyes}</td>
                        </tr> 
                        <tr>
                            <td  className="ldesc">
                            Unlimited films and TV programmes
                            </td>
                            <td>{svgyes}</td><td>{svgyes}</td><td>{svgyes}</td>
                        </tr> 
                        <tr>
                            <td  className="ldesc">
                           Cancel at any time
                            </td>
                            <td>{svgyes}</td><td>{svgyes}</td><td>{svgyes}</td>
                        </tr> 
                        <tr>
                            <td  className="ldesc">
                            First month free
                            </td>
                            <td>{svgyes}</td><td>{svgyes}</td><td>{svgyes}</td>
                        </tr> 
                            
                        </tbody>
                    </table>
            </div>
        </div>
      </div>
  );
} 

Tabs.propTypes = {
    description: React.PropTypes.string.isRequired,
    onTabChange: React.PropTypes.func.isRequired,
    tabSelected: React.PropTypes.number.isRequired
};


export default Tabs;
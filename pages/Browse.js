import React from 'react'; 
import {Link} from 'react-router-dom';

//APP
const Browse = React.createClass({
    
getInitialState: function() {    
    return {
       scrolltop: 0 
        
        
    };
  },     
    
componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
},

componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
},

handleScroll: function(event) {
    let scrollTop = event.srcElement.body.scrollTop;
        //itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      scrolltop: scrollTop
    });
},   
    
render: function() {
    
    
   var svgsearch = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 250.313 250.313" xmlSpace="preserve">
<g id="Search">
	<path d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76
		c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911
		c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38
		c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146
		c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236
		C170.146,140.044,140.043,170.146,102.911,170.146z"/>
</g>
</svg>;    
    
   var svgbell = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 459.334 459.334" xmlSpace="preserve">
<g>
	<g>
		<g>
			<path d="M175.216,404.514c-0.001,0.12-0.009,0.239-0.009,0.359c0,30.078,24.383,54.461,54.461,54.461
				s54.461-24.383,54.461-54.461c0-0.12-0.008-0.239-0.009-0.359H175.216z"/>
			<path d="M403.549,336.438l-49.015-72.002c0-22.041,0-75.898,0-89.83c0-60.581-43.144-111.079-100.381-122.459V24.485
				C254.152,10.963,243.19,0,229.667,0s-24.485,10.963-24.485,24.485v27.663c-57.237,11.381-100.381,61.879-100.381,122.459
				c0,23.716,0,76.084,0,89.83l-49.015,72.002c-5.163,7.584-5.709,17.401-1.419,25.511c4.29,8.11,12.712,13.182,21.887,13.182
				H383.08c9.175,0,17.597-5.073,21.887-13.182C409.258,353.839,408.711,344.022,403.549,336.438z"/>
		</g>
	</g>
</g>

</svg>;    
    
   var svgdownarrow = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 386.257 386.257" xmlSpace="preserve">
<polygon points="0,96.879 193.129,289.379 386.257,96.879 "/>
</svg>;    
    
var svgplay = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 41.999 41.999"  xmlSpace="preserve">
<path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
	c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
	c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"/>
</svg>;  
    
var svgplus = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="401.994px" height="401.994px" viewBox="0 0 401.994 401.994"	 xmlSpace="preserve">
<g>
	<path d="M394,154.175c-5.331-5.33-11.806-7.994-19.417-7.994H255.811V27.406c0-7.611-2.666-14.084-7.994-19.414
		C242.488,2.666,236.02,0,228.398,0h-54.812c-7.612,0-14.084,2.663-19.414,7.993c-5.33,5.33-7.994,11.803-7.994,19.414v118.775
		H27.407c-7.611,0-14.084,2.664-19.414,7.994S0,165.973,0,173.589v54.819c0,7.618,2.662,14.086,7.992,19.411
		c5.33,5.332,11.803,7.994,19.414,7.994h118.771V374.59c0,7.611,2.664,14.089,7.994,19.417c5.33,5.325,11.802,7.987,19.414,7.987
		h54.816c7.617,0,14.086-2.662,19.417-7.987c5.332-5.331,7.994-11.806,7.994-19.417V255.813h118.77
		c7.618,0,14.089-2.662,19.417-7.994c5.329-5.325,7.994-11.793,7.994-19.411v-54.819C401.991,165.973,399.332,159.502,394,154.175z"
		/>
</g>
</svg>;    

    
    
//loop    
var videolist = [];
for (var i = 0; i < 10; i++) {
  videolist.push(
      <div className="list_all">
            <div className="wrapper">
                <h2>Because you watched Last Chance U</h2>
                    <div className="videolist">
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                    </div>
                
            </div>
            </div>
  );
};    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div className="browse_page">
            <div className={'menu_all '+((this.state.scrolltop > 0) ?'scroll':'')} >
                <div className="left"> 
                <div className="logo">
                <Link to="/">
                    <svg viewBox="0 0 111 30" id="netflix-logo" width="100%" height="100%">    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"></path></svg>
                </Link>
                </div>
                    <div className="browse">
                        <Link className="highlighted" to="/">Browse {svgdownarrow}</Link>
                        <Link to="/">Kids</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="browse">
                        <Link className="search" to="/">{svgsearch} Search</Link>
                        <Link className="bell" to="/">{svgbell}</Link>
                        <Link className="account" to="/">
                            <div className="image"></div>
                            Owen {svgdownarrow}
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="portal_all">
                <div className="wrapper">
                <div className="content">
                <div className="image"><img src="./img/browse/portal-heading.png" /></div>
                    <p>Meet a guy who got into comedy for all the right reasons: winning a bunch of awards and getting famous.</p>
                    <div className="buttons">
                        <Link to="/" className="btn red">{svgplay} Play</Link>
                        <Link to="/" className="btn black">{svgplus} My List</Link>
                    </div>
                </div>
                </div>
                <div className="gradient"></div>
            </div>
            
            <div className="watching_all">
            <div className="wrapper">
                <h2>Continue watching for Owen</h2>
                    <div className="videolist">
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                    </div> 
            </div>
                <div className="videoinfo">
                <div className="wrapper">
                <div className="content">
                    <div className="image">
                    <img src="./img/browse/video-title.png" />
                    </div>
                    <div className="details">
                        <span className="match">78% match</span>
                        <span className="year">2017</span>
                        <span className="maturity">AL</span>
                        <span className="collection">1 Collection</span>
                    </div>
                    <div className="title">
                        <div className="white">Resume</div>
                        <div className="episode">
                            <span className="white title">C1:E2</span>
                            <span>"Deep in the Heart of Texas: Dave Chappelle Live at Austin City Limits"</span>
                        </div>
                    </div>
                    <div className="seen">
                        <div className="watched"></div>
                    </div>
                    <div className="description">
                    Chappelle gets real about racially charged run-ins, celebrity scandals and fatherly dilemmas in a searing stand-up set at Austin's Moody Theater.
                    </div>
                </div>
                    <div className="imagebackground">
                        <div className="videoblock"><div className="gradient"></div></div>
                    </div>
                </div>
                </div>
            </div>
            
            
            <div className="popular_all">
            <div className="wrapper">
                <h2>Netflix Originals</h2>
                    <div className="videolist">
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                        <div className="video">
                        </div>
                    </div>
                
            </div>
            </div>
            
            
            {videolist} 
            
            
        </div>
    );
  }
});

export default Browse;
 
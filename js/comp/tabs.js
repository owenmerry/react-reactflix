import React from 'react';

// Components
function TabController(props) {
  return (
    <div className="tabs_all">
            <div className="tabs">
                <div className={props.tabSelected===1 ? 'tab selected' : 'tab' } onMouseOver={function() {props.onTabChange(1)}}><h2>Tab 1/{props.tabSelected}</h2></div>
                <div className={props.tabSelected===2 ? 'tab selected' : 'tab' } onMouseOver={function() {props.onTabChange(2)}}><h2>Tab 2</h2></div> 
                <div className={props.tabSelected===3 ? 'tab selected' : 'tab' } onMouseOver={function() {props.onTabChange(3)}}><h2>Tab 3</h2></div>
            </div> 
            <div className={props.tabSelected===1 ? 'description selected' : 'description hidden' }> 
                {props.description} tab1
            </div>
            <div className={props.tabSelected===2 ? 'description selected' : 'description hidden' }> 
                {props.description} tab2
            </div>
            <div className={props.tabSelected===3 ? 'description selected' : 'description hidden' }> 
                {props.description} tab3
            </div>
        </div>
  );
}

Tabs.propTypes = {
    description: React.PropTypes.string.isRequired,
    onTabChange: React.PropTypes.func.isRequired,
    tabSelected: React.PropTypes.number.isRequired
};
 

//APP
const Tabs = React.createClass({
    
getInitialState: function() {
    return {
      tabSelected:1,
    };
  },    
    
onTabChange: function(varnumber){
    this.state.tabSelected= varnumber; 
    this.setState(this.state);
    
},    
    
render: function() {
    return (
        <div>
            <div className="portal_all">
            </div>
            <TabController tabSelected={this.state.tabSelected} onTabChange={this.onTabChange} description="Hello Welcome to Tabs!" />    
        </div>
    );
  }
});


// Render



export default Tabs;
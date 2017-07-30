"use strict";

var _reactDom = require("react-dom");

// Components
function Tabs(props) {
    return React.createElement(
        "div",
        { className: "tabs_all" },
        React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement(
                "div",
                { className: "tabs" },
                React.createElement(
                    "div",
                    { className: props.tabSelected === 1 ? 'tab selected' : 'tab', onMouseOver: function onMouseOver() {
                            props.onTabChange(1);
                        } },
                    React.createElement(
                        "h2",
                        null,
                        "Tab 1/",
                        props.tabSelected
                    )
                ),
                React.createElement(
                    "div",
                    { className: props.tabSelected === 2 ? 'tab selected' : 'tab', onMouseOver: function onMouseOver() {
                            props.onTabChange(2);
                        } },
                    React.createElement(
                        "h2",
                        null,
                        "Tab 2"
                    )
                ),
                React.createElement(
                    "div",
                    { className: props.tabSelected === 3 ? 'tab selected' : 'tab', onMouseOver: function onMouseOver() {
                            props.onTabChange(3);
                        } },
                    React.createElement(
                        "h2",
                        null,
                        "Tab 3"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: props.tabSelected === 1 ? 'description selected' : 'description hidden' },
                props.description,
                " tab1"
            ),
            React.createElement(
                "div",
                { className: props.tabSelected === 2 ? 'description selected' : 'description hidden' },
                props.description,
                " tab2"
            ),
            React.createElement(
                "div",
                { className: props.tabSelected === 3 ? 'description selected' : 'description hidden' },
                props.description,
                " tab3"
            )
        )
    );
} //import React from 'react';


Tabs.propTypes = {
    description: React.PropTypes.string.isRequired,
    onTabChange: React.PropTypes.func.isRequired,
    tabSelected: React.PropTypes.number.isRequired
};

//APP
var Application = React.createClass({
    displayName: "Application",


    getInitialState: function getInitialState() {
        return {
            tabSelected: 1
        };
    },

    onTabChange: function onTabChange(varnumber) {
        this.state.tabSelected = varnumber;
        this.setState(this.state);
    },

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "portal_all" },
                React.createElement("div", { className: "overlay" }),
                React.createElement(
                    "div",
                    { className: "logo" },
                    React.createElement(
                        "svg",
                        { viewBox: "0 0 111 30", id: "netflix-logo", width: "100%", height: "100%" },
                        "    ",
                        React.createElement("path", { d: "M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "signin" },
                    React.createElement(
                        "a",
                        { className: "btn" },
                        "Sign In"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "content" },
                    React.createElement(
                        "h1",
                        null,
                        "See what\u2019s next."
                    ),
                    React.createElement(
                        "h2",
                        null,
                        "WATCH ANYWHERE. CANCEL ANYTIME."
                    ),
                    React.createElement(
                        "a",
                        { className: "btn" },
                        "JOIN FREE FOR A MONTH"
                    )
                )
            ),
            React.createElement(Tabs, { tabSelected: this.state.tabSelected, onTabChange: this.onTabChange, description: "Hello Welcome to Tabs!" })
        );
    }
});

// Render
(0, _reactDom.render)(React.createElement(Application, null), document.getElementById('app'));
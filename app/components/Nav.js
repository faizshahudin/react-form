const React = require('react');
const NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageLink: ''
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(event) {
        this.setState({ pageLink: event.target.value });
    }

    previousButtonClick(event) {
        this.setState({ pageLink: event.target.value });
    }

    render() {
        const pageLink = this.state.pageLink;

        if (pageLink === '/family') {
            return (
                <div>
                    <NavLink exact activeClassName="active" to="/" >
                        <button
                            className="previousButtonStyle" 
                            value="/"
                            onClick={this.onButtonClick}
                        >
                            Previous
                        </button>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/upload" >
                        <button
                            className="nextButtonStyle"
                            value="/upload"
                            onClick={this.onButtonClick}
                        >
                            Next
                        </button>
                    </NavLink>
                </div>
            );
        } else if (pageLink === '/upload') {
            return (
                <NavLink exact activeClassName="active" to="/result" >
                    <button
                        className="nextButtonStyle"
                        value="/result"
                        onClick={this.onButtonClick}
                    >
                        Submit your application
                    </button>
                </NavLink>
            );
        } else if (pageLink === '/result') {
            return (
                <button
                    className="nextButtonStyle"
                    value="/finish"
                    onClick={this.onButtonClick}
                >
                    Take me there!
                </button>
            );
        }
        
        return (
            <NavLink exact activeClassName="active" to="/family" >
                <button 
                    className="nextButtonStyle"
                    value="/family"
                    onClick={this.onButtonClick}
                >
                    Next
                </button>
            </NavLink>
        );
    }
}

module.exports = Nav;
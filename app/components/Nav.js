const React = require('react');
const NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageLink: '',
            nextPage: '',
            previousPage: ''
        };

        this.nextButtonClick = this.nextButtonClick.bind(this);
        this.previousButtonClick = this.previousButtonClick.bind(this);
    }

    nextButtonClick() {
        this.setState({ pageLink: '/family' });
    }

    previousButtonClick() {
        this.setState({ pageLink: '/' });
    }

    render() {
        const pageLink = this.state.pageLink;

        if (pageLink === '/family') {
            return (
                <div>
                    <NavLink exact activeClassName="active" to="/" >
                        <button
                            className="previousButtonStyle" 
                            onClick={this.previousButtonClick}
                        >
                            Previous
                        </button>
                    </NavLink>
                </div>
            );
        }
        
        return (
            <NavLink exact activeClassName="active" to="/family" >
                <button 
                    className="nextButtonStyle"
                    onClick={this.nextButtonClick}
                >
                    Next
                </button>
            </NavLink>
        );
    }
}

module.exports = Nav;
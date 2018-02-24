const React = require('react');
const NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageLink: '',
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
                <NavLink exact activeClassName="active" to="/" >
                    <button onClick={this.previousButtonClick}>Previous</button>
                </NavLink>
            );
        }
        return (
            <NavLink exact activeClassName="active" to="/family" >
                <button onClick={this.nextButtonClick}>Next</button>
            </NavLink>
        );
    }
}

module.exports = Nav;
const React = require('react');

class FamilyDetail extends React.Component {
    render() {
        return (
            <form
                className="familyFormStyle"
                onSubmit={this.handleSubmit}
            >
                <div className="name">
                    <label style={styles.labelStyle}>
                        Name
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="relation">
                    <label style={styles.labelStyle}>
                        Relationship with Applicant
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="nat">
                    <label style={styles.labelStyle}>
                        Nationality
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="ic">
                    <label style={styles.labelStyle}>
                        IC/Passport Number
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="address">
                    <label style={styles.labelStyle}>
                        Permanent Address
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="postcode">
                    <label style={styles.labelStyle}>
                        Postcode
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="state">
                    <label style={styles.labelStyle}>
                        State
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="phone">
                    <label style={styles.labelStyle}>
                        Phone Number
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="email">
                    <label style={styles.labelStyle}>
                        Email Address
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="work">
                    <label style={styles.labelStyle}>
                        Currently working?
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="tax">
                    <label style={styles.labelStyle}>
                        Income Tax Number
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="epf">
                    <label style={styles.labelStyle}>
                        EPF Number
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="occupation">
                    <label style={styles.labelStyle}>
                        Occupation
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="gross">
                    <label style={styles.labelStyle}>
                        Gross Salary
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="net">
                    <label style={styles.labelStyle}>
                        Net Salary
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="depend">
                    <label style={styles.labelStyle}>
                        Number of family dependants
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}

const styles = {
    labelStyle: {
        fontWeight: 'regular',
        paddingBottom: 15,
        fontFamily: 'Open Sans',
    },
    inputStyle: {
        borderRadius: 7,
        marginBottom: 30,
        height: 25,
    },
};

module.exports = FamilyDetail;
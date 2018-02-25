const React = require('react');

class PersonalDetail extends React.Component {
    render() {
        return (
            <form
                className="personalFormStyle"
                onSubmit={this.handleSubmit}
            >
                <div className="name">
                    <label style={styles.labelStyle}>
                        Full Name (As per IC)
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
                        IC Number
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
                <div className="dob">
                    <label style={styles.labelStyle}>
                        Date of Birth
                    </label>
                    <input
                        style={styles.inputStyle}
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="gender">
                    <label style={styles.labelStyle}>
                        Gender
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
                        Are you currently working?
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

module.exports = PersonalDetail;
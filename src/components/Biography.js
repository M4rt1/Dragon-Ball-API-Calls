import React from 'react';

class Biography extends React.Component {
    render() {
        return (
            <p>
                {this.props.bio}
            </p>
        )
    }
}

export default Biography;
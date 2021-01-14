import React, { Component, Fragment } from 'react';

class WithFragments extends Component {
    render() {
        return (
            <Fragment>
                <h1>With Fragments 1</h1>
                <p>Doesn't have any unused DOM elements.</p>
            </Fragment>
        );
    }
}

export default WithFragments;
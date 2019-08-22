import React from 'react';

class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="month">
                <button className="prevMonth"></button>
                September 2019
                <button className="nextMonth"></button>
            </div>
        )
    }
}

export default Month;


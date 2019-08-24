import React from 'react';
import Month from './month.jsx';
import September from '../../CalendarDummyData.js';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="calendar">
                <div className="calendarHeader">
                    <Month/>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                    </thead>
                    <tbody>
                        {September.map((week, i) => 
                            <tr key={i}>
                                <td>{week[0]}</td>
                                <td>{week[1]}</td>
                                <td>{week[2]}</td>
                                <td>{week[3]}</td>
                                <td>{week[4]}</td>
                                <td>{week[5]}</td>
                                <td>{week[6]}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Calendar;


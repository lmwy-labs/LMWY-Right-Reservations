import React from 'react';
import styled from 'styled-components';
import Month from './CalendarMonth.jsx';

/******************** STYLED COMPONENTS ********************/
const Cal = styled.div`
    border: .5px solid #d8d9db;
    width: 292px;
    height: 304px;
    background-color: #f1f2f4;
`;
Cal.displayName = 'Cal';
const Table = styled.table`
    table-layout: fixed;
    width: 87%;
    border-collapse: collapse;
    padding-top: 2px;
    margin-left: 6%; 
`;
const Tr = styled.tr`
    font-size: 13px;
    text-align: center;
    color: #2d333f;
`;
Tr.displayName = 'Tr';
const Td = styled.td`
    background-color: white;
    padding: 7px;
    text-align: center;
    border: .5px solid #d8d9db;
:hover {
    box-shadow: 0px 0px 0px 2px #da3743 inset;
}
`;
Td.displayName = 'Td';

/******************** REACT COMPONENT ********************/
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
        };
       this.dateOnClick = this.dateOnClick.bind(this);
    }

    dateOnClick(e) {
        var date = '' + (this.state.currentMonth + 1) + '/' + e.target.innerHTML + '/' + this.state.currentYear; 
        // console.log(date);
        console.log(e.target.value)
        console.log(e.target.innerHTML)
        
        this.props.selectDate([date, 'Wed, 9/24']);
        // this.props.closeCalendar();
    }

    render() {
        return (
            <div>
                <Cal>
                    <Month monthName={this.state.monthNames[this.props.currentMonth]} changePrevMonth={this.props.changePrevMonth} changeNextMonth={this.props.changeNextMonth} currentYear={this.props.currentYear}/>
                    <Table>
                        <thead>
                            <Tr>
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                            </Tr>
                        </thead>
                        <tbody>
                            {this.props.currentMonthDates.map((week, i) => 
                               <tr key={i} onClick={this.dateOnClick} onMouseOver={this.dateHover}>
                                    <Td style={{ background: week[0].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[0].date}</Td>
                                    <Td style={{ background: week[1].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[1].date}</Td>
                                    <Td style={{ background: week[2].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[2].date}</Td>
                                    <Td style={{ background: week[3].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[3].date}</Td>
                                    <Td style={{ background: week[4].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[4].date}</Td>
                                    <Td style={{ background: week[5].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[5].date}</Td>
                                    <Td style={{ background: week[6].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[6].date}</Td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Cal>
            </div>
        )
    }
}

export default Calendar;
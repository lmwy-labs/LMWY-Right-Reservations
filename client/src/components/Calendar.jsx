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
            daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
        };
       this.dateOnClick = this.dateOnClick.bind(this);
    }

    dateOnClick(e) {
        var month = Number(e.target.getAttribute('data')[2]) + 1;
        var day = e.target.innerHTML;
        var dayOfWeek = Number(e.target.getAttribute('data')[0]);
        var date = '' + month + '/' + day + '/' + this.props.currentYear; 
        var label = '' + this.state.daysOfWeek[dayOfWeek] + ', ' + month + '/' + day;
        this.props.selectDate([date, month, label]);
        this.props.closeCalendar();
    }

    render() {
        return (
            <div>
                <Cal>
                    <Month monthName={this.state.monthNames[this.props.currentMonth]} changePrevMonth={this.props.changePrevMonth} changeNextMonth={this.props.changeNextMonth} currentYear={this.props.currentYear}/>
                    <Table>
                        <thead>
                            <Tr>
                                {this.state.daysOfWeek.map((day, i) => <td key={i}>{day}</td> )}
                            </Tr>
                        </thead>
                        <tbody>
                            {this.props.currentMonthDates.map((week, i) => 
                               <tr key={i} onMouseOver={this.dateHover} onClick={this.dateOnClick}>
                                    <Td data={[0, week[0].month]} style={{ background: week[0].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[0].date}</Td>
                                    <Td data={[1, week[1].month]} style={{ background: week[1].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[1].date}</Td>
                                    <Td data={[2, week[2].month]} style={{ background: week[2].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[2].date}</Td>
                                    <Td data={[3, week[3].month]} style={{ background: week[3].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[3].date}</Td>
                                    <Td data={[4, week[4].month]} style={{ background: week[4].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[4].date}</Td>
                                    <Td data={[5, week[5].month]} style={{ background: week[5].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[5].date}</Td>
                                    <Td data={[6, week[6].month]} style={{ background: week[6].month != this.props.currentMonth ? '#f1f2f4' : 'white'}}>{week[6].date}</Td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Cal>
            </div>
        )
    }
}


// <DateWeek key={i} week={week} dateHover={this.dateHover} dateOnClick={this.dateOnClick} />


// var DateWeek = (props) => (
//     <tr onMouseOver={props.dateHover}>
//         {props.week.map((day, j) =>   
//             <DateDay key={j} day={day} dateOnClick={props.dateOnClick}/>
//         )}
//     </tr>
// );

// var DateDay = (props) => (
//     <Td onClick={props.dateOnClick}>
//         {props.day.date}
//     </Td>
// );

export default Calendar;
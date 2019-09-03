import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Month from './month.jsx';

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

/******************** ADDITIONAL FUNCTIONS ********************/

const generateMonthlyDates = (currentMonth, year) => {

    const firstWeek = moment().month(currentMonth).startOf('month').week();

    var calendarMonth = []
    for(var week = firstWeek; week <= firstWeek + 5; week++) {
        var weekdates = [];
        for (var i = 0; i < 7; i ++) {
            weekdates.push({
                date: moment().week(week).startOf('week').clone().add(i, 'day').format('D'),
                month: moment().week(week).startOf('week').clone().add(i, 'day').format('M') - 1
            })
        }
        calendarMonth.push(weekdates);
    }
    return calendarMonth
}


/******************** REACT COMPONENT ********************/
class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMonth: '',
            currentYear: '',
            currentMonthDates: [],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
        }
        
        this.componentDidMount = this.componentDidMount.bind(this);
        this.generateMonth = this.generateMonth.bind(this);
        this.dateOnClick = this.dateOnClick.bind(this);
        this.changePrevMonth = this.changePrevMonth.bind(this);
        this.changeNextMonth = this.changeNextMonth.bind(this);
    }

    componentDidMount() {
        var date = new Date;
        this.setState({
            currentMonth: date.getMonth(),
            currentYear: date.getFullYear()
        }, () => {
            this.generateMonth();
        })

    }

    generateMonth() {
        const dates = generateMonthlyDates(this.state.currentMonth, this.state.currentYear);
        this.setState({
            currentMonthDates: dates
        })
    }

    dateOnClick(e) {
        var date = '' + (this.state.currentMonth + 1) + '/' + e.target.innerHTML + '/' + this.state.currentYear; 
        console.log(date);
        this.props.selectDate(date);
    }

    changePrevMonth() {
        this.setState({
            currentMonth: this.state.currentMonth - 1
        }, () => {
            this.generateMonth();
        });
    }

    changeNextMonth() {
        this.setState({
            currentMonth: this.state.currentMonth + 1
        }, () => {
            this.generateMonth();
        })
    }

    render() {
        return (
            <div>
                <Cal>
                    <Month generateMonth={this.generateMonth} changePrevMonth={this.changePrevMonth} changeNextMonth={this.changeNextMonth} monthName={this.state.monthNames[this.state.currentMonth]}/>
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
                            {this.state.currentMonthDates.map((week, i) => 
                               <tr key={i} onClick={this.dateOnClick} onMouseOver={this.dateHover}>
                                    <Td style={{ background: week[0].month != this.state.currentMonth ? '#f1f2f4' : 'white'}}>{week[0].date}</Td>
                                    <Td style={{ background: week[1].month != this.state.currentMonth ? '#f1f2f4' : 'white'}}>{week[1].date}</Td>
                                    <Td style={{ background: week[2].month != this.state.currentMonth ? '#f1f2f4' : 'white'}}>{week[2].date}</Td>
                                    <Td style={{ background: week[3].month != this.state.currentMonth ? '#f1f2f4' : 'white'}}>{week[3].date}</Td>
                                    <Td style={{ background: week[4].month != this.state.currentMonth ? '#f1f2f4' : 'white'}}>{week[4].date}</Td>
                                    <Td style={{ background: week[5].month != this.state.currentMonth ? '#f1f2f4' : 'white'}}>{week[5].date}</Td>
                                    <Td style={{ background: week[6].month != this.state.currentMonth ? '#f1f2f4' : 'white'}}>{week[6].date}</Td>
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
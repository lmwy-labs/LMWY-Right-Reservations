import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Calendar from './Calendar.jsx';
import September from '../../CalendarDummyData.js';

/******************** STYLED COMPONENTS ********************/
const ReserveForm = styled.div`
    width: 286px;
    height: 306px;
    background-color: white;
    box-shadow: 0px 0px 6px #BFBFBF;
    margin: 50px;
`;
const FormTitle = styled.div`
    font-size: 19px;
    margin: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #BFBFBF;
    text-align: center;
    font-weight: bold;
`;
const ReservationForms = styled.div`
    width: 95%;
    display: inline-block;
`;
const PartyLabel = styled.div`
    font-size: 14px;
    height: 22px;
    margin-left: 15px;
    font-weight: bold;
`;
const PartyDiv = styled.div`
    display: flex;
`;
const PartyFor = styled.div`
    display: absolute;
    padding-top: 10px;
    padding-left: 15px;
    font-size: 14px;
    font-weight: none;
`;
const PartySelect = styled.select`
    margin-left: -22px;
    margin-bottom: 12px;
    width: 93%;
    background-color: white;
    -moz-appearance:none;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 27px;
    border: none;
    border-bottom: 1px solid #BFBFBF;
    font-size: 14px;
    font-weight: none;
    outline: none;
    background: url(https://cdn3.iconfinder.com/data/icons/iconano-text-editor/512/010-Down-512.png) no-repeat right;
    background-position-x: 97%;
    background-size: 10px;
&:hover, active {
    margin-bottom: 11px;
    border-bottom: 2px solid #da3743;
    cursor: pointer;
}
`;
PartySelect.displayName = 'PartySelect';
const DateTime = styled.div`
    display: flex;
`;
const DateTimeLabel = styled.div`
    font-size: 14px;
    height: 22px;
    width: 40%;
    margin-left: 18px;
    font-weight: bold;
`;
const DateChooser = styled.select`
    margin-left: 15px;
    margin-bottom: 12px;
    width: 43%;
    background-color: white;
    -moz-appearance:none;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #BFBFBF;
    font-size: 14px;
    font-weight: none;
    outline: none;
    background: url(https://cdn3.iconfinder.com/data/icons/iconano-text-editor/512/010-Down-512.png) no-repeat right;
    background-position-x: 97%;
    background-size: 10px;
&:hover, active {
    margin-bottom: 11px;
    border-bottom: 2px solid #da3743;
    cursor: pointer;
}
`
DateChooser.displayName = 'DateChooser';
const TimeSelect = styled.select`
    margin-left: 15px;
    margin-bottom: 12px;
    width: 43%;
    background-color: white;
    -moz-appearance:none;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #BFBFBF;
    font-size: 14px;
    font-weight: none;
    outline: none;
    background: url(https://cdn3.iconfinder.com/data/icons/iconano-text-editor/512/010-Down-512.png) no-repeat right;
    background-position-x: 97%;
    background-size: 10px;
&:hover, active {
    margin-bottom: 11px;
    border-bottom: 2px solid #da3743;
    cursor: pointer;
}
`;
TimeSelect.displayName = 'TimeSelect';
const CalPopup = styled.div`
    position: absolute;
    margin-top: 39px;
    margin-left: 15px;
`;
const FindTable = styled.button`
    margin-left: 15px;
    margin-top: 5px;
    width: 93%
    height: 47px;
    outline: none;
    border: none;
    border-radius: 3%;
    background-color: #da3743;
    color: white;
    font-size: 14px;
&:hover, active {
    cursor: pointer;
}
`;
FindTable.displayName = 'FindTable';

/******************** ADDITIONAL FUNCTIONS ********************/
const generateTimes = () => {
    const times = [];
    for(var hour = 0; hour < 24; hour++) {
        times.push(moment({ hour }).format('h:mm A'));
        times.push(
            moment({
                hour,
                minute: 30
            }).format('h:mm A')
        );
    }
    return times;
}
const reservationTimes = generateTimes();

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
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCalendar: false,
            partySize: 0,
            date: '',
            time: {},
            partyArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            timeArray: reservationTimes,
            currentMonth: '',
            currentYear: '',
            currentMonthDates: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.generateMonth = this.generateMonth.bind(this);
        this.selectPartySize = this.selectPartySize.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.selectTime = this.selectTime.bind(this);
        this.showCalendar = this.showCalendar.bind(this);
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
        });
    }

    generateMonth() {
        const dates = generateMonthlyDates(this.state.currentMonth, this.state.currentYear);
        this.setState({
            currentMonthDates: dates
        })
    }

    selectPartySize(e) {
        this.setState({
            partySize: e.target.value
        })
    }
    selectDate(date) {
        this.setState({
            date: date[0],
            selectedDate: date[1]
        })
    }
    selectTime(e) {
        this.setState({
            time: e.target.value
        })
    }
    showCalendar() {
        this.setState((state) => ({
            showCalendar: !state.showCalendar
        }))
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
                <ReserveForm>
                    <FormTitle>
                        Make a reservation
                    </FormTitle>
                    <ReservationForms>
                        <PartyLabel>
                            Party Size
                        </PartyLabel>
                        <PartyDiv>
                            <PartyFor>For </PartyFor>
                            <PartySelect value={this.state.partySize} onChange={this.selectPartySize}>
                                {this.state.partyArray.map((num, i) => (
                                    <option key={i} value={num}>{num}</option>
                                ))}
                            </PartySelect>
                        </PartyDiv>
                        <DateTime>
                            <DateTimeLabel>
                                Date
                            </DateTimeLabel>
                            <DateTimeLabel>
                                Time
                            </DateTimeLabel>
                        </DateTime>
                        <DateTime>

                            <DateChooser onClick={this.showCalendar}></DateChooser>
                                <option></option>
                                <CalPopup ref={(node) => this.setWrapperRef = node}>
                                    {this.state.showCalendar ? <Calendar changeNextMonth={this.changeNextMonth} changePrevMonth={this.changePrevMonth} currentMonthDates={this.state.currentMonthDates} currentMonth={this.state.currentMonth} currentYear={this.state.currentMonth}  showCalendar={this.showCalendar} selectDate={this.selectDate}/> : null}
                                </CalPopup>
                            <TimeSelect value={this.state.time} onChange={this.selectTime}>
                                {this.state.timeArray.map((time, i) => (
                                    <option key={i} value={time}>{time}</option>
                                ))}
                            </TimeSelect>
                        </DateTime>
                        <FindTable>Find a Table</FindTable>
                    </ReservationForms>
                </ReserveForm>
            </div>
        )
    }
}

export default Reservation;
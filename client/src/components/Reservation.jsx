import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';

const ReserveForm = styled.div`
    width: 264px;
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
    border-bottom: 2px solid #da3743;
    cursor: pointer;
}
`;
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
    border-bottom: 2px solid #da3743;
    cursor: pointer;
}
`
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
    border-bottom: 2px solid #da3743;
    cursor: pointer;
}
`;
const CalPopup = styled.div`
    position: absolute;
    margin-top: -12.5px;
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

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCalendar: false,
            partySize: "For 4",
            partyArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
        this.selectPartySize = this.selectPartySize.bind(this);
        this.showCalendar = this.showCalendar.bind(this);
    }

    selectPartySize(e) {
        this.setState({
            partySize: e.target.value
        })
    }

    showCalendar() {
        this.setState((state) => ({
            showCalendar: !state.showCalendar
        }))
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
                        <DateChooser onClick={this.showCalendar}></DateChooser>
                            <CalPopup>
                                {this.state.showCalendar ? <Calendar /> : null}
                            </CalPopup>
                        <TimeSelect>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </TimeSelect>
                        <FindTable>Find a Table</FindTable>
                    </ReservationForms>
                </ReserveForm>
                {/* <Calendar /> */}
            </div>
        )
    }
}

export default Reservation;
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
    margin: 18px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #BFBFBF;
    text-align: center;
    font-weight: bold;
`;
const ReservationForms = styled.div`

`;
const PartyLabel = styled.div`
    font-size: 14px;
    height: 22px;
    margin-left: 18px;
    font-weight: bold;
`;
const PartySelect = styled.select`
    margin-left: 18px;
    width: 87%;
    background-color: white;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #BFBFBF;
    font-size: 14px;
    font-weight: none;
    outline: none;
&:hover, active {
    border:none;
    border-bottom: 2px solid #da3743;
    outline: none;
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
    }

    selectPartySize(e) {
        this.setState({
            partySize: e.target.value
        })
    }

    render() {
        return (
            <div>
                <ReserveForm>
                    <FormTitle>
                        Make a reservation
                    </FormTitle>
                    <PartyLabel>
                        Party Size
                    </PartyLabel>
                    <PartySelect value={this.state.partySize} onChange={this.selectPartySize}>
                        {this.state.partyArray.map((num, i) => (
                            <option key={i} value={num}>{num}</option>
                        ))}
                    </PartySelect>
                    {this.state.showCalendar ? <Calendar /> : null}
                </ReserveForm>
            </div>
        )
    }
}

export default Reservation;
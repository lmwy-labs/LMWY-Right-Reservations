import React from 'react';
import styled from 'styled-components';

const CalHeader = styled.div`
    text-align: center;
    font-weight: bold;
    padding: 7.5px;
    padding-top: 25px;
`;
const Button = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #f1f2f4; 
    outline: none;
`;
&:active {
    outline: ${none}
};
const PrevMonth = styled(Button)`
    margin-right: 35px;
`;
const NextMonth = styled(Button)`
    margin-left: 35px;
`;

class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <CalHeader>
                <PrevMonth>&lt;</PrevMonth>
                September 2019
                <NextMonth>&gt;</NextMonth>
            </CalHeader>
            // <div className="month">
            //     <button className="button prevMonth">L</button>
            //     September 2019
            //     <button className="button nextMonth">R</button>
            // </div>
        )
    }
}

export default Month;


import React from 'react';
import styled from 'styled-components';

/******************** STYLED COMPONENTS ********************/
const CalHeader = styled.div`
    text-align: center;
    font-weight: bold;
    padding-top: 20px;
    padding-bottom: 10px;
`;
CalHeader.displayName = 'CalHeader';
const Button = styled.button`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: #f1f2f4; 
    border: 1px solid #d8d9db;
    font-size: 13px;
    font-weight: bold;
&:hover, :active {
    border: 2px solid #da3743;
}`;
const PrevMonth = styled(Button)`
    margin-right: 33px;
`;
const NextMonth = styled(Button)`
    margin-left: 33px;
`;

/******************** REACT COMPONENT ********************/
class Month extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CalHeader>
                <PrevMonth onClick={this.props.changePrevMonth}>&lt;</PrevMonth>
                {this.props.monthName} {this.props.currentYear}
                <NextMonth onClick={this.props.changeNextMonth}>&gt;</NextMonth>
            </CalHeader>
        )
    }
}

export default Month;
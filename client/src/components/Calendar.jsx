import React from 'react';
import styled from 'styled-components';
import Month from './month.jsx';

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
    border: .5px solid#d8d9db;
`;
Td.displayName = 'Td';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        
        this.dateOnClick = this.dateOnClick.bind(this);
    }

    dateOnClick(e) {
        this.props.selectDate(e.target.innerHTML);
    }

    render() {
        return (
            <div>
                <Cal>
                    <Month/>
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
                            {this.props.calendarDates.map((week, i) => 
                                <tr key={i} onClick={this.dateOnClick}>
                                    <Td>{week[0]}</Td>
                                    <Td>{week[1]}</Td>
                                    <Td>{week[2]}</Td>
                                    <Td>{week[3]}</Td>
                                    <Td>{week[4]}</Td>
                                    <Td>{week[5]}</Td>
                                    <Td>{week[6]}</Td>
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
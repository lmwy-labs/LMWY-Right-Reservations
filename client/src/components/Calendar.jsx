import React from 'react';
import styled from 'styled-components';
import Month from './month.jsx';
import September from '../../CalendarDummyData.js';

const Cal = styled.div`
    border: .5px solid #d8d9db;
    width: 300px;
    height: 340px;
    background-color: #f1f2f4;
`;

const Table = styled.table`
    table-layout: fixed;
    width: 87%;
    border-collapse: collapse;
    padding-top: 5px;
    margin-left: 6%; 
`;

const Tr = styled.tr`
    font-size: 13px;
    text-align: center;
    color: #2d333f;
`;

const Td = styled.td`
    background-color: white;
    padding: 9px;
    text-align: center;
    border: .5px solid#d8d9db;
`;

const Wrapper = ({ message }) => {
  return <StyledWrapper>{message}</StyledWrapper>
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                            {September.map((week, i) => 
                                <tr key={i}>
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
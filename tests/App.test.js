import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reservation from '../client/src/components/Reservation.jsx';
import Calendar from '../client/src/components/Calendar.jsx';
import Month from '../client/src/components/Month.jsx';

describe('<Reservation/>', () => {
    test('Reservation component should exist', () => {
        const wrapper = shallow(<Reservation />);
        expect(wrapper.exists()).toBe(true);
    });
    test('It should toggle show calendar state when clicking on Date Selector', () => {
        const wrapper = shallow(<Reservation />);
        const DateChooser = wrapper.find('DateChooser').at(0);

        DateChooser.simulate('click');
        expect(wrapper.state().showCalendar).toEqual(true);
        
        DateChooser.simulate('click');
        expect(wrapper.state().showCalendar).toEqual(false);
    });
    test('It should not display calendar component when showCalendar state is false', () => {
        const wrapper = shallow(<Reservation />);
        wrapper.setState({showCalendar: false});
        expect(wrapper.find(Calendar).exists()).toBe(false);
    });
    test('It should display calendar component when showCalendar state is true', () => {
        const wrapper = shallow(<Reservation />);
        wrapper.setState({showCalendar: true});
        expect(wrapper.find(Calendar).exists()).toBe(true);
    });
    test('It should set party size state based on party size selection', () => {
        const wrapper = shallow(<Reservation />);
        const PartySelect = wrapper.find('PartySelect').at(0);

        PartySelect.simulate('change', {target: { value : 4}});
        wrapper.setState({showCalendar: true});
        expect(wrapper.state().partySize).toEqual(4);
    });
});

describe('<Calendar/>', () => {
    test('Calendar should take in props', () => {
        const wrapper = shallow(<Calendar />);
        wrapper.setProps({calendarDates: [[1,2,3,4,5,6,7]]});
        expect(wrapper.props('calendarDates')).toEqual(3);
    })
})

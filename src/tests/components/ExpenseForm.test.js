import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment';


test('Should render ExpenseForm correctly ',()=>{

    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data',()=>{
    const expense =expenses[2];
    const wrapper = shallow(<ExpenseForm  expense ={expense}/>);
    expect(wrapper).toMatchSnapshot();
})


test('should set new date on date change',()=>{
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseForm expense={expense} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment());
    expect(wrapper.state('createdAt')).toEqual(moment());

});

test('should set the focus on focus change',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBeTruthy();

});
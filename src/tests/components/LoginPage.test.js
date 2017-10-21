import {shallow} from 'enzyme';
import LoginPage from '../../components/LoginPage';
import React from 'react';


test('should render login page ',()=>{

    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();


})
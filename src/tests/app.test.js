import React from "react";
import {shallow} from 'enzyme'
import App from '../App'

it("renders starting", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('#app')).toHaveLength(1)
});
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { shallow } from 'enzyme'
import sinon from 'sinon'


const dummyStore = createStore(
    applyMiddleware(thunk)
);

const _Button = () => {
    return (
        <Provider store={dummyStore}>
            <Button
                title="CANCEL"
                bgColor="#78909C"
                labelColor="#ffffff"
            />
        </Provider>
    )
}





it('renders without crashing', () => {

    const wrapper = shallow(<_Button/>)

    expect(wrapper.length).toBe(1)

});






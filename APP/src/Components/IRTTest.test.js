import React from 'react';
import ReactDOM from 'react-dom';
import { IRT } from './IRT'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { shallow } from 'enzyme'


const dummyStore = createStore(
    applyMiddleware(thunk)
);

const _IRT = () => {
    return (
        <Provider store={dummyStore}>
            <IRT/>
        </Provider>
    )
}


it('renders without crashing', () => {

    const wrapper = shallow(<_IRT/>)

    expect(wrapper.length).toBe(1)

});


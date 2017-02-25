import React from 'react';
import ReactDOM from 'react-dom';
import { IRTC } from './IRTC'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { shallow } from 'enzyme'


import { GetMaxCardsFromDB } from '../Redux/actions'

const dummyStore = createStore(
    applyMiddleware(thunk)
);

const _IRTC = () => {
    return (
        <Provider store={dummyStore}>
            <IRTC/>
        </Provider>
    )
}


it('renders without crashing', () => {

    const wrapper = shallow(<_IRTC/>)

    expect(wrapper.length).toBe(1)

});








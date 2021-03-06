import Input from './Input';
import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,storeFactory} from './test/testUtils';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    // console.log(wrapper.debug());
    return wrapper;
}

describe('render',()=>{
    describe('word hasnt been guessed', ()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success:false};
            wrapper = setup(initialState);
        });
        test('renders without error', ()=>{
            const component=findByTestAttr(wrapper,"component-input");
            expect(component.length).toBe(1);
        });
        test('renders input box', ()=>{
            const component=findByTestAttr(wrapper,"input-box");
            expect(component.length).toBe(1);
        });
        test('renders submit button', ()=>{
            const component=findByTestAttr(wrapper,"submit-button");
            expect(component.length).toBe(1);
        });

    });
    describe('word has been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success:true};
            wrapper = setup(initialState);
        });

        test('renders without error', ()=>{
            const component=findByTestAttr(wrapper,"component-input");
            expect(component.length).toBe(1);
        });
        test('does NOT renders input box', ()=>{
            const component=findByTestAttr(wrapper,"input-box");
            expect(component.length).toBe(0); 
        });
        test('does NOT renders submit button', ()=>{
            const component=findByTestAttr(wrapper,"submit-button");
            expect(component.length).toBe(0);
        });
    });
});

describe('redux props', ()=>{
    test('has success piece of state as prop',()=>{
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);

    });

    test('guessword action creator is a function prop',()=>{
        const wrapper=setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
});
import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatusClassComponent from './ProfileStatusClassComponent';

describe('ProfileStatusClassComponent component', () => {

    test('status from props sould be in state', () => {

        let component = create(<ProfileStatusClassComponent status='text status' />);
        let instance = component.getInstance();
        expect(instance.state.status).toBe('text status');
    }),

    test('p should be displayed', () => {
        let component = create(<ProfileStatusClassComponent status='text status' />);
        let root = component.root;
        let p = root.findByType('p');
        expect(p).not.toBeNull();
    }),

    test(`input shouldn't be displayed`, () => {
        let component = create(<ProfileStatusClassComponent status='text status' />);
        let root = component.root;
        let p = root.findByType('p');
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    }),

    test('p should have text displayed', () => {
        let component = create(<ProfileStatusClassComponent status='text status' />);
        let root = component.root;
        let p = root.findByType('p');
        expect(p.children[0]).toBe('text status');
    }),

test('input should be displayed in editMode with correct value', () => {
    let component = create(<ProfileStatusClassComponent status='text status' />);
    let root = component.root;
    let p = root.findByType('p');
    p.props.onClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe('text status');
}),

test('input should be call deactivateEditMode', () => {
    let mockFunc = jest.fn();
    let component = create(<ProfileStatusClassComponent status='text status' updateUserStatusTC={mockFunc}/>);
    let instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockFunc.mock.calls.length).toBe(1);
})

});
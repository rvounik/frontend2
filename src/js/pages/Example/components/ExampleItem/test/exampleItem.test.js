import ExampleItem from '../components/ExampleItem';
import { shallow } from 'preact-render-spy';

test('check if ExampleItem is rendering', () => {
    const context = shallow(<ExampleItem/>);

    expect(context.find('section')).toBeTruthy();
});

test('check if state is toggled when clicking filter toggle button', () => {
    const context = shallow(<ExampleItem/>);
    const child = (context.find('span').at(0));

    expect(context.find('section').contains('active')).toBeFalsy();
    child.simulate('click');
    expect(context.find('section').contains('active')).toBeTruthy();
});

// todo: the 2 tests below depend on this.props.items and this.props.addRandomItem being set. cant get this working atm.

// test('check if the initial items are rendered to the DOM', () => {
//     const context = deep(<ExampleItem/>);
//     context.setState({ items: ['initial item 1', 'initial item 2'] });
//     const list = (context.find('#project-list'));
//
//     expect(list.find('li').length).toBe(2);
// });

// test('check if a new item is appended when clicking the add button', () => {
//     const context = shallow(<ExampleItem/>);
//     const list = (context.find('#project-list'));
//     const child = (context.find('button'));
//
//     child.simulate('click');
//     expect(list.find('li').length).toBe(3);
// });

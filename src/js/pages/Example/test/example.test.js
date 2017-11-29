import Example from '../components/Example';
import { shallow } from 'preact-render-spy';

test('check if Example is rendering', () => {
    const context = shallow(<Example/>);

    expect(context.find('span')).toBeTruthy();
});

// todo: get this working
// test('check if span element contains time', () => {
//     const context = shallow(<Example/>);
//
//     showCurrentTime.showCurrentTime = jest.fn(
//         () => { return '123' }
//     );
//
//     console.log(context.find('section')[0].children);
//
//     expect(context.find('section').contains(<span>123</span>)).toBeTruthy();
// });

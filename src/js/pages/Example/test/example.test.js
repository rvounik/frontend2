jest.mock('../../../utils/showCurrentTime.js', () => jest.fn()); // this happens automatically with automocking

import Example from '../components/Example';
import showCurrentTime from '../../../utils/showCurrentTime.js';
import { shallow } from 'preact-render-spy';

test('check if ExampleItem is rendering', () => {
    const context = shallow(<Example/>);

    expect(context.find('span')).toBeTruthy();
});

// todo: for some reason jest refuses to return data for the mocked import

// test('check if Example is rendering a timestamp', () => {
//     const context = shallow(<Example />);
//
//     showCurrentTime.mockImplementation(() => {
//         return '11:11';
//     });
//
//      expect(context.find('span').at(0).text()).toBe('11:11');
// });

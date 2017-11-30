jest.mock('../../../utils/showCurrentTime.js', () => jest.fn().mockReturnValue('12:34'));

import Example from '../components/Example';
import { shallow } from 'preact-render-spy';

test('check if ExampleItem is rendering', () => {
    const context = shallow(<Example/>);

    expect(context.find('span')).toBeTruthy();
});

test('check if Example is rendering a timestamp', () => {
    const context = shallow(<Example />);

    expect(context.find('span').at(0).text()).toBe('12:34');
});

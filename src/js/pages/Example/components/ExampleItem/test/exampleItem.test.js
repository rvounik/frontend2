import ExampleItem from '../components/ExampleItem';
import { shallow } from 'preact-render-spy';

test('check if ExampleItem is rendering', () => {
    const context = shallow(<ExampleItem/>);

    expect(context.find('p')).toBeTruthy();
});

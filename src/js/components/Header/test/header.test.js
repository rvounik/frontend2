import Header from '../components/Header';
import { shallow, deep } from 'preact-render-spy';

// test examples: https://github.com/mzgoddard/preact-render-spy/blob/master/src/shared-render.test.js

test('check if Header is rendering empty figure with class \'logo\'', () => {
    const context = shallow(<Header/>);
    context.setState({ items: {label: 'inbox', link: '/'}});

    expect(context.find('figure').text()).toBe('');
    expect(context.find('figure').attr('className')).toBe('logo'); // do not use 'class' here
});

test('check if Navigation items are populated', () => {
    const context = shallow(<Header/>);

    expect(context.find('Navigation').attr('items')).toEqual([
        {"label": "example-navigation-item", "link": "/example"}
    ]);
});

test('use \'deep\' instead of \'shallow\' to test child component (in which you\'d normally write these tests)', () => {
    const context = deep(<Header/>);

    expect(context.find('a').length).toBe(2);
    expect(context.find('li').contains(<a href="/example">example-navigation-item</a>)).toBeTruthy();
});

test('check for link validity', () => {
    const context = deep(<Header/>);
    const child = (context.find('a').at(0));

    expect(child.attr('href')).toBe('/');
    child.simulate('click'); // dont test if link is being followed. instead test state or className change
});

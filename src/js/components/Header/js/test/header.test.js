import { h } from 'preact';
import Header from '../Header';
import { shallow, deep } from 'preact-render-spy';

// todo: figure out if/why it is rendering child components instead of stubbing them
// todo: figure out how to be able to import css without extensions in tests

// todo: use these examples for writing the first tests:
// https://github.com/mzgoddard/preact-render-spy/blob/557e9f00402cdee5378230bf7f5f9723ec1ddba1/src/shared-render.test.js
// https://github.com/mzgoddard/preact-render-spy
// https://github.com/mzgoddard/preact-render-spy/blob/master/src/shallow-render.test.js
// https://github.com/mzgoddard/preact-render-spy/blob/master/src/deep-render.test.js
// https://github.com/mzgoddard/preact-render-spy/blob/master/src/shared-render.test.js

test('check if Header is rendering empty figure with class \'logo\'', () => {
    const context = shallow(<Header/>);

    expect(context.find('figure').text()).toBe('');
    expect(context.find('figure').attr('className')).toBe('logo');
});

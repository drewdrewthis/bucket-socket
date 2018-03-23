import React from 'react';
import renderer from 'react-test-renderer';
import Challenge from '../index';

describe('<Challenge />', () => {
  it('matches snapshot', () => {
    const actual = renderer.create(<Challenge />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Raceboard from '../index';

describe('<Raceboard />', () => {
  it('matches snapshot', () => {
    const actual = renderer.create(<Raceboard />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});

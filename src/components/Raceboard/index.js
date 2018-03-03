import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import styles from './raceboard.module.scss';
import './raceboard.module.css';

const Raceboard = (props) => {
  const {
    children,
    className,
    players = [1]
  } = props;

  const classes = cx(
    'raceboard',
    // styles['raceboard'],
    className,
  );

  const renderPlayer = ({counter}) => (
    <div className='lane'>
      <div className='player'>
        <div
          className='knob'
          style={{
            height: '40px',
            width: '40px',
            bottom: `calc(${Math.min(counter * 5, 100)}% - 40px)`
          }}
        />
      </div>
  </div>
  )

  return (
    <div className={classes}>
      <div className='spread'>
        { players.map(renderPlayer) }
      </div>
    </div>
  );
};


Raceboard.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Raceboard.defaultProps = {
  // Place any default props here.
};

export default Raceboard;

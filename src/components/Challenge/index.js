import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './challenge.module.css';
import challenger from 'challenger';
import { Button } from 'athenaeum';
import challenges from './challenges';
require('challenger/client/dist/challenger.min.css');

class Challenge extends React.Component {
  onClick = () => {
    const {
      incrementCounter
    } = this.props;

    const container = document.getElementById('challenge');
    challenger(challenges(incrementCounter), { parent: container, onExit: incrementCounter});
  }

  render() {
    const {
      className,
    } = this.props;

    const classes = cx(
      styles['challenge'],
      className,
    );

    return (
      <div className={classes} id='challenge'>
        <Button onClick={this.onClick}>Start</Button>
      </div>
    );
  }
};


Challenge.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string
};

Challenge.defaultProps = {
  // Place any default props here.
};

export default Challenge;

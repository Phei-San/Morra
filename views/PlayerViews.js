import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFinger = class extends React.Component {
  render() {
    const {parent, playable, finger} = this.props;
    return (
      <div>
        {finger ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('ZERO')}
        >Zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('ONE')}
        >One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('TWO')}
        >Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('THREE')}
        >Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('FOUR')}
        >Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playFinger('FIVE')}
        >Five</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ZERO')}
        >Zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ONE')}
        >One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TWO')}
        >Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('THREE')}
        >Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FOUR')}
        >Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FIVE')}
        >Five</button>
         <button
          disabled={!playable}
          onClick={() => parent.playGuess('SIX')}
        >Six</button>
         <button
          disabled={!playable}
          onClick={() => parent.playGuess('SEVEN')}
        >Seven</button>
         <button
          disabled={!playable}
          onClick={() => parent.playGuess('EIGHT')}
        >Eight</button>
         <button
          disabled={!playable}
          onClick={() => parent.playGuess('NINE')}
        >Nine</button>
         <button
          disabled={!playable}
          onClick={() => parent.playGuess('TEN')}
        >Ten</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
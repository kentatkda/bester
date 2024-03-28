import React from 'react'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';

function ShinkanJoinButton() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div
    style={{
      textAlign: 'center',
    }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button variant="warning">新歓に参加 →</Button>
    </div>)
}

export default ShinkanJoinButton

import React from 'react';
import Button from '../src/index';

const blank = '\u00A0';

export default class ButtonDemo extends React.Component {
  render() {
    return (
      <>
        <div>
          <Button type="primary">primary</Button>
          {blank}
          <Button type="normal">normal</Button>
          {blank}
          <Button type="dashed">dashed</Button>
          {blank}
          <Button type="link">link</Button>
        </div>
      </>
    );
  }
}

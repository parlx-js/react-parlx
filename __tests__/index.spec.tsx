import React from 'react';
import { render } from '@testing-library/react';

import ReactParlx from '../src';

describe('ReactParlx', () => {
  it('should render component with default props', () => {
    const { container } = render(<ReactParlx />);

    expect(container).toMatchSnapshot();
  });

  it('should render component with custom props', () => {
    const { container } = render(
      <ReactParlx
        className="parlx"
        style={{ border: '1px solid #f00' }}
        overlay
        overlayProps={{
          className: 'parlx-overlay',
        }}
      >
        <p>Hello World!</p>
      </ReactParlx>
    );

    expect(container).toMatchSnapshot();
  });
});

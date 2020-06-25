import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  radios,
} from '@storybook/addon-knobs';

import ReactParlx from '../src';

export default {
  title: 'ReactParlx',
  decorators: [
    (storyFn: () => void) => {
      document.body.style.margin = '0';

      return storyFn();
    },
    withKnobs,
  ],
};

const Main: React.FC<{ horizontal?: boolean }> = ({
  children,
  horizontal = false,
}) => (
  <main
    style={{
      height: '200vh',
      width: horizontal ? '200vw' : '100vw',
      fontFamily: `
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
      fontWeight: 900,
      fontSize: '2rem',
    }}
  >
    {children}
  </main>
);

const Title: React.FC = ({ children }) => (
  <h1
    style={{
      zIndex: 100,
      color: '#fff',
      position: 'absolute',
      textTransform: 'uppercase',
      margin: 0,
      padding: 0,
    }}
  >
    {children}
  </h1>
);

const Background = () => <img className="parlx-children" src="/lavender.jpg" />;

const styles = {
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const basic = () => (
  <Main>
    <ReactParlx
      style={styles}
      overlay={boolean('Add overlay', true)}
      settings={{
        height: text('Height', '100vh'),
        speed: number('Speed', 0.3, {
          range: true,
          min: -1,
          max: 1,
          step: 0.1,
        }),
      }}
    >
      <Background />

      <Title>Basic</Title>
    </ReactParlx>
  </Main>
);

export const axis = () => (
  <Main horizontal>
    <ReactParlx
      style={styles}
      settings={{
        height: '100vh',
        axis: radios('Axis', { X: 'X', Y: 'Y' }, 'X'),
      }}
    >
      <Background />

      <Title>Axis</Title>
    </ReactParlx>
  </Main>
);

export const direction = () => (
  <Main>
    <ReactParlx
      style={styles}
      settings={{
        height: '100vh',
        direction: radios(
          'Direction',
          {
            vertical: 'vertical',
            horizontal: 'horizontal',
            diagonal: 'diagonal',
          },
          'diagonal'
        ),
      }}
    >
      <Background />

      <Title>Direction</Title>
    </ReactParlx>
  </Main>
);

export const exclude = () => (
  <Main>
    <ReactParlx
      style={styles}
      settings={{
        height: '100vh',
        exclude: eval(`/(${text('Exclude agents', 'Firefox')})/`) as RegExp,
      }}
    >
      <Background />

      <Title>Exclude</Title>
    </ReactParlx>
  </Main>
);

export const type = () => (
  <Main>
    <ReactParlx
      style={{ ...styles, width: '50vw', margin: '40px auto' }}
      settings={{
        type: radios(
          'Type',
          {
            foreground: 'foreground',
            background: 'background',
          },
          'foreground'
        ),
        direction: 'horizontal',
        speed: -0.6,
      }}
    >
      <Background />

      <Title>Type</Title>
    </ReactParlx>
  </Main>
);

export const customEvent = () => (
  <Main>
    <ReactParlx
      style={styles}
      parlxMove={action('parlxMove')}
      settings={{ height: '100vh' }}
    >
      <Background />

      <Title>Custom Event</Title>
    </ReactParlx>
  </Main>
);

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReactParlx from '../src';

export default {
  title: 'ReactParlx',
  component: ReactParlx,
} as Meta;

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

export const basic: Story = ({ overlay, height, speed }) => (
  <Main>
    <ReactParlx
      style={styles}
      overlay={overlay}
      settings={{
        height,
        speed,
      }}
      // overlay={boolean('Add overlay', true)}
      // settings={{
      //   height: text('Height', '100vh'),
      //   speed: number('Speed', 0.3, {
      //     range: true,
      //     min: -1,
      //     max: 1,
      //     step: 0.1,
      //   }),
      // }}
    >
      <Background />

      <Title>Basic</Title>
    </ReactParlx>
  </Main>
);

basic.args = {
  overlay: true,
  height: '100vh',
  speed: 0.3,
};

export const axis: Story = ({ axis }) => (
  <Main horizontal>
    <ReactParlx
      style={styles}
      settings={{
        height: '100vh',
        axis,
        //   axis: radios('Axis', { X: 'X', Y: 'Y' }, 'X'),
      }}
    >
      <Background />

      <Title>Axis</Title>
    </ReactParlx>
  </Main>
);

axis.args = {
  axis: 'X',
};

export const direction: Story = ({ direction }) => (
  <Main>
    <ReactParlx
      style={styles}
      settings={{
        height: '100vh',
        direction,
        //   direction: radios(
        //     'Direction',
        //     {
        //       vertical: 'vertical',
        //       horizontal: 'horizontal',
        //       diagonal: 'diagonal',
        //     },
        //     'diagonal'
        //   ),
      }}
    >
      <Background />

      <Title>Direction</Title>
    </ReactParlx>
  </Main>
);

direction.args = {
  direction: 'diagonal',
};

export const exclude: Story = () => (
  <Main>
    <ReactParlx
      style={styles}
      settings={{
        height: '100vh',
        //   exclude: eval(`/(${text('Exclude agents', 'Firefox')})/`) as RegExp,
      }}
    >
      <Background />

      <Title>Exclude</Title>
    </ReactParlx>
  </Main>
);

exclude.args = {
  // exclude
};

export const type: Story = ({ type }) => (
  <Main>
    <ReactParlx
      style={{ ...styles, width: '50vw', margin: '40px auto' }}
      settings={{
        //   type: radios(
        //     'Type',
        //     {
        //       foreground: 'foreground',
        //       background: 'background',
        //     },
        //     'foreground'
        //   ),
        direction: 'horizontal',
        speed: -0.6,
      }}
    >
      <Background />

      <Title>Type</Title>
    </ReactParlx>
  </Main>
);

type.args = {
  type: 'foreground',
};

export const customEvent: Story = () => (
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

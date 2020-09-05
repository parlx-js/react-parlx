import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReactParlx from '../src';

export default {
  title: 'ReactParlx',
  component: ReactParlx,
} as Meta;

interface MainProps {
  readonly horizontal?: boolean;
}

const Main: React.FC<MainProps> = ({ children, horizontal = false }) => (
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

const Background: React.FC = () => (
  <img className="parlx-children" src="/lavender.jpg" />
);

const styles = {
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

interface BasicProps {
  readonly overlay: boolean;
  readonly height: string;
  readonly speed: number;
}

export const basic: Story<BasicProps> = ({ overlay, ...args }) => (
  <Main>
    <ReactParlx style={styles} overlay={overlay} settings={args}>
      <Background />

      <Title>Basic</Title>
    </ReactParlx>
  </Main>
);

basic.argTypes = {
  speed: {
    control: {
      type: 'range',
      min: -1,
      max: 1,
      step: 0.1,
    },
  },
};

basic.args = {
  overlay: true,
  height: '100vh',
  speed: 0.3,
};

interface AxisProps {
  readonly axis: 'X' | 'Y';
}

export const axis: Story<AxisProps> = ({ axis }) => (
  <Main horizontal>
    <ReactParlx
      style={styles}
      settings={{
        axis,
        height: '100vh',
      }}
    >
      <Background />

      <Title>Axis</Title>
    </ReactParlx>
  </Main>
);

axis.argTypes = {
  axis: {
    control: {
      type: 'radio',
      options: ['X', 'Y'],
    },
  },
};

axis.args = {
  axis: 'X',
};

interface DirectionProps {
  readonly direction: 'vertical' | 'horizontal' | 'diagonal';
}

export const direction: Story<DirectionProps> = ({ direction }) => (
  <Main>
    <ReactParlx
      style={styles}
      settings={{
        direction,
        height: '100vh',
      }}
    >
      <Background />

      <Title>Direction</Title>
    </ReactParlx>
  </Main>
);

direction.argTypes = {
  direction: {
    control: {
      type: 'select',
      options: ['vertical', 'horizontal', 'diagonal'],
    },
  },
};

direction.args = {
  direction: 'diagonal',
};

interface ExcludeProps {
  readonly exclude: RegExp;
}

export const exclude: Story<ExcludeProps> = ({ exclude }) => (
  <Main>
    <ReactParlx
      style={styles}
      settings={{
        exclude,
        height: '100vh',
      }}
    >
      <Background />

      <Title>Exclude</Title>
    </ReactParlx>
  </Main>
);

exclude.args = {
  exclude: /(Firefox)/,
};

interface TypeProps {
  readonly type: 'foreground' | 'background';
}

export const type: Story<TypeProps> = ({ type }) => (
  <Main>
    <ReactParlx
      style={{ ...styles, width: '50vw', margin: '40px auto' }}
      settings={{
        type,
        direction: 'horizontal',
        speed: -0.6,
      }}
    >
      <Background />

      <Title>Type</Title>
    </ReactParlx>
  </Main>
);

type.argTypes = {
  type: {
    control: {
      type: 'radio',
      options: ['foreground', 'background'],
    },
  },
};

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

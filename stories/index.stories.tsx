import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReactParlx from '../src';

export default {
  title: 'ReactParlx',
  component: ReactParlx,
  parameters: {
    actions: {
      disabled: true,
    },
  },
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

const Background = () => (
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

export const Basic: Story<BasicProps> = ({ overlay, ...args }) => (
  <Main>
    <ReactParlx style={styles} overlay={overlay} settings={args}>
      <Background />

      <Title>Basic</Title>
    </ReactParlx>
  </Main>
);

Basic.argTypes = {
  speed: {
    control: {
      type: 'range',
      min: -1,
      max: 1,
      step: 0.1,
    },
  },
};

Basic.args = {
  overlay: true,
  height: '100vh',
  speed: 0.3,
};

interface AxisProps {
  readonly axis: 'X' | 'Y';
}

export const Axis: Story<AxisProps> = ({ axis }) => (
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

Axis.argTypes = {
  axis: {
    control: {
      type: 'radio',
      options: ['X', 'Y'],
    },
  },
};

Axis.args = {
  axis: 'X',
};

interface DirectionProps {
  readonly direction: 'vertical' | 'horizontal' | 'diagonal';
}

export const Direction: Story<DirectionProps> = ({ direction }) => (
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

Direction.argTypes = {
  direction: {
    control: {
      type: 'select',
      options: ['vertical', 'horizontal', 'diagonal'],
    },
  },
};

Direction.args = {
  direction: 'diagonal',
};

interface ExcludeProps {
  readonly exclude: string;
}

export const Exclude: Story<ExcludeProps> = ({ exclude }) => (
  <Main>
    <ReactParlx
      style={styles}
      settings={{
        exclude: new RegExp(exclude),
        height: '100vh',
      }}
    >
      <Background />

      <Title>Exclude</Title>
    </ReactParlx>
  </Main>
);

Exclude.args = {
  exclude: 'Firefox',
};

interface TypeProps {
  readonly type: 'foreground' | 'background';
}

export const Type: Story<TypeProps> = ({ type }) => (
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

Type.argTypes = {
  type: {
    control: {
      type: 'radio',
      options: ['foreground', 'background'],
    },
  },
};

Type.args = {
  type: 'foreground',
};

export const CustomEvent: Story = () => (
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

CustomEvent.parameters = {
  actions: {
    disabled: false,
  },
  controls: {
    disabled: true,
  },
};

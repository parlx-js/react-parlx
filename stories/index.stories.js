import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import ReactParlx from '../lib/react-parlx';

const stories = storiesOf('ReactParlx', module);

const Main = ({ children, horizontal = false }) => (
  <main
    style={{
      height: horizontal ? '100vh' : '200vh',
      width: horizontal ? '200vw' : '100vw',
      fontFamily: `
      -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
      fontWeight: '900',
      fontSize: '2rem'
    }}
  >
    {children}
  </main>
);

const Title = ({ children }) => (
  <h1
    style={{
      zIndex: 100,
      color: '#fff',
      position: 'absolute',
      textTransform: 'uppercase',
      margin: 0,
      padding: 0
    }}
  >
    {children}
  </h1>
);

const Background = () => (
  <img
    className="parlx-children"
    src="https://raw.githubusercontent.com/JB1905/parlx.js/gh-pages/static/media/mountains.97c55f0f.jpg"
  />
);

const styles = {
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

stories.addDecorator(withKnobs);

stories.addDecorator(story => {
  document.body.style.margin = 0;

  return story();
});

stories
  .add('Basic', () => (
    <Main>
      <ReactParlx
        style={styles}
        overlay={boolean('Add overlay', true)}
        settings={{
          height: text('Height', '100vh'),
          speed: number('Speed', 0.3)
        }}
      >
        <Background />

        <Title>Basic</Title>
      </ReactParlx>
    </Main>
  ))
  .add('Horizontal scroll', () => (
    <Main horizontal>
      <ReactParlx
        style={styles}
        settings={{
          height: '100vh',
          axis: text('Axis', 'X')
        }}
      >
        <Background />

        <Title>Horizontal scroll</Title>
      </ReactParlx>
    </Main>
  ))
  .add('Direction', () => (
    <Main>
      <ReactParlx
        style={styles}
        settings={{
          direction: text('Direction', 'horizontal')
        }}
      >
        <Background />

        <Title>Direction</Title>
      </ReactParlx>
    </Main>
  ))
  .add('Exclude', () => (
    <Main>
      <ReactParlx
        style={styles}
        settings={{
          height: '100vh',
          exclude: `/(${text('Exclude agents', 'Firefox')})/`
        }}
      >
        <Background />

        <Title>Exclude</Title>
      </ReactParlx>
    </Main>
  ))
  .add('Type', () => (
    <Main>
      <ReactParlx
        style={{ ...styles, width: '50vw', margin: '40px auto' }}
        settings={{
          type: text('type', 'foreground'),
          direction: 'horizontal',
          speed: -0.6
        }}
      >
        <Background />

        <Title>Type</Title>
      </ReactParlx>
    </Main>
  ))
  .add('parlxMove', () => (
    <Main>
      <ReactParlx
        style={styles}
        parlxMove={action('parlxMove')}
        settings={{
          height: '100vh'
        }}
      >
        <Background />

        <Title>Event</Title>
      </ReactParlx>
    </Main>
  ));

# [react-parlx](https://github.com/parlx-js/react-parlx)

[![NPM version](https://img.shields.io/npm/v/react-parlx?style=flat-square)](https://www.npmjs.com/package/react-parlx)
[![NPM downloads](https://img.shields.io/npm/dm/react-parlx?style=flat-square)](https://www.npmjs.com/package/react-parlx)
[![NPM license](https://img.shields.io/npm/l/react-parlx?style=flat-square)](https://www.npmjs.com/package/react-parlx)
[![Codecov](https://img.shields.io/codecov/c/github/parlx-js/react-parlx?style=flat-square)](https://codecov.io/gh/parlx-js/react-parlx)
[![Travis](https://img.shields.io/travis/parlx-js/react-parlx/main?style=flat-square)](https://travis-ci.org/parlx-js/react-parlx)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-parlx?style=flat-square)](https://bundlephobia.com/result?p=react-parlx)

## About

**[parlx.js](https://www.npmjs.com/package/parlx.js) implementation for React component**

### Demo

- [Live – check website](https://parlx-js.github.io/parlx.js/)
- [Playground – play with library in Storybook](https://parlx-js.github.io/react-parlx/)

### Alternatives

- [react-parallax](https://github.com/rrutsche/react-parallax) by [Richard Rutsche](https://github.com/rrutsche)
- [React Scroll Parallax](https://github.com/jscottsmith/react-scroll-parallax) by [J Scott Smith](https://github.com/jscottsmith)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-parlx
```

Or Yarn:

```sh
$ yarn add react-parlx
```

## Getting Started

**• Import plugin in React application file:**

```js
import ReactParlx from 'react-parlx';
```

**• Later create parallax component and pass options:**

```js
<ReactParlx
  settings={/* settings */}
  callbacks={/* callbacks */}
  onParlxMove={/* event output destination */}
  overlay={/* true/false */}
  overlayProps={/* overlay props */}
  className={/* class name(s) */}
  // other props for div tag e.g. style
/>
```

You can add components with or without additional content:

_with:_

```js
<ReactParlx /* options */>
  {/* additional content */}
</ReactParlx>
```

_without:_

```js
<ReactParlx /* options */ />
```

## Props

| Name             | Type                 | Default    | Description                                                                  | Available options                                                  |
| ---------------- | -------------------- | ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **settings**     | object               | `{}`       | [Default parlx.js settings](https://github.com/parlx-js/parlx.js#settings)   | [parlx.js settings](https://github.com/parlx-js/parlx.js#settings) |
| **callbacks**    | object               | `{}`       | [Default parlx.js callbacks](https://github.com/parlx-js/parlx.js#callbacks) | [parlx.js callbacks](https://github.com/parlx-js/parl              |
| **overlay**      | boolean              | `false`    | Create overlay for parallax container element                                | `true` (enable) / `false` (disable)                                |
| **overlayProps** | HTMLDivElement props | `{}`       | Params for overlay element                                                   | HTMLDivElement props                                               |
| **className**    | string               | `parallax` | Parallax container class name                                                | Name of parallax container                                         |

## Event

`onParlxMove` event callback will output current position of the parallax element

## Examples

```js
import React from 'react';
import ReactParlx from 'react-parlx';

/* ------ First Example ------ */

export const FirstExample = () => {
  return (
    <ReactParlx
      className="parallax"
      callbacks={{
        onResize: (el) => console.log(el),
      }}
    />
  );
};

/* ------ Second Example ------ */

export const SecondExample = () => {
  const handleParlxMove = (e) => {
    console.log(e.detail);
  };

  const style = {
    padding: 10,
  };

  return (
    <ReactParlx
      settings={{
        speed: 0.5,
        direction: 'diagonal',
      }}
      style={style}
      onParlxMove={handleParlxMove}
    >
      <h3>Hello World!</h3>
    </ReactParlx>
  );
};
```

## License

This project is licensed under the MIT License © 2018-present Jakub Biesiada

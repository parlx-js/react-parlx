# [react-parlx](https://github.com/jb1905/react-parlx)

[![NPM version](http://img.shields.io/npm/v/react-parlx.svg?style=flat-square)](https://www.npmjs.com/package/react-parlx)
[![NPM downloads](http://img.shields.io/npm/dm/react-parlx.svg?style=flat-square)](https://www.npmjs.com/package/react-parlx)

#### [parlx.js](https://www.npmjs.com/package/parlx.js) implementation for React component
## Demo
**[Live – check website](https://jb1905.github.io/parlx.js/)**<br>
**[Playground – play with library in Storybook](https://jb1905.github.io/react-parlx/)**

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
  overlay={ /* true/false */ }
  settings={ /* settings */ }
  callbacks={ /* callbacks */ }
  className={ /* class name(s) */ }
  parlxMove={ /* event output destination */ }
  // other props for div tag e.g. style
/>
```

You can add components with or without additional content:

*with:*
```js
<ReactParlx /* options */>
  // additional content
</ReactParlx>
```
*without:*
```js
<ReactParlx /* options */ />
```

## Props
Name | Type | Default | Description | Available options
-|-|-|-|-
**overlay** | boolean | `false` | Create overlay for parallax container element | `true` (enable) / `false` (disable)
**settings** | object | `{}` | [Default parlx.js settings](https://github.com/JB1905/parlx.js#settings) | [parlx.js settings](https://github.com/JB1905/parlx.js#settings)
**callbacks** | object | `{}` | [Default parlx.js callbacks](https://github.com/JB1905/parlx.js#callbacks) | [parlx.js callbacks](https://github.com/JB1905/parlx.js#callbacks)
**className** | string | `parallax` | Parallax container class name | Name of parallax container

## Event
`parlxMove` event will output current position of the parallax element

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada

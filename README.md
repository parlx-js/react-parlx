# [react-parlx](https://github.com/jb1905/react-parlx)

[![NPM version](http://img.shields.io/npm/v/react-parlx.svg?style=flat-square)](https://www.npmjs.com/package/react-parlx)
[![NPM downloads](http://img.shields.io/npm/dm/react-parlx.svg?style=flat-square)](https://www.npmjs.com/package/react-parlx)

#### [parlx.js](https://www.npmjs.com/package/parlx.js) implementation for React component
## Demo
**[See plugin in action](https://jb1905.github.io/parlx.js/)**

## How to Use
**• Install plugin via favourite package manager:**
```sh
$ npm install react-parlx
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
  methods={ /* methods */ }
  styles={ /* CSS styles */ }
  className={ /* class name(s) */ }
  parlxMove={ /* event output destination */ }
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
**methods** | object | `{}` | [Default parlx.js methods](https://github.com/JB1905/parlx.js#methods) | [parlx.js methods](https://github.com/JB1905/parlx.js#methods)
**style** | object | `{}` | CSS styles for parallax container | CSS styles
**className** | string | `parallax` | Parallax container class name | Name of parallax container

## Event
`parlxMove` event will output current position of the parallax element

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada

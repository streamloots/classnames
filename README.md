# ClassNames
[![NPM Version](https://img.shields.io/npm/v/@streamloots/classnames.svg)](https://www.npmjs.com/package/@streamloots/classnames) [![NPM Downloads](https://img.shields.io/npm/dm/@streamloots/classnames.svg)](https://www.npmjs.com/package/@streamloots/classnames) [![Travis](https://travis-ci.org/@streamloots/classnames.svg?branch=master)](https://travis-ci.org/streamloots/classnames) [![Coverage Status](https://coveralls.io/repos/github/streamloots/classnames/badge.svg?branch=master)](https://coveralls.io/github/streamloots/classnames?branch=master)


> A small utility to get classnames for css-modules and apply classes conditionally in react

## Install

```sh
  npm i --save @streamloots/classnames
```

## Usage

```jsx
import ClassNames from '@streamloots/classnames'
import styles from './styles'

const classNames = ClassNames(styles)

const Example = () => (
  <div
    className={classNames({
      example: true,
      hidden: false
    })}
  >
    <h1 className={classNames('example__title')}>hello world</h1>
    <h1 className={classNames('example__title margin-bottom')}>with classes</h1>
  </div>
)
```

```html
<div class="example">
  <h1 class="example__title-as3221">hello world</h1>
  <h1 class="example__title-as3221 margin-bottom">with more classes</h1>
</div>
```
# ClassNames
[![NPM Version](https://img.shields.io/npm/v/@streamloots/classnames.svg)](https://www.npmjs.com/package/@streamloots/classnames) [![NPM Downloads](https://img.shields.io/npm/dm/@streamloots/classnames.svg)](https://www.npmjs.com/package/@streamloots/classnames) [![Travis](https://travis-ci.org/streamloots/classnames.svg?branch=master)](https://travis-ci.org/streamloots/classnames) [![Coverage Status](https://coveralls.io/repos/github/streamloots/classnames/badge.svg?branch=master)](https://coveralls.io/github/streamloots/classnames?branch=master)


> A small utility to get classnames for css-modules and apply classes conditionally in react

## Install

```sh
  yarn add @streamloots/classnames
  
  or
  
  npm i --save @streamloots/classnames
```

## Usage

```jsx
import ClassNames from '@streamloots/classnames';
import styles from './theme.scss';

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

## Use Cases

### Local Classes and global classes

```jsx
import ClassNames from '@streamloots/classnames';
import styles from './theme.scss';

const classNames = ClassNames(styles)

const Example = () => (
  <div>
    <h1 className={classNames('example__title')}>hello world</h1>
    <h1 className={classNames('example__title margin-bottom')}>with classes</h1>
  </div>
)
```

```html
<div class="example">
  <h1 class="example__title-as3221">hello world</h1>
  <h1 class="example__title-as3221 margin-bottom">with classes</h1>
</div>
```

### How to combine local classes and dynamic classes

```jsx
const Input = ({disabled}) => (
  <div
    className={classNames({
      "form-group": true,
      "disabled": disabled
    })}
  >
    <input type="text" disabled={disabled} />
  </div>
)

const App = () => {
  return <Input disabled />
}
```

```html
<div class="form-group-20202 disabled-20202">
  <input type="text" disabled />
</div>
```

### Inject a className from a parent

```jsx
const Input = ({className}) => (
  <div
    className={classNames({
      "form-group": true,
      "disabled": disabled,
      [className]: true,
    })}
  >
    <input type="text" disabled={disabled} />
  </div>
)

const App = () => {
  return <Input className="margin-bottom" disabled />
}
```

```html
<div class="form-group-20202 disabled-20202 margin-bottom">
  <input type="text" disabled />
</div>
```

### Local classes, dynamic classes, global classes and classNames from the parent

```jsx
const Input = ({className}) => (
  <div
    className={classNames({
      "form-group margin-bottom": true,
      "disabled": disabled,
      [className]: true,
    })}
  >
    <input className={className('input margin-bottom')} type="text" disabled={disabled} />
  </div>
)

const App = () => {
  return <Input className="box-shadow" disabled />
}
```

```html
<div class="form-group-20202 margin-bottom disabled-20202 box-shadow">
  <input type="text" disabled />
</div>
```


## Contributing

Before contributing read [the guidelines](.github/CONTRIBUTING.md) to submit a PR and what to do to publish the package 
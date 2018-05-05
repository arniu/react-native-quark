# react-native-quark

An ART-based qrcode component for react-native

[![npm](https://img.shields.io/npm/v/react-native-quark.svg)](https://www.npmjs.com/package/react-native-quark)
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## Prerequisite

This library is based on [ART][art-library] and works on both Android and iOS platform.

[ART][art-library] has already been included in react-native, while not avaiable on iOS. Please follow the [document][manual-linking] to **link ART on iOS manually**.

[art-library]: https://github.com/facebook/react-native/tree/master/Libraries/ART
[manual-linking]: https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking

## Usage

* Install

```bash
npm i react-native-quark
```

* Use it

```jsx harmony
import React from 'react'
import Quark from 'react-native-quark'

const App = () => <Quark value="Quark，你好!" />
```

## License

[MIT](./LICENSE)

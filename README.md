# react-native-quark

[![npm][npm-badge]](https://www.npmjs.com/package/react-native-quark)
[![code style: standard][standard-badge]](https://standardjs.com)
[![code style: prettier][prettier-badge]](https://prettier.io/)

[npm-badge]: https://img.shields.io/npm/v/react-native-quark.svg
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg

An ART-based qrcode component for react-native, which is much **faster** than those based webview.

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

## Prop Types

|            Name | Type      | Default | Description                      |
| --------------: | --------- | ------- | -------------------------------- |
|            size | `?number` | 128     | size of the QRCode               |
|           value | `string`  | -       | QRCode content                   |
|           color | `?string` | -       | color of the QRCode              |
| backgroundColor | `?string` | -       | background color of the QRCode   |
|           style | `any`     | -       | style of `ART.Surface` component |

## Acknowledge

The word "QR Code" is registered trademark of [DENSO WAVE INCORPORATED][denso-wave].
And you can use it without any fee, according to [QR Code FAQ][qrcode-faq].

[denso-wave]: https://www.denso-wave.com/
[qrcode-faq]: http://www.qrcode.com/en/faq.html

## License

[MIT](./LICENSE)

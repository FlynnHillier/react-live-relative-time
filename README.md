<h1 align="center">Welcome to react-live-relative-time 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-live-relative-time" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-live-relative-time.svg">
  </a>
  <a href="https://github.com/FlynnHillier/react-live-relative-time/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/FlynnHillier/react-live-relative-time" />
  </a>
  <img alt="Downloads" src="https://img.shields.io/npm/d18m/react-live-relative-time.svg" />
</p>

> A react component that display's text that describes a given ms-epoch timestamp relative to the current moment, updated in real-time.

### 🏠 [Homepage](https://github.com/FlynnHillier/react-live-relative-time#readme)

## Install

```sh
npm i react-live-relative-time
```
## Usage

```tsx
import { LiveRelativeTime } from "react-live-relative-time"

export default function Component() {
  return (
    <LiveRelativeTime timestamp={Date.now()}>
  )
}
```

## Example

```tsx
import "./App.css";

import { LiveRelativeTime } from "react-live-relative-time";

export default function App() {
  return (
    <div>
      <span>now</span>
      <LiveRelativeTime timestamp={Date.now()} />

      <span>+ 5 seconds</span>
      <LiveRelativeTime timestamp={Date.now() + 5000} />

      <span>+ 1 minute, 5 seconds</span>
      <LiveRelativeTime timestamp={Date.now() + 65000} />

      <span>- 55 seconds</span>
      <LiveRelativeTime timestamp={Date.now() - 55000} />

      <span>- 1 hour </span>
      <LiveRelativeTime timestamp={Date.now() - 3600000} />

      <span>- 59 minutes, 55 seconds </span>
      <LiveRelativeTime timestamp={Date.now() - 3595000} />

      <span>- 3 months</span>
      <LiveRelativeTime timestamp={Date.now() - 2629746000 * 3} />

      <span>2020</span>
      <LiveRelativeTime timestamp={1577836800000} />
    </div>
  );
}
```

![gif](https://github.com/FlynnHillier/react-live-relative-time/assets/48843724/26607fe4-b833-49e4-a1dc-b5740a6b45dd)

## Behaviour

The description provided will always reference the timestamp using the largest possible unit, given the amount of time between now and the provided timestamp.

The units used are:
- second
- minute
- hour
- day
- week
- month
- year


## Author

👤 **flynnhillier**

- Github: [@FlynnHillier](https://github.com/FlynnHillier)
- LinkedIn: [@flynn-hillier](https://linkedin.com/in/flynn-hillier)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/FlynnHillier/react-live-relative-time/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [flynnhillier](https://github.com/FlynnHillier).<br />
This project is [MIT](https://github.com/FlynnHillier/react-live-relative-time/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

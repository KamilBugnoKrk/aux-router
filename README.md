# aux-router

> React router that supports rendering of multiple independent (auxiliary) routes.

[![NPM](https://img.shields.io/npm/v/aux-router.svg)](https://www.npmjs.com/package/aux-router)

## Install

```bash
npm install --save aux-router
```

## Documentation

### AuxRouter

It is a core component. All other aux-router components should be inside AuxRouter element.

```js
import React from 'react'
import { AuxRouter } from 'aux-router'

const App = () => {
  return <AuxRouter>...</AuxRouter>
}

export default App
```

### AuxRoute

It is a route matcher. The AuxRoute that matches the current URL will rendered.

```js
import React from 'react'
import { AuxRouter, AuxRoute } from 'aux-router'

function ComponentA() {
  return (...)
}

function ComponentB() {
  return (...)
}

const App = () => {
  return (
    <AuxRouter>
        {/*
            ComponentA is rendered
            only when URL contains
            (componentA/...)
        */}
        <AuxRoute
            componentName='componentA'
            component={ComponentA}
        />

        {/*
            ComponentB is rendered
            only when URL contains
            (componentB/one)
        */}
        <AuxRoute
            componentName='componentB'
            componentValue='one'
            component={ComponentB}
        />
    </AuxRouter>)
}

export default App
```

- `componentName` - name of the component, the component will be rendered when the current path contains _(name/...)_. You don't have to specify it if the AuxRoute is within a component that already uses AuxRoute
- `componentValue` - value the component, the component will be rendered when the current path contains _(.../value)_
- `component` - component to render

### AuxLink

It is a component that is responsible for creating links in your application.

```js
import React from 'react'
import { AuxLink } from 'aux-router'

const MyNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          {/*
                It creates a link to (componentA/one)
            */}
          <AuxLink
            componentName='componentA'
            componentValue='one'
            description='Component A - one'
          />
        </li>
      </ul>
    </nav>
  )
}

export default App
```

- `componentName` - it is translated to a link that contains _(name/...)_. You don't have to specify it if the link is within a component that uses AuxRoute
- `componentValue` - it is translated to a link that contains _(.../value)_
- `description` - description of the link

### Example

[CodesAndBox](https://codesandbox.io/s/aux-router-example-kmrjy?file=/src/App.js)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT © [KamilBugnoKrk](https://github.com/KamilBugnoKrk)

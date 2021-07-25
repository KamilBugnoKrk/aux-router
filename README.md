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

### AuxHashRouter

It is a core component. All other aux-router components should be inside AuxRouter element.

```js
import React from 'react'
import { AuxHashRouter } from 'aux-router'

const App = () => {
  return <AuxHashRouter>...</AuxHashRouter>
}

export default App
```

### Aux path vs. main path

Since the rest of components use terms _aux path_ and _main path_ it is important to understand the difference between them. Let's assume that we have this URL: example.com/a(b/c), the main path is `/a` and the aux path is `(b/c)`.

### AuxRoute

It is a route matcher. The AuxRoute that matches the current aux path will rendered.

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

- `componentName` - name of the component, the component will be rendered when the current aux path contains _(name/...)_
- `componentValue` - value the component, the component will be rendered when the current aux path contains _(.../value)_
- `component` - component to render

### AuxLink

It is a component that is responsible for creating links for aux path in your application.

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

- `componentName` - it is translated to a link that contains _(name/...)_
- `componentValue` - it is translated to a link that contains _(.../value)_
- `description` - description of the link
- `activeClassName` - css class that will be applied when the current aux path matches the (name/value)

### AuxMainRoute

It is a route matcher. The AuxMainRoute that matches the current main path will rendered.

```js
import React from 'react'
import { AuxRouter, AuxMainRoute } from 'aux-router'

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
            /a as a main path
        */}
        <AuxMainRoute
            path='/a'
            component={ComponentA}
        />

        {/*
            ComponentB is rendered
            only when URL contains
            /b as a main path
        */}
        <AuxMainRoute path='/b'>
          <ComponentB />
        </AuxMainRoute>
        />
    </AuxRouter>)
}

export default App
```

- `component` - the component, that will be rendered when the current main path matches to the _path_ property
- `path` - the main path

### AuxMainLink

It is a component that is responsible for creating links for main path in your application.

```js
import React from 'react'
import { AuxMainLink } from 'aux-router'

const MyNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          {/*
                It creates a link to /a
            */}
          <AuxMainLink
            activeClassName='selected'
            path='/a'
            description='Go to component a'
          />
        </li>
      </ul>
    </nav>
  )
}

export default App
```

- `activeClassName` - css class that will be applied when the current main path matches the _path_ property
- `activeStyle` - css style that will be applied when the current main path matches the _path_ property
- `description` - description of the link
- `path` - it is translated to a link that contains \_/value in the main path

### Example

[CodesAndBox](https://codesandbox.io/s/advanced-example-bf9vt?file=/src/App.tsx)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT © [KamilBugnoKrk](https://github.com/KamilBugnoKrk)

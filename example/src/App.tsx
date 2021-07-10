import React from 'react'
import { AuxLink, AuxRouter, AuxRoute } from 'aux-router'

function One() {
  return <p>One</p>
}

function Two() {
  return <p>Two</p>
}

function ComponentA() {
  return (
    <>
      <h2>Component A</h2>
      <nav>
        <ul>
          <li>
            <AuxLink
              componentName='componentA'
              componentValue='one'
              description='Component A - one'
            />
          </li>
          <li>
            <AuxLink
              componentName='componentA'
              componentValue='two'
              description='Component A - two'
            />
          </li>
        </ul>
      </nav>
      <AuxRoute
        componentName='componentA'
        componentValue='one'
        component={One}
      />
      <AuxRoute
        componentName='componentA'
        componentValue='two'
        component={Two}
      />
    </>
  )
}

function ComponentB() {
  return (
    <>
      <h2>Component B</h2>
      <nav>
        <ul>
          <li>
            <AuxLink componentValue='one' description='Component B - one' />
          </li>
          <li>
            <AuxLink componentValue='two' description='Component B - two' />
          </li>
        </ul>
      </nav>
      <AuxRoute componentValue='one' component={One} />
      <AuxRoute componentValue='two' component={Two} />
    </>
  )
}

const App = () => {
  return (
    <AuxRouter>
      <ComponentA />
      <AuxLink componentName='componentB' description='Show Component B' />
      <AuxRoute componentName='componentB' component={ComponentB} />
    </AuxRouter>
  )
}

export default App

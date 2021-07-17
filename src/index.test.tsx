import React from 'react'
import renderer from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import { AuxLink, AuxRoute } from './index'
import { Router } from 'react-router-dom'

it('AuxLink renders correctly', () => {
  const history = createMemoryHistory()
  const tree = renderer
    .create(
      <Router history={history}>
        <AuxLink
          componentName='componentA'
          componentValue='one'
          description='Component A - one'
        />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('AuxRoute does not render when path is empty', () => {
  const history = createMemoryHistory()

  function One() {
    return <p>One</p>
  }

  const tree = renderer
    .create(
      <Router history={history}>
        <AuxRoute
          componentName='componentA'
          componentValue='one'
          component={One}
        />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('AuxRoute renders when path contains correct data', () => {
  const history = createMemoryHistory()
  const route = '/(componentA/one)'
  history.push(route)

  function One() {
    return <p>One</p>
  }

  const tree = renderer
    .create(
      <Router history={history}>
        <AuxRoute
          componentName='componentA'
          componentValue='one'
          component={One}
        />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('AuxRoute renders nested component when path contains correct data', () => {
  const history = createMemoryHistory()
  const route = '/(componentA/one)'
  history.push(route)

  function Two() {
    return <p>Two</p>
  }

  function One() {
    return (
      <>
        <p>One</p>
        <AuxRoute componentValue='one' component={Two} />
      </>
    )
  }

  const tree = renderer
    .create(
      <Router history={history}>
        <AuxRoute componentName='componentA' component={One} />
        <AuxRoute
          componentName='componentB'
          componentValue='two'
          component={Two}
        />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('AuxRoute renders nested component when path contains several independent routes', () => {
  const history = createMemoryHistory()
  const route = '/(componentB/two)'
  history.push(route)

  function Two() {
    return <p>Two</p>
  }

  function One() {
    return (
      <>
        <p>One</p>
        <AuxRoute componentValue='one' component={Two} />
      </>
    )
  }

  const tree = renderer
    .create(
      <Router history={history}>
        <AuxRoute componentName='componentA' component={One} />
        <AuxRoute
          componentName='componentB'
          componentValue='two'
          component={Two}
        />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import { AuxLink, AuxRoute, AuxMainLink, AuxMainRoute } from './index'
import Animals, { Type } from './../example/src/Animals'
import { Cats, Dogs } from './../example/src/MockedData'
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

const advancedExample = (
  <>
    <nav>
      <AuxMainLink path='/cats' description='Cats' />
      <AuxMainLink path='/dogs' description='Dogs' />
    </nav>
    <AuxMainRoute path='/cats'>
      <Animals type={Type.Modal} animals={Cats} name='Cats' />
    </AuxMainRoute>
    <AuxMainRoute path='/dogs'>
      <Animals type={Type.Panel} animals={Dogs} name='Dogs' />
    </AuxMainRoute>
    {Dogs.map((animal, index) => {
      return (
        <AuxRoute componentName='panel' componentValue={animal.name}>
          <div key={`${animal.name}-${index}`}>
            <div className='panel'>
              <img src={animal.image} alt={animal.name} />
              <p>Name: {animal.name}</p>
              <p>Age: {animal.age}</p>
              <AuxLink componentName='panel' description='Close' />
            </div>
          </div>
        </AuxRoute>
      )
    })}
    {Cats.map((animal, index) => {
      return (
        <AuxRoute componentName='modal' componentValue={animal.name}>
          <div key={`${animal.name}-${index}`}>
            <div className='modal'>
              <img src={animal.image} alt={animal.name} />
              <p>Name: {animal.name}</p>
              <p>Age: {animal.age}</p>
              <AuxLink componentName='modal' description='Close' />
            </div>
          </div>
        </AuxRoute>
      )
    })}
  </>
)

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/Bella)(panel/)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/dogs(modal/Bella)(panel/)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/dogs(modal/)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/dogs'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/cats'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/Kitty)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example', () => {
  const history = createMemoryHistory()
  const route = '/dogs(modal/Kitty)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

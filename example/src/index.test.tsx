import React from 'react'
import renderer from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import { AuxLink, AuxRoute, AuxMainLink, AuxMainRoute } from './../../src/index'
import Animals, { Type } from './Animals'
import { Cats, Dogs, Parrots } from './MockedData'
import { Router } from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Modal from '@material-ui/core/Modal'
import Birds from './Birds'

const advancedExample = (
  <>
    <nav>
      <AuxMainLink activeClassName='selected' path='/cats' description='Cats' />
      <AuxMainLink activeClassName='selected' path='/dogs' description='Dogs' />
      <AuxMainLink
        activeClassName='selected'
        path='/birds'
        description='Birds'
      />
    </nav>
    <AuxMainRoute path='/cats'>
      <Animals type={Type.Cat} animals={Cats} name='Cats' />
    </AuxMainRoute>
    <AuxMainRoute path='/dogs'>
      <Animals type={Type.Dog} animals={Dogs} name='Dogs' />
    </AuxMainRoute>
    <AuxMainRoute path='/birds' component={Birds} />
    {Dogs.map((animal, index) => {
      return (
        <AuxRoute componentName='panel-dog' componentValue={animal.name}>
          <SwipeableDrawer
            anchor='right'
            variant='persistent'
            open={true}
            onClose={() => {}}
            onOpen={() => {}}
            key={`${animal.name}-${index}`}
          >
            <div className='panel'>
              <img src={animal.image} alt={animal.name} />
              <p>Name: {animal.name}</p>
              <p>Age: {animal.age}</p>
              <AuxLink componentName='panel-dog' description='Close' />
            </div>
          </SwipeableDrawer>
        </AuxRoute>
      )
    })}
    {Parrots.map((animal, index) => {
      return (
        <AuxRoute componentName='panel-parrot' componentValue={animal.name}>
          <SwipeableDrawer
            anchor='bottom'
            variant='persistent'
            open={true}
            onClose={() => {}}
            onOpen={() => {}}
            key={`${animal.name}-${index}`}
          >
            <div className='panel'>
              <img src={animal.image} alt={animal.name} />
              <p>Name: {animal.name}</p>
              <p>Age: {animal.age}</p>
              <AuxLink componentName='panel-parrot' description='Close' />
            </div>
          </SwipeableDrawer>
        </AuxRoute>
      )
    })}
    {Cats.map((animal, index) => {
      return (
        <AuxRoute componentName='modal-cat' componentValue={animal.name}>
          <Modal open={true} onClose={() => {}} key={`${animal.name}-${index}`}>
            <div className='modal'>
              <img src={animal.image} alt={animal.name} />
              <p>Name: {animal.name}</p>
              <p>Age: {animal.age}</p>
              <AuxLink componentName='modal-cat' description='Close' />
            </div>
          </Modal>
        </AuxRoute>
      )
    })}
  </>
)

it('Advanced example /cats(modal/)(panel/Bean)', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /cats(modal/)(panel/Bean)', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /cats(modal/Bella)(panel/)', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/Bella)(panel/)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /dogs(modal/Bella)(panel/)', () => {
  const history = createMemoryHistory()
  const route = '/dogs(modal/Bella)(panel/)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /dogs(modal/)(panel/Bean)', () => {
  const history = createMemoryHistory()
  const route = '/dogs(modal/)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /dogs', () => {
  const history = createMemoryHistory()
  const route = '/dogs'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /cats', () => {
  const history = createMemoryHistory()
  const route = '/cats'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /cats(modal/Kitty)(panel/Bean)', () => {
  const history = createMemoryHistory()
  const route = '/cats(modal/Kitty)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /dogs(modal/Kitty)(panel/Bean)', () => {
  const history = createMemoryHistory()
  const route = '/dogs(modal/Kitty)(panel/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /birds', () => {
  const history = createMemoryHistory()
  const route = '/birds'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /birds/parrots', () => {
  const history = createMemoryHistory()
  const route = '/birds/parrots'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /birds/parrots', () => {
  const history = createMemoryHistory()
  const route = '/birds/parrots'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /birds/parrots(panel-parrot/Dakota)', () => {
  const history = createMemoryHistory()
  const route = '/birds/parrots(panel-parrot/Dakota)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /dogs(panel-parrot/Dakota)', () => {
  const history = createMemoryHistory()
  const route = '/dogs(panel-parrot/Dakota)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /cats(panel-parrot/Dakota)', () => {
  const history = createMemoryHistory()
  const route = '/cats(panel-parrot/Dakota)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Advanced example /birds/parrots(panel-parrot/Ollie)(modal-cat/)(panel-dog/Bean)', () => {
  const history = createMemoryHistory()
  const route = '/birds/parrots(panel-parrot/Ollie)(modal-cat/)(panel-dog/Bean)'
  history.push(route)

  const tree = renderer
    .create(<Router history={history}>{advancedExample}</Router>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

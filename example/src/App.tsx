import React from 'react'
import {
  AuxRouter,
  AuxMainRoute,
  AuxMainLink,
  AuxRoute,
  AuxLink
} from 'aux-router'
import Animals, { Type } from './Animals'
import { Cats, Dogs, Parrots } from './MockedData'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Modal from '@material-ui/core/Modal'
import Birds from './Birds'

const App = () => {
  return (
    <AuxRouter>
      <nav>
        <AuxMainLink
          activeClassName='selected'
          path='/cats'
          description='Cats'
        />
        <AuxMainLink
          activeClassName='selected'
          path='/dogs'
          description='Dogs'
        />
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
            <Modal
              open={true}
              onClose={() => {}}
              key={`${animal.name}-${index}`}
            >
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
    </AuxRouter>
  )
}

export default App

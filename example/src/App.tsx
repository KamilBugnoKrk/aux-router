import React from 'react'
import {
  AuxRouter,
  AuxMainRoute,
  AuxMainLink,
  AuxRoute,
  AuxLink
} from 'aux-router'
import Animals, { Type } from './Animals'
import { Cats, Dogs } from './MockedData'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Modal from '@material-ui/core/Modal'

const App = () => {
  return (
    <AuxRouter>
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
      {Dogs.map((animal) => {
        return (
          <AuxRoute componentName='panel' componentValue={animal.name}>
            <SwipeableDrawer
              anchor='right'
              variant='persistent'
              open={true}
              onClose={() => {}}
              onOpen={() => {}}
            >
              <div className='panel'>
                <img src={animal.image} alt={animal.name} />
                <p>Name: {animal.name}</p>
                <p>Age: {animal.age}</p>
                <AuxLink componentName='panel' description='Close' />
              </div>
            </SwipeableDrawer>
          </AuxRoute>
        )
      })}
      {Cats.map((animal) => {
        return (
          <AuxRoute componentName='modal' componentValue={animal.name}>
            <Modal open={true} onClose={() => {}}>
              <div className='modal'>
                <img src={animal.image} alt={animal.name} />
                <p>Name: {animal.name}</p>
                <p>Age: {animal.age}</p>
                <AuxLink componentName='modal' description='Close' />
              </div>
            </Modal>
          </AuxRoute>
        )
      })}
    </AuxRouter>
  )
}

export default App

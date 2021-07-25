import React from 'react'
import {
  AuxHashRouter,
  AuxMainRoute,
  AuxMainLink,
  AuxRoute,
  AuxLink
} from 'aux-router'
import Animals, { Type } from './Animals'
import { Cats, Dogs, Owls, Parrots } from './MockedData'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Modal from '@material-ui/core/Modal'
import Birds from './Birds'

const App = () => {
  return (
    <AuxHashRouter>
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
                <div className='links'>
                  <AuxLink
                    activeClassName='selected'
                    componentName='panel-dog'
                    componentValue={`${animal.name}`}
                    description='Details of dog'
                  />
                  <AuxLink
                    activeClassName='selected'
                    componentName='panel-dog'
                    componentValue={`${animal.name}/${animal.name}-food`}
                    description='Favourite dog`s food'
                  />
                  <AuxLink
                    activeClassName='selected'
                    componentName='panel-dog'
                    componentValue={`${animal.name}/${animal.name}-owner`}
                    description='Details of owner'
                  />
                </div>
                <AuxRoute
                  componentName='panel-dog'
                  componentExactValue={animal.name}
                >
                  <p>Name: {animal.name}</p>
                  <p>Age: {animal.age}</p>
                </AuxRoute>
                <AuxRoute
                  componentName='panel-dog'
                  componentValue={`${animal.name}/${animal.name}-owner`}
                >
                  <p>Name of the owner: {animal.owner?.name}</p>
                  <p>Age of the owner: {animal.owner?.age}</p>
                </AuxRoute>
                <AuxRoute
                  componentName='panel-dog'
                  componentValue={`${animal.name}/${animal.name}-food`}
                >
                  <p className='food'>
                    {animal.name}'s favourite food:{' '}
                    {animal.food?.map((f, index) => {
                      var delimiter =
                        index !== animal.food!.length - 1 ? ', ' : ''
                      return (
                        <span key={`${f.name}-${index}`}>
                          {f.name + delimiter}
                        </span>
                      )
                    })}
                  </p>
                </AuxRoute>
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
                <div className='links'>
                  <AuxLink
                    activeClassName='selected'
                    componentName='modal-cat'
                    componentValue={`${animal.name}`}
                    description='Details of cat'
                  />
                  <AuxLink
                    activeClassName='selected'
                    componentName='modal-cat'
                    componentValue={`${animal.name}/${animal.name}-food`}
                    description='Favourite cat`s food'
                  />
                  <AuxLink
                    activeClassName='selected'
                    componentName='modal-cat'
                    componentValue={`${animal.name}/${animal.name}-owner`}
                    description='Details of owner'
                  />
                </div>
                <AuxRoute
                  componentName='modal-cat'
                  componentExactValue={animal.name}
                >
                  <p>Name: {animal.name}</p>
                  <p>Age: {animal.age}</p>
                </AuxRoute>
                <AuxRoute
                  componentName='modal-cat'
                  componentValue={`${animal.name}/${animal.name}-owner`}
                >
                  <p>Name of the owner: {animal.owner?.name}</p>
                  <p>Age of the owner: {animal.owner?.age}</p>
                </AuxRoute>
                <AuxRoute
                  componentName='modal-cat'
                  componentValue={`${animal.name}/${animal.name}-food`}
                >
                  <p className='food'>
                    {animal.name}'s favourite food:{' '}
                    {animal.food?.map((f, index) => {
                      var delimiter =
                        index !== animal.food!.length - 1 ? ', ' : ''
                      return <span>{f.name + delimiter}</span>
                    })}
                  </p>
                </AuxRoute>
                <AuxLink componentName='modal-cat' description='Close' />
              </div>
            </Modal>
          </AuxRoute>
        )
      })}
      {Owls.map((animal, index) => {
        return (
          <AuxRoute componentName='modal-owl' componentValue={animal.name}>
            <Modal
              open={true}
              onClose={() => {}}
              key={`${animal.name}-${index}`}
            >
              <div className='modal'>
                <img src={animal.image} alt={animal.name} />
                <p>Name: {animal.name}</p>
                <p>Age: {animal.age}</p>
                <AuxLink componentName='modal-owl' description='Close' />
              </div>
            </Modal>
          </AuxRoute>
        )
      })}
    </AuxHashRouter>
  )
}

export default App

import React from 'react'
import { AuxMainLink, AuxMainRoute } from 'aux-router'
import Animals, { Type } from './Animals'
import { Owls, Parrots } from './MockedData'

const Birds = () => {
  return (
    <div>
      <h2>Choose a type of birds:</h2>
      <AuxMainLink
        activeClassName='selected'
        path='birds/parrots'
        description='Parrots'
      />
      <AuxMainLink
        activeClassName='selected'
        path='birds/owls'
        description='Owls'
      />
      <AuxMainRoute path='birds/parrots'>
        <Animals type={Type.Parrot} animals={Parrots} name='Parrots' />
      </AuxMainRoute>
      <AuxMainRoute path='birds/owls'>
        <Animals type={Type.Owl} animals={Owls} name='Owls' />
      </AuxMainRoute>
    </div>
  )
}

export default Birds

import React from 'react'
import { AuxMainLink, AuxMainRoute } from 'aux-router'
import Animals, { Type } from './Animals'
import { Parrots } from './MockedData'

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
        path='birds/others'
        description='Others'
      />
      <AuxMainRoute path='birds/parrots'>
        <Animals type={Type.Parrot} animals={Parrots} name='Parrots' />
      </AuxMainRoute>
      <AuxMainRoute path='birds/others'>
        <h3>Others.</h3>
      </AuxMainRoute>
    </div>
  )
}

export default Birds

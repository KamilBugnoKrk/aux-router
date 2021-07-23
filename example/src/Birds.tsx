import React from 'react'
import { AuxMainLink, AuxMainRoute } from 'aux-router'

const Birds = () => {
  return (
    <div>
      <h2>Choose a type of birds:</h2>
      <ul>
        <li>
          <AuxMainLink path='birds/parrots' description='Parrots' />
        </li>
        <li>
          <AuxMainLink path='birds/others' description='Others' />
        </li>
      </ul>

      <AuxMainRoute path='birds/parrots'>
        <h3>Parrots.</h3>
      </AuxMainRoute>
      <AuxMainRoute path='birds/others'>
        <h3>Others.</h3>
      </AuxMainRoute>
    </div>
  )
}

export default Birds

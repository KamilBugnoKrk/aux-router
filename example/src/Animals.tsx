import React from 'react'
import { AuxLink } from 'aux-router'
import { Animal } from './Models'

export enum Type {
  Panel,
  Modal
}

interface AnimalsProps {
  name: string
  animals: Animal[]
  type: Type
}

const Animals = (props: AnimalsProps) => {
  return (
    <section>
      <h1>{props.name}</h1>
      <ul>
        {props.animals.map((animal, index) => {
          return (
            <li key={`${index}${animal.name}`}>
              <img alt={animal.name} src={animal.image} />
              <div>
                <h2>{animal.name}</h2>
                {props.type === Type.Modal && (
                  <AuxLink
                    componentName='modal'
                    componentValue={animal.name}
                    description='Open modal'
                  />
                )}
                {props.type === Type.Panel && (
                  <AuxLink
                    componentName='panel'
                    componentValue={animal.name}
                    description='Open panel'
                  />
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Animals

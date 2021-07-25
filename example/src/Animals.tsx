import React from 'react'
import { AuxLink } from 'aux-router'
import { Animal } from './Models'

export enum Type {
  Cat,
  Dog,
  Parrot,
  Owl
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
                {props.type === Type.Cat && (
                  <AuxLink
                    componentName='modal-cat'
                    componentValue={animal.name}
                    description='Open modal'
                  />
                )}
                {props.type === Type.Dog && (
                  <AuxLink
                    componentName='panel-dog'
                    componentValue={animal.name}
                    description='Open panel'
                  />
                )}
                {props.type === Type.Parrot && (
                  <AuxLink
                    componentName='panel-parrot'
                    componentValue={animal.name}
                    description='Open panel'
                  />
                )}
                {props.type === Type.Owl && (
                  <AuxLink
                    componentName='modal-owl'
                    componentValue={animal.name}
                    description='Open modal'
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

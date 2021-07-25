export interface Owner {
  name: string
  age: number
}

export interface Food {
  name: string
}

export interface Animal {
  name: string
  age: number
  image: string
  owner?: Owner
  food?: Food[]
}

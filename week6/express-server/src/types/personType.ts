export type Person = {
  id: number
  name: string
  age: number
  city: string
}

export type PersonNoID = {
  id?: number
  name: string
  age: number
  city: string
}

export type PersonIncomplete = {
  id: number
  name?: string
  age?: number
  city?: string
}

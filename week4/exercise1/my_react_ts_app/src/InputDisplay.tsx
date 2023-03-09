import React from 'react'

interface Props {state: string}

export default function InputDisplay({state}: Props) {
  return (
    <p>{state}</p>
  )
}
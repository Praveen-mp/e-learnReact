import React from 'react'
import { people } from './DataScience'
export default function ImageUrl(person) {
  return (
    'https://i.imgur.com/' +
       person.imageId +
        's.jpg'
  )
}

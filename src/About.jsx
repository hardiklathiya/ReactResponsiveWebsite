import React from 'react'
import Common from './Common';
import img from '../src/images/image2.svg';
export default function About() {
  return (
    <Common name="Welcome to About Page" imgsrc={img} visit="./contact" button="Contact Now"/>
  )
}

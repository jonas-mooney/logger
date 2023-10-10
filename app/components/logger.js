'use client'
import React from 'react'
import log from '../../public/log.png'
import Image from 'next/image'

const Logger = () => {
  const loggit = () => {
    console.log('The log has been logged 🪵🤓');
  };
  return (
    <Image
    src={log}
    width={500}
    height={500}
    alt="Picture of the author"
    onClick={loggit}
  />
  )
}

export default Logger
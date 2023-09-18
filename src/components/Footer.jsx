import React from 'react'

const Footer = ({isSticky}) => {
  return (
    <div className='max-w-sm mx-auto flex justify-center'>
      <p className={`absolute ${isSticky ? 'sticky mt-4 bottom-4' : 'static bottom-4'}  text-xs`}>Copyright ©️ 2023 Created by <span className='font-bold'><a href='https://t.me/yumakai'>Yumakameow Lukaszempaiz</a></span></p>
    </div>
  )
}

export default Footer

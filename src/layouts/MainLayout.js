'use client';

import Header from '@/components/Header'
import React, { Children } from 'react'

const MainLayout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    
    </>
  )
}

export default MainLayout
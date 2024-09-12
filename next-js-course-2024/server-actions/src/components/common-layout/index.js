"use client"

import UserState from '@/context'
import React from 'react'

export default function CommonLayout({children}) {
  return <UserState> {children} </UserState>
}


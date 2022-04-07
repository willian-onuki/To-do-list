import React from 'react';
import { StatusBar } from 'react-native'
import { Home } from './src/pages/Home';

// The StatusBar is used to devices like Iphone X that has a space on upper right and left connor, and modify the status bar color to not be the same color with app background

export default function App() {
  return (
    <>
      <StatusBar barStyle="default"></StatusBar> 
      <Home />
    </>
  )
}
import React from 'react'
import UiHeader from './UiHeader'
import UiFooter from './UiFooter'
import { Outlet } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton';

const UiLayout = () => {
  return (
    <>
    <SkeletonTheme
    duration={2}
     baseColor="#e9e9e9" highlightColor="#d7d7d7">
    <main>
        <Outlet />
    </main>
    <UiFooter/>
    </SkeletonTheme>

    </>
  )
}

export default UiLayout
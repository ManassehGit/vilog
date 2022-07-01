import React from 'react'
import MainWrapper from '../mainwrapper/mainwrapper'
import SideNav from '../sidenav/sidenav'
import DashWrapper from '../dashwrapper/dashwrapper'
import DashContent from '../dashcontent/dashcontent'

import TopNav from '../topnav/topnav'
import DashContainer from '../dashcontainer/dashcontainer'
import PageTop from '../pagetop/pagetop'

import DashFooter from '../dashfooter/dashfooter'


const BaseDashboard = (props) => {
  return (
    <div>
        <MainWrapper>
            <SideNav />
            <DashWrapper>
                <DashContent>
                    <TopNav />
                    <DashContainer>
                        {props.children}
                    </DashContainer>
                </DashContent>
                <DashFooter />
            </DashWrapper>
            <PageTop />
        </MainWrapper>
    </div>
  )
}

export default BaseDashboard
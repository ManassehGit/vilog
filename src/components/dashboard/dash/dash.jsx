import React from 'react'
import MainWrapper from '../mainwrapper/mainwrapper'
import SideNav from '../sidenav/sidenav'
import DashWrapper from '../dashwrapper/dashwrapper'
import DashContent from '../dashcontent/dashcontent'

import TopNav from '../topnav/topnav'
import DashContainer from '../dashcontainer/dashcontainer'
import PageTop from '../pagetop/pagetop'
import InfoCard from '../infocard/infocard'
import InfoRow from '../inforow/inforow'

import LoginsGraph from '../loginsgraph/loginsgraph'
import LoginsPie from '../loginspie/loginspie'
import DashFooter from '../dashfooter/dashfooter'



const Dash = () => {
  return (
    <div>
        <MainWrapper>
            <SideNav />
            <DashWrapper>
                <DashContent>
                    <TopNav />
                    <DashContainer>
                        <PageTop />
                        <InfoRow>
                            <InfoCard />
                        </InfoRow>
                        <InfoRow>
                            <LoginsGraph />
                            <LoginsPie />
                        </InfoRow>
                    </DashContainer>
                </DashContent>
                <DashFooter />
            </DashWrapper>
            <PageTop />
        </MainWrapper>
    </div>
  )
}

export default Dash
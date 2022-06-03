import React from 'react'
import { IconBase } from 'react-icons'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
          <CloseIcon/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to='about'>About</SidebarLink>
              <SidebarLink to='discover'>Discover</SidebarLink>
              <SidebarLink to='tool'>Tool</SidebarLink>
              <SidebarLink to='services'>Services</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to='/signin'>Signin</SidebarRoute>
          </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

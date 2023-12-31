import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import Icon from '../images/cryptocurrency.png'
import { useState, useEffect } from 'react'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={Icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme='dark' mode='vertical'>
          <Menu.Item>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar

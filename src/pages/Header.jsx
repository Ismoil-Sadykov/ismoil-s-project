import logo from '../assets/Лого (1).png'
import telegram from '../assets/Telegram (1).png'
import whatsapp from '../assets/Whatsapp (1).png'
import viber from '../assets/вайбер (1).png'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ModeToggle } from '@/components/mode-toggle'
import { InboxIcon, MailIcon, Menu } from 'lucide-react'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import { menuItems } from '@/components/menuItems'

export default function Header() {
  let { t, i18n } = useTranslation()
  let [open, setOpen] = useState(false)
  let navigate = useNavigate()

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path); // переход на страницу
                setOpen(false);      // закрываем Drawer
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <header className='p-5'>
      <div className='flex justify-between items-center'>
        <Menu color="#CB8734" className='md:hidden block cursor-pointer' onClick={toggleDrawer(true)} />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <img src={logo} alt="" className='w-[171px] md:w-auto' />
        <p className='hidden md:block text-[13px] font-semibold w-[255px]'>{t('Header.name')}</p>
        <div className='hidden md:block'>
          <p className='text-[12px] font-semibold'>{t('Header.contact')}</p>
          <div className='flex gap-[4px]'>
            <img src={telegram} alt="" className='w-[20px] h-[20px]' />
            <img src={whatsapp} alt="" className='w-[20px] h-[20px]' />
            <img src={viber} alt="" className='w-[20px] h-[20px]' />
          </div>
        </div>
        <div className='hidden md:block'>
          <p className='font-bold text-[20px]'>+3 80 (67) 175 56 30</p>
          <p className='text-[12px]'>{t('Header.date')}</p>
        </div>
        <div className='hidden md:block'>
          <button className='bg-[#F39C32] text-white text-[13px] font-bold px-7 py-3 rounded-[4px]'>{t('Header.call')}</button>
          <p className='text-[11px]'>{t('Header.aboutUk')}</p>
        </div>
        <select onChange={(e) => TranslateClick(e.target.value)} value={i18n.language} className='hidden md:block'>
          <option value="ru">RUS</option>
          <option value="tj">TAJ</option>
          <option value="en">ENG</option>
        </select>
        <ModeToggle />
      </div>
      <div className='hidden md:flex items-center mt-[30px] justify-between'>
        <div className='bg-[#3D1E19] w-[600px] h-[72px] text-white flex justify-around rounded-[8px]'>
          <button className='border-r pr-[40px] cursor-pointer text-[16px] font-bold'><Link to="/">{t('Header.category')}</Link></button>
          <button className='cursor-pointer text-[16px] font-bold'><Link to="/catalog">{t('Header.comersial')}</Link></button>
          <button className='border-l pl-[40px] cursor-pointer text-[16px] font-bold'>{t('Header.garden')}</button>
        </div>
        <Link to="/about"><p className='text-[16px] font-bold'>{t('Header.about')}</p></Link>
        <p className='text-[16px] font-bold'>{t('Header.works')}</p>
        <Link to="/contact"><p className='text-[16px] font-bold'>{t('Header.contacts')}</p></Link>
      </div>
    </header>
  )
}

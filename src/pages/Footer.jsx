import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from '../assets/Лого (1).png'
import telegram from '../assets/Telegram (1).png'
import whatsapp from '../assets/Whatsapp (1).png'
import viber from '../assets/вайбер (1).png'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";


export default function Footer() {
  let { t } = useTranslation()

  return (
    <footer className="mt-[100px] p-5">
      <div className='hidden md:flex items-center mt-[30px] justify-between'>
        <div className='bg-[#3D1E19] w-[600px] h-[72px] text-white flex justify-around rounded-[8px]'>
          <button className='border-r pr-[40px] cursor-pointer text-[16px] font-bold'><Link to="/catalog">{t('Header.category')}</Link></button>
          <button className='cursor-pointer text-[16px] font-bold'>{t('Header.comersial')}</button>
          <button className='border-l pl-[40px] cursor-pointer text-[16px] font-bold'>{t('Header.garden')}</button>
        </div>
        <Link to="/about"><p className='text-[16px] font-bold'>{t('Header.about')}</p></Link>
        <p className='text-[16px] font-bold'>{t('Header.works')}</p>
        <button className='bg-[#F39C32] text-white text-[13px] font-bold px-7 py-3 rounded-[4px]'>{t('Header.call')}</button>
      </div>
      <div className="flex justify-between mt-[50px] border-b border-black pb-[50px]">
        <div className="hidden md:block">
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_living.item1')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_living.item2')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_living.item3')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_living.item4')}</p>
        </div>
        <div className="hidden md:block">
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_commercial.item1')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_commercial.item2')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_commercial.item3')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_commercial.item4')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_commercial.item5')}</p>
        </div>
        <div className="hidden md:block">
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item1')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item2')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item3')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item4')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item5')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item6')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item7')}</p>
          <p className="w-[180px] text-[14px] mb-[12px]">{t('footer_garden.item8')}</p>
        </div>
        <div>
          <div className="md:flex gap-[28px] mb-[50px]">
            <img src={logo} alt="" className='w-[171px] md:w-auto' />
            <p className='text-[13px] font-semibold w-[255px]'>{t('Header.name')}</p>
          </div>
          <div className='mb-[40px]'>
            <p className='text-[12px] font-semibold'>{t('Header.contact')}</p>
            <div className='flex gap-[4px]'>
              <img src={telegram} alt="" className='w-[20px] h-[20px]' />
              <img src={whatsapp} alt="" className='w-[20px] h-[20px]' />
              <img src={viber} alt="" className='w-[20px] h-[20px]' />
            </div>
          </div>
          <div className="md:hidden block mb-[20px]">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Жилое</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">Коммерческое</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">Садовое</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
              <AccordionActions>
              </AccordionActions>
            </Accordion>
          </div>
          <div>
            <p className='font-bold text-[20px]'>+3 80 (67) 175 56 30</p>
            <p className='text-[12px]'>{t('Header.date')}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-[30px]">
        <p className="text-[#2B2A28] text-[13px]">{t('footer.company_info')}</p>
      </div>
    </footer>
  )
}

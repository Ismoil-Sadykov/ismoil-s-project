import photo1 from '../assets/Слайдер (2).png'
import first from '../assets/фон (3).png'
import second from '../assets/фото (3).png'
import third from '../assets/Посмотреть короткое видео о компании (2_42 мин).png'
import logo from '../assets/Group 43.png'
import { useTranslation } from 'react-i18next'
import Cards from '@/components/Cards'
import card1 from '../assets/Иконка (16).png'
import card2 from '../assets/Иконка (17).png'
import card3 from '../assets/Иконка (18).png'
import card4 from '../assets/Иконка (19).png'
import photo2 from '../assets/фото (12).png'
import photo3 from '../assets/Rectangle 325.png'
import photo4 from '../assets/фон (4).png'
import photo5 from '../assets/фон (5).png'
import photo6 from '../assets/фон (6).png'
import photo13 from '../assets/фото (6).png'
import photo14 from '../assets/фото (7).png'
import photo15 from '../assets/фото (8).png'

export default function About() {
  let { t } = useTranslation()

  return (
    <div className='p-5'>
      <p className='text-[24px] md:text-[36px] font-bold'>О компании</p>
      <div className='mb-[100px]'>
        <div className='flex flex-col-reverse md:flex-row items-center gap-[85px]'>
          <div>
            <p className='text-[16px] mb-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris nunc congue nisi vitae suscipit tellus mauris a. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.</p>
            <p className='text-[16px]'>Porta non pulvinar neque laoreet suspendisse interdum consectetur. Congue quisque egestas diam in arcu cursus euismod. Eget gravida cum sociis natoque penatibus et magnis. Sit amet justo donec enim diam vulputate ut. Elementum integer enim neque volutpat ac tincidunt vitae. Adipiscing at in tellus integer feugiat. Cursus eget nunc scelerisque viverra. </p>
          </div>
          <img src={photo1} alt="" />
        </div>
      </div>
      <div className='mt-[150px]'>
        <div>
          <img src={first} alt="" className="relative md:w-full w-[300px] h-[150px] md:h-auto" />
          <img src={second} alt="" className="absolute md:mt-[-480px] md:ml-[400px] md:w-auto w-[170px] mt-[-193px] ml-[45px]" />
          <img src={third} alt="" className="absolute md:mt-[-250px] md:ml-[650px] md:w-auto w-[100px] mt-[-130px] ml-[150px]" />
        </div>
        <div className="flex md:w-[570px] rounded-[8px] items-start gap-[22px] p-10 bg-white md:absolute md:mt-[-100px] md:ml-[350px]">
          <img src={logo} alt="" className="hidden md:block" />
          <div>
            <p className="text-[18px] text-center md:text-start md:text-[24px]">{t('company.quote_author')}</p>
            <p className="text-[14px] text-center md:text-start md:text-[16px]">{t('company.quote_text')}</p>
          </div>
        </div>
        <div className="mt-[100px] md:flex justify-around">
          <div className="w-[200px] text-center">
            <p className="text-[48px] text-[#CB8734] border-b border-[#CB8734] mb-[18px]">{t('company.stat_years')}</p>
            <p>{t('company.stat_years_desc')}</p>
          </div>
          <div className="w-[200px] text-center">
            <p className="text-[48px] text-[#CB8734] border-b border-[#CB8734] mb-[18px]">{t('company.stat_positions')}</p>
            <p>{t('company.stat_positions_desc')}</p>
          </div>
          <div className="w-[200px] text-center">
            <p className="text-[48px] text-[#CB8734] border-b border-[#CB8734] mb-[18px]">{t('company.stat_humidity')}</p>
            <p>{t('company.stat_humidity_desc')}</p>
          </div>
          <div className="md:w-[300px] text-center">
            <p className="text-[45px] text-[#CB8734] border-b border-[#CB8734] mb-[18px]">{t('company.stat_delivery')}</p>
            <p>{t('company.stat_delivery_desc')}</p>
          </div>
        </div>
        <button className='bg-[#F39C32] mb-[20px] md:mb-0 text-white text-[13px] font-bold px-7 py-3 rounded-[4px] md:ml-[500px] mt-[50px]'>{t('company.btn_more')}</button>
      </div>
      <div className="mt-[100px] md:text-start text-center">
        <p className="font-bold text-[20px] md:text-4xl">{t('why_us.title')}</p>
        <div className="text-center md:text-start md:flex mt-[30px] justify-around">
          <Cards img={card1} name={t('why_us.card1_title')} desc={t('why_us.card1_desc')} />
          <Cards img={card2} name={t('why_us.card2_title')} desc={t('why_us.card2_desc')} />
          <Cards img={card3} name={t('why_us.card3_title')} desc={t('why_us.card3_desc')} />
          <Cards img={card4} name={t('why_us.card4_title')} desc={t('why_us.card4_desc')} />
        </div>
      </div>
      <div className="flex gap-10 items-center px-4 w-[80%] mt-[60px] m-auto">
        <div>
          <p className="text-3xl font-semibold text-gray-900">
            Закажите консультацию, <br /> если сомневаетесь
          </p>
          <div className="mt-6 flex w-full">
            <div className="flex items-center border border-gray-300 rounded-l-md px-3 bg-gray-100">
              <img
                src={photo3}
                alt=""
              />
            </div>
            <input
              type="tel"
              placeholder="+38 XXX XXX XX XX"
              className="w-full border border-gray-300 border-l-0 rounded-r-md px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <button className="ml-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-md transition">
              Заказать
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3 max-w-md">
            Отправляя данные, Вы соглашаетесь на обработку{' '}
            <span className="text-orange-500 cursor-pointer">
              персональных данных
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={photo2}
            alt=""
            className="rounded-xl w-full"
          />
        </div>
      </div>
      <div>
        <p className='text-[36px] font-bold mt-[100px] mb-[40px]'>Фотографии производства</p>
        <div className='flex justify-around '>
          <img src={photo4} alt="" />
          <img src={photo5} alt="" className='md:block hidden'/>
          <img src={photo6} alt="" className='md:block hidden'/>
        </div>
      </div>
      <div className="mt-[100px]">
        <p className="text-[24px] md:text-[36px] font-bold mb-[40px]">{t('articles.title')}</p>
        <div className="md:flex justify-around">
          <div className="shadow-2xl p-5 rounded-[12px] md:w-[370px]">
            <img src={photo13} alt="" className="mb-[36px]" />
            <p className="text-[20px] mb-[13px]">{t('articles.article1_title')}</p>
            <p className="text-[15px] mb-[13px]">{t('articles.article1_desc')}</p>
          </div>
          <div className="shadow-2xl p-5 rounded-[12px] md:w-[370px] hidden md:block">
            <img src={photo14} alt="" className="mb-[36px]" />
            <p className="text-[20px] mb-[13px]">{t('articles.article2_title')}</p>
            <p className="text-[15px] mb-[13px]">{t('articles.article2_desc')}</p>
          </div>
          <div className="shadow-2xl p-5 rounded-[12px] md:w-[370px] hidden md:block">
            <img src={photo15} alt="" className="mb-[36px]" />
            <p className="text-[20px] mb-[13px]">{t('articles.article3_title')}</p>
            <p className="text-[15px] mb-[13px]">{t('articles.article3_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

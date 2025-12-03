import { useTranslation } from 'react-i18next'
import telegram from '../assets/Telegram (1).png'
import whatsapp from '../assets/Whatsapp (1).png'
import viber from '../assets/вайбер (1).png'
import icon from '../assets/иконка (20).png'
import photo13 from '../assets/фото (6).png'
import photo14 from '../assets/фото (7).png'
import photo15 from '../assets/фото (8).png'

export default function Contact() {
  let { t } = useTranslation()

  return (
    <div className="p-5">
      <div className="mx-auto py-10 px-4 lg:px-0">
        <p className="text-2xl font-bold mb-6">
          Контакты, как с нами связаться
        </p>
        <div className="md:flex justify-around">
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <p className="text-lg font-semibold mb-4">Телефоны:</p>
              <p>Отдел продаж: <span className="font-medium">+38 (098) 188 85 66</span></p>
              <p>Отдел логистики: <span className="font-medium">+38 (066) 704 37 77</span></p>
              <button className="text-[#CB8734] mt-3 hover:underline">
                Позвонить компании
              </button>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <p className="text-lg font-semibold mb-4">Почта:</p>
              <p>Отдел продаж: <span className="font-medium">sales.tokarmebel@gmail.com</span></p>
              <p>Отдел логистик: <span className="font-medium">logistics.tokarmebel@gmail.com</span></p>
              <button className="text-[#CB8734] mt-3 hover:underline">
                Написать на почту
              </button>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <p className="text-lg font-semibold mb-4">График работы:</p>
              <p>Пн – Пт: <span className="font-medium">с 9:00 до 18:00</span></p>
              <p>Сб – Вс: <span className="font-medium">Выходной</span></p>
              <button className="text-[#CB8734] mt-3 hover:underline">
                Позвонить лично в офис
              </button>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <p className="text-lg font-semibold mb-4">Мессенджеры:</p>
              <div className="flex items-center gap-4">
                <img src={telegram} alt="" className='w-[46px] h-[46px]' />
                <img src={whatsapp} alt="" className='w-[46px] h-[46px]' />
                <img src={viber} alt="" className='w-[46px] h-[46px]' />
              </div>
              <button className="text-[#CB8734] mt-3 hover:underline">
                Написать в соцсети
              </button>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Компания TokarMabel находится по адресу:
              </p>
              <p>
                Украина, Тячевский район, г. Тячев, ТЦ “Стиль”
              </p>
              <button className="text-[#CB8734] mt-2 hover:underline">
                Проложить маршрут
              </button>
            </div>
          </div>
          <div className="md:p-5">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <p className="text-lg font-semibold mb-4">
                Закажите консультацию, если сомневаетесь
              </p>
              <input
                className="md:w-full border rounded-lg p-3 mb-3"
                placeholder="Введите имя"
              />
              <div className="flex gap-2 mb-3">
                <div className="bg-gray-100 rounded-lg flex items-center px-3">
                  🇺🇦
                </div>
                <input
                  className="flex border rounded-lg p-3 w-[160px]"
                  placeholder="+38 XXX XXX XX XX"
                />
              </div>
              <button className="w-full bg-[#F39C32] text-white rounded-lg p-3 text-center">
                Получить точный расчет
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Отправляя данные, Вы соглашаетесь<br />на обработку персональных данных.
              </p>
            </div>
            <div className="md:w-full h-80 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                title="map"
                width="100%"
                height="100%"
                loading="lazy"
                src="https://maps.google.com/maps?q=Tyachiv%20Ukraine&t=&z=14&ie=UTF8&iwloc=&output=embed"
              />
            </div>

          </div>
        </div>
      </div>
      <div>
        <p className='text-[24px] md:text-[36px] font-bold mt-[100px] mb-[26px]'>Реквизиты компании:</p>
        <div className='flex justify-between flex-wrap'>
          <div className='flex items-center gap-[38px] md:w-[370px] rounded-[8px] bg-[#FFFBF6] p-5'>
            <img src={icon} alt="" />
            <div>
              <p className='text-[20px]'>Наименование компании:</p>
              <p className='text-[16px] font-bold'>Tokar Mebel</p>
            </div>
          </div>
          <div className='flex items-center gap-[38px] md:w-[370px] rounded-[8px] bg-[#FFFBF6] p-5'>
            <img src={icon} alt="" />
            <div>
              <p className='text-[20px]'>Наименование компании:</p>
              <p className='text-[16px] font-bold'>Tokar Mebel</p>
            </div>
          </div>
          <div className='flex items-center gap-[38px] md:w-[370px] rounded-[8px] bg-[#FFFBF6] p-5'>
            <img src={icon} alt="" />
            <div>
              <p className='text-[20px]'>Наименование компании:</p>
              <p className='text-[16px] font-bold'>Tokar Mebel</p>
            </div>
          </div>
          <div className='flex items-center gap-[38px] md:w-[370px] rounded-[8px] bg-[#FFFBF6] p-5'>
            <img src={icon} alt="" />
            <div>
              <p className='text-[20px]'>Наименование компании:</p>
              <p className='text-[16px] font-bold'>Tokar Mebel</p>
            </div>
          </div>
          <div className='flex items-center gap-[38px] md:w-[370px] rounded-[8px] bg-[#FFFBF6] p-5'>
            <img src={icon} alt="" />
            <div>
              <p className='text-[20px]'>Наименование компании:</p>
              <p className='text-[16px] font-bold'>Tokar Mebel</p>
            </div>
          </div>
          <div className='flex items-center gap-[38px] md:w-[370px] rounded-[8px] bg-[#FFFBF6] p-5'>
            <img src={icon} alt="" />
            <div>
              <p className='text-[20px]'>Наименование компании:</p>
              <p className='text-[16px] font-bold'>Tokar Mebel</p>
            </div>
          </div>
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

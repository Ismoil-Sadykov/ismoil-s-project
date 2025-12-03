import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import photo3 from '../assets/Rectangle 325.png'
import { useTranslation } from "react-i18next"
import photo4 from '../assets/фото (13).png'
import icon1 from '../assets/иконка (21).png'
import icon2 from '../assets/иконка (22).png'
import icon3 from '../assets/иконка (23).png'
import icon4 from '../assets/SquareHalf.png'
import icon5 from '../assets/Clock.png'
import sec1 from '../assets/фото (14).png'
import sec2 from '../assets/фото (15).png'
import sec3 from '../assets/фото (16).png'
import sec4 from '../assets/фото (17).png'
import sec7 from '../assets/фото (20).png'
import sec8 from '../assets/фото (21).png'
import photo22 from '../assets/фото (12).png'
import photo33 from '../assets/Rectangle 325.png'

export default function Info() {
  let api = 'https://to-dos-api.softclub.tj/api/to-dos'
  let apiImg = 'https://to-dos-api.softclub.tj/images'
  let [user, setUser] = useState({})
  let { id } = useParams()
  let { t } = useTranslation()

  async function getById() {
    try {
      const { data } = await axios.get(`${api}/${id}`)
      setUser(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getById()
  }, [])

  return (
    <>
      <div className="p-10">
        <p className="text-[36px] font-bold mb-[40px]">{user?.name}</p>
        {user?.images?.map((img) => {
          return (
            <img src={`${apiImg}/${img.imageName}`} alt="" className="w-full" />
          )
        })}
        <p className="text-[30px] mt-[25px] md:w-auto w-[200px]">{user?.description}</p>
        <p className="text-[15px] w-[220px] mt-[15px]">Стоимость строения зависит от комплектации</p>
        <div className="md:flex justify-between items-start">
          <button className='bg-[#F39C32] text-white mt-[20px] text-[13px] font-bold px-7 py-3 rounded-[4px]'>Получить точный расчет</button>
          <div className="flex gap-10 items-center px-4 mt-[60px]">
            <div>
              <p className="text-3xl font-semibold text-gray-900">
                Закажите консультацию, <br /> если сомневаетесь
              </p>
              <div className="mt-6 md:flex w-full">
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
          </div>
        </div>
        <div className="mt-[50px] md:mt-0 mx-auto px-4 md:px-0">
          <p className="text-3xl font-bold mb-10">
            Характеристика строения:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b pb-6">
                <img src={icon1} alt="" />
                <p className="text-lg font-medium">20м²</p>
              </div>
              <div className="flex items-center gap-4 border-b pb-6">
                <img src={icon2} alt="" />
                <p className="text-lg font-medium">2 этажа</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={icon3} alt="" />
                <p className="text-lg font-medium">4×5м</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={photo4}
                alt="Дом Barcelona"
                className="rounded-2xl shadow-md w-full object-cover max-h-[330px]"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Barcelona</h3>
              <div className="flex items-start gap-3">
                <img src={icon4} alt="" />
                <div>
                  <p className="font-medium text-gray-600">Технологии:</p>
                  <p className="font-semibold">Дом из газоблока и кирпича</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src={icon5} alt="" />
                <div>
                  <p className="font-medium text-gray-600">Сроки строительства:</p>
                  <p className="font-semibold">30 дней</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-3 text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Фундамент
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Кровля
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Стиль
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Фасад
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Окна и входные двери
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Электросеть
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Внутренняя отделка
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">›</span> Процесс работы
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[120px]">
          <p className="text-[36px] font-bold mb-[30px]">Фундамент</p>
          <img src={sec1} alt="" />
        </div>
        <div className="mt-[120px]">
          <p className="text-[36px] font-bold mb-[30px]">Стиль</p>
          <img src={sec2} alt="" />
        </div>
        <div className="mt-[120px]">
          <p className="text-[36px] font-bold mb-[30px]">Окна и входные двери</p>
          <div className="flex gap-[40px]">
            <img src={sec3} alt="" />
            <img src={sec4} alt="" className="hidden md:block"/>
          </div>
        </div>
        <div className="mt-[120px]">
          <p className="text-[36px] font-bold mb-[30px]">Кровля</p>
          <img src={sec7} alt="" />
        </div>
        <div className="mt-[120px]">
          <p className="text-[36px] font-bold mb-[30px]">Электросеть</p>
          <img src={sec8} alt="" />
        </div>
        <div className="md:flex gap-10 items-center px-4 md:w-[80%] mt-[60px] m-auto">
          <div>
            <p className="text-3xl font-semibold text-gray-900">
              Закажите консультацию, <br /> если сомневаетесь
            </p>
            <div className="mt-6 flex w-full">
              <div className="flex items-center border border-gray-300 rounded-l-md px-3 bg-gray-100">
                <img
                  src={photo33}
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
              src={photo22}
              alt=""
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

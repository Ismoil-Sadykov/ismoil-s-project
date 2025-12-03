import { ChevronRight } from "lucide-react";
import photo1 from '../assets/Слайдер.png'
import Cards from "@/components/Cards";
import card1 from '../assets/Иконка (16).png'
import card2 from '../assets/Иконка (17).png'
import card3 from '../assets/Иконка (18).png'
import card4 from '../assets/Иконка (19).png'
import photo2 from '../assets/фото.png'
import photo3 from '../assets/фото (1).png'
import photo4 from '../assets/фото (2).png'
import fon from '../assets/Фон (2).png'
import photo5 from '../assets/Создание-3D-макета 1.png'
import photo6 from '../assets/zamer 1.png'
import photo7 from '../assets/Производство-конструкции 1.png'
import photo8 from '../assets/Монтаж 1.png'
import photo9 from '../assets/Слайдер (1).png'
import first from '../assets/фон (3).png'
import second from '../assets/фото (3).png'
import third from '../assets/Посмотреть короткое видео о компании (2_42 мин).png'
import logo from '../assets/Group 43.png'
import { useTranslation } from "react-i18next";
import photo10 from '../assets/фото (4).png'
import photo11 from '../assets/фото (5).png'
import photo12 from '../assets/фото (9).png'
import photo13 from '../assets/фото (6).png'
import photo14 from '../assets/фото (7).png'
import photo15 from '../assets/фото (8).png'
import photo16 from '../assets/фото (10).png'

export default function Home() {
    let { t } = useTranslation()

    return (
        <main className="p-5">
            <div className="hidden md:flex justify-between items-center">
                <div>
                    <p className="font-extrabold text-[38px] mb-2">{t('hero.title')}</p>
                    <p className="text-[18px] w-[500px] mb-[26px]">{t('hero.subtitle')}</p>
                    <div className="flex items-center gap-10">
                        <button className='bg-[#F39C32] text-white text-[13px] font-bold px-7 py-3 rounded-[4px]'>{t('hero.btn_houses')}</button>
                        <button className="flex items-center text-[#CB8734] font-semibold gap-3"><ChevronRight color="#CB8734" />{t('hero.btn_baths')}</button>
                    </div>
                </div>
                <img src={[photo1]} alt="" />
            </div>
            <div className="md:hidden block">
                <div className="text-center">
                    <p className="font-extrabold text-[24px] text-center mb-[17px] mb-2">{t('hero.title')}</p>
                    <img src={photo1} alt="" className="w-[300px]" />
                    <p className="text-[15px] text-center mt-[20px] mb-[26px]">{t('hero.subtitle')}</p>
                    <button className='bg-[#F39C32] text-white text-[13px] font-bold px-7 py-3 rounded-[4px]'>{t('hero.btn_houses')}</button>
                    <button className="flex items-center ml-[50px] mt-[20px] text-[#CB8734] font-semibold gap-3"><ChevronRight color="#CB8734" />{t('hero.btn_baths')}</button>
                </div>
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
            <div className="relative mt-[100px]">
                <p className="text-[24px] font-extrabold mb-10">{t('catalog.title')}</p>
                <div className="md:flex gap-[35px]">
                    <div className="md:w-[370px] w-[280px] bg-white p-7 rounded-[36px] mb-[30px] md:mb-0">
                        <img src={photo2} alt="" />
                        <p className="text-[30px] mb-2">{t('catalog.living_title')}</p>
                        <p className="text-gray-600 mb-4">
                            {t('catalog.living_desc')}
                        </p>
                        <button className="flex items-center mt-[20px] text-[#CB8734] font-semibold gap-3">
                            <ChevronRight color="#CB8734" />{t('catalog.btn_more')}
                        </button>
                    </div>
                    <div className="md:w-[370px] w-[280px] bg-white p-7 rounded-[36px]">
                        <img src={photo3} alt="" />
                        <p className="text-[30px] mb-2">{t('catalog.commercial_title')}</p>
                        <p className="text-gray-600 mb-4">
                            {t('catalog.commercial_desc')}
                        </p>
                        <button className="flex items-center mt-[20px] text-[#CB8734] font-semibold gap-3">
                            <ChevronRight color="#CB8734" />{t('catalog.btn_more')}
                        </button>
                    </div>
                </div>
                <div className="flex-col-reverse md:flex-row flex justify-center md:w-[770px] items-center mt-[30px] bg-white p-7 rounded-[36px]">
                    <div>
                        <p className="text-[30px] font-semibold mb-2">{t('catalog.garden_title')}</p>
                        <p className="text-gray-600 mb-4">
                            {t('catalog.garden_desc')}
                        </p>
                        <button className="flex items-center mt-[20px] text-[#CB8734] font-semibold gap-3">
                            <ChevronRight color="#CB8734" />{t('catalog.btn_more')}
                        </button>
                    </div>

                    <img src={photo4} alt="" />
                </div>
                <img
                    src={fon}
                    alt=""
                    className="absolute z-[-1] w-[790px] ml-[450px] mt-[-600px] md:block hidden"
                />
            </div>
            <div className="mt-[100px]">
                <p className="md:text-[36px] text-[24px] text-center md:text-start font-bold mb-[20px] md:w-[380px]">{t('composition.title')}</p>
                <div className="flex flex-wrap justify-around">
                    <div className="md:w-[570px] mb-[50px] p-5 shadow-md rounded-[8px]">
                        <div className="flex md:flex-row flex-col-reverse justify-between items-end">
                            <p className="md:text-[30px] md:text-start mb-[20px] text-center text-[24px] md:w-[150px] md:mb-[-30px]">{t('composition.step1_title')}</p>
                            <img src={photo5} alt="" />
                        </div>
                        <p className="text-[15px] md:mt-[50px]">{t('composition.step1_desc')}</p>
                    </div>
                    <div className="md:w-[570px] mb-[50px] p-5 shadow-md rounded-[8px]">
                        <div className="flex md:flex-row flex-col-reverse justify-between items-end">
                            <p className="md:text-[30px] md:text-start mb-[20px] text-center text-[24px] md:w-[320px] md:mb-[10px]">{t('composition.step2_title')}</p>
                            <img src={photo6} alt="" />
                        </div>
                        <p className="text-[15px]">{t('composition.step2_desc')}</p>
                    </div>
                    <div className="md:w-[570px] mb-[50px] p-5 shadow-md rounded-[8px]">
                        <div className="flex md:flex-row flex-col-reverse justify-between items-end">
                            <p className="md:text-[30px] md:text-start mb-[20px] text-center text-[24px] md:w-[150px] md:mb-[-30px]">{t('composition.step3_title')}</p>
                            <img src={photo7} alt="" />
                        </div>
                        <p className="text-[15px] md:mt-[50px]">{t('composition.step3_desc')}</p>
                    </div>
                    <div className="md:w-[570px] mb-[50px] p-5 shadow-md rounded-[8px]">
                        <div className="flex md:flex-row flex-col-reverse justify-between items-end">
                            <p className="md:text-[30px] md:text-start mb-[20px] text-center text-[24px] md:w-[150px] md:mb-[10px]">{t('composition.step4_title')}</p>
                            <img src={photo8} alt="" />
                        </div>
                        <p className="text-[15px]">{t('composition.step4_desc')}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-[70px]">
                <img src={photo9} alt="" className="mb-[40px]" />
                <div className="md:flex items-center gap-10">
                    <button className='bg-[#F39C32] mb-[20px] md:mb-0 text-white text-[13px] font-bold px-7 py-3 rounded-[4px]'>{t('call_to_action.btn_houses')}</button>
                    <button className="flex items-center text-[#CB8734] font-semibold gap-3"><ChevronRight color="#CB8734" />{t('call_to_action.btn_baths')}</button>
                </div>
            </div>
            <div className="mt-[80px] md:w-[1100px] m-auto">
                <p className="font-bold md:text-[36px] md:text-start text-center text-[24px]">{t('company.title')}</p>
                <div className="mt-[100px]">
                    <img src={first} alt="" className="relative md:w-full w-[300px] h-[150px] md:h-auto" />
                    <img src={second} alt="" className="absolute md:mt-[-480px] md:ml-[300px] md:w-auto w-[170px] mt-[-193px] ml-[45px]" />
                    <img src={third} alt="" className="absolute md:mt-[-250px] md:ml-[580px] md:w-auto w-[100px] mt-[-130px] ml-[150px]" />
                </div>
                <div className="flex md:w-[570px] rounded-[8px] items-start gap-[22px] p-10 bg-white md:absolute md:mt-[-100px] md:ml-[250px]">
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
                <button className='bg-[#F39C32] mb-[20px] md:mb-0 text-white text-[13px] font-bold px-7 py-3 rounded-[4px] md:ml-[450px] mt-[50px]'>{t('company.btn_more')}</button>
            </div>
            <div className="mt-[100px]">
                <p className="text-[24px] md:text-[36px] font-bold mb-[40px]">{t('building_types.title')}</p>
                <div className="md:flex justify-around">
                    <div className="shadow-2xl p-5 rounded-[12px] md:w-[370px]">
                        <img src={photo10} alt="" className="mb-[36px]" />
                        <p className="text-[30px] mb-[13px]">{t('building_types.living_title')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.living_item1')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.living_item2')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.living_item3')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.living_item4')}</p>
                    </div>
                    <div className="shadow-2xl p-5 rounded-[12px] md:w-[370px]">
                        <img src={photo11} alt="" className="mb-[36px]" />
                        <p className="text-[30px] mb-[13px]">{t('building_types.commercial_title')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.commercial_item1')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.commercial_item2')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.commercial_item3')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.commercial_item4')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.commercial_item5')}</p>
                    </div>
                    <div className="shadow-2xl p-5 rounded-[12px] md:w-[370px]">
                        <img src={photo12} alt="" className="mb-[36px]" />
                        <p className="text-[30px] mb-[13px]">{t('building_types.garden_title')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item1')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item2')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item3')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item4')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item5')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item6')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item7')}</p>
                        <p className="flex gap-[10px] text-[15px] mb-[10px]"><ChevronRight color="#CB8734" />{t('building_types.garden_item8')}</p>
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
            <div className="hidden md:flex items-center justify-between mt-[100px]">
                <div>
                    <p className="font-bold text-[36px] mb-[12px]">{t('seo_block.title')}</p>
                    <p className="w-[530px] text-[15px] mb-[15px]">{t('seo_block.text1')}</p>
                    <p className="w-[530px] text-[15px] mb-[15px]">{t('seo_block.text2')}</p>
                    <p className="w-[530px] text-[15px] ">{t('seo_block.text3')}</p>
                </div>
                <img src={photo16} alt="" />
            </div>
            <div className="block md:hidden mt-[100px]">
                <div>
                    <p className="font-bold text-[24px] mb-[12px]">{t('seo_block.title')}</p>
                    <p className="text-[15px] mb-[15px]">{t('seo_block.text1')}</p>
                    <img src={photo16} alt="" />
                    <p className="text-[15px] mb-[15px]">{t('seo_block.text2')}</p>
                    <p className="text-[15px]">{t('seo_block.text3')}</p>
                </div>
            </div>
        </main>
    )
}

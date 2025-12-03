
export default function Cards({img, name, desc}) {
  return (
    <div className="w-[230px] mb-[30px] md:mb-0">
        <img src={img} alt="" className="mb-[21px] ml-[80px] md:ml-0"/>
        <p className="text-[15px] font-bold mb-[20px]">{name}</p>
        <p>{desc}</p>
    </div>
  )
}

import { Input } from "@/components/ui/input";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import axios from "axios";
import { ChevronRight, CopyPlus, Info, Search, SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import photo1 from '../assets/фото (11).png'

export default function Catalog() {
  let api = 'https://to-dos-api.softclub.tj/api/to-dos'
  let apiImg = 'https://to-dos-api.softclub.tj/images'
  let apiStatus = 'https://to-dos-api.softclub.tj/completed'
  let [users, setUsers] = useState([])
  let [openEdit, setOpenEdit] = useState(false)
  let [openAdd, setOpenAdd] = useState(false)
  let [nameEdit, setNameEdit] = useState("")
  let [descEdit, setDescEdit] = useState("")
  let [idx, setIdx] = useState(null)
  let [idxImg, setIdxImg] = useState(null)
  let [openAddImg, setOpenAddImg] = useState(false)

  const handleClose = () => {
    setOpenEdit(false);
  };

  const handleCloseImg = () => {
    setOpenAddImg(false);
  };


  async function getUsers() {
    try {
      const { data } = await axios.get(api)
      setUsers(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUsers(id) {
    try {
      await axios.delete(`${api}?id=${id}`)
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }

  async function changeStatus(id) {
    try {
      await axios.put(`${apiStatus}?id=${id}`)
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }

  async function editUser() {
    let updateUser = {
      name: nameEdit,
      description: descEdit,
      id: idx
    }
    try {
      await axios.put(api, updateUser)
      getUsers()
      setOpenEdit(false)
    } catch (error) {
      console.error(error);
    }
  }

  async function addUsers(e) {
    e.preventDefault()
    let target = e.target
    let files = target["inpImg"].files
    let formData = new FormData()
    formData.append("Name", target["inpName"].value)
    formData.append("Description", target["inpDesc"].value)
    for (let i = 0; i < files.length; i++) {
      formData.append("Images", files[i])
    }
    try {
      await axios.post(api, formData)
      getUsers()
      setOpenAdd(false)
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteImage(id) {
    try {
      await axios.delete(`${api}/images/${id}`)
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }

  async function addImg(e) {
    e.preventDefault()
    let target = e.target
    let files = target['imgAddImg'].files
    let formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('Images', files[i])
    }
    try {
      await axios.post(`${api}/${idxImg}/images`, formData)
      getUsers()
      handleCloseImg()
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <Dialog
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit User"}
        </DialogTitle>
        <DialogContent>
          <TextField id="filled-basic" label="Name" variant="filled" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} fullWidth sx={{ marginBottom: "20px" }} />
          <TextField id="filled-basic" label="Description" variant="filled" value={descEdit} onChange={(e) => setDescEdit(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editUser} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Add User
        </DialogTitle>

        <DialogContent>
          <form
            onSubmit={(e) => addUsers(e)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3">
              <input
                id="inpImg"
                type="file"
                name="inpImg"
                accept="image/*"
                className="border border-2 p-3 rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Name</p>
              <input
                type="text"
                name="inpName"
                placeholder="Введите имя"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Description</p>
              <textarea
                name="inpDesc"
                rows="3"
                placeholder="Введите описание"
                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end gap-3 mt-2">
              <Button
                onClick={() => setOpenAdd(false)}
                variant="outlined"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openAddImg}
        onClose={handleCloseImg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Image"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => addImg(e)}>
            <input type="file" multiple name='imgAddImg' className='mb-[10px] w-full border px-[8px] py-[12px] rounded-[12px]' />
            <button type='submit' className='text-white bg-green-600 rounded-[10px] font-semibold active:scale-[90%] transition cursor-pointer w-full py-[12px]'>Save</button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseImg}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <div className="flex justify-between p-5 items-center">
        <p className="font-bold text-[24px] md:text-[36px]">Каталог жилых строений</p>
        <div className="hidden md:flex gap-[20px] items-center w-[471px] h-[40px] border border-gray-500 p-5 rounded-[8px]"><Search color="#CB8734" /><input type="search" placeholder="Поиск по жилым строениям..." className="w-[470px] border-none outline-none" /></div>
        <button className="md:block hidden text-[18px] font-bold text-white bg-green-600 px-5 py-3 rounded-[12px] cursor-pointer"
          onClick={() => setOpenAdd(!openAdd)}
        >Add Product</button>
      </div>
      <div className="p-5 flex justify-between gap-[20px] items-start">
        <div className="md:block hidden mt-[40px] w-[500px]">
          <p className="text-[15px] mb-[30px] font-bold">Подкатегория</p>
          <p className="text-[15px] font-bold mt-[30px] mb-[20px]">Дома	и	жилые	строения</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Дома</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Дома	из профилированого	бруса</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Дома из оцилиндрованого	бруса</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Каркасные	дома</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Дома	из	блока</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Дачи</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Коттеджи</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Виллы</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Усадьбы</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Особняки</p>
          <p className="text-[15px] font-bold mt-[30px] mb-[20px]">Коммерческие	строения</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Базы	отдыха</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Гостинницы</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Рестораны</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Кафе</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Магазины</p>
          <p className="text-[15px] font-bold mt-[30px] mb-[20px]">Садовые	и	хоз	постройки</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Деревянные	бани из	оцилиндрованого бруса</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Деревянные	бани из профилированого бруса</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Каркасные	конструкции</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Беседки</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Альтанки</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Гаражи</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Кухни</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Детские	игровые площадки</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Деревянные	детские домики</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Мангальные	зоны и	барбекю</p>
          <p className="text-[15px] font-bold mt-[30px] mb-[20px]">Сортировать по:</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Алфавиту</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Популярности</p>
          <p className="text-[15px] flex items-center mb-[12px]"><ChevronRight color="#CB8734" />Цене</p>
          <p className="text-[15px] font-bold mt-[30px] mb-[20px]">Площадь (м2):</p>
          <input type="range" />
          <p className="text-[15px] font-bold mt-[30px] mb-[20px]">Цена (грн):</p>
          <input type="range" />
        </div>
        <div className="flex justify-between md:p-5 flex-wrap">
          {users.map((e) => {
            return (
              <div className="md:w-[270px] p-5 shadow-xl rounded-[12px] mb-[30px]" key={e.id}>
                {e.images.map((img) => {
                  return (
                    <div key={img.id}>
                      <img src={`${apiImg}/${img.imageName}`} alt="" className="md:w-[260px] h-[180px] rounded-tr-[36px] rounded-bl-[36px]" />
                      <button className="mt-[20px] mb-[20px] hover:bg-red-400 px-5 py-3 hover:text-white transition rounded-[12px] cursor-pointer"
                        onClick={() => deleteImage(img.id)}
                      ><Trash color="red" /></button>
                    </div>
                  )
                })}
                <p className="text-[20px] mb-[20px]">{e.name}</p>
                <p className="text-[18px] mb-[12px]">{e.description}</p>
                {e.isCompleted && (
                  <p className="bg-green-200 text-green-700 px-5 py-3 rounded-[8px] inline">Active</p>
                )}
                {!e.isCompleted && (
                  <p className="bg-red-200 text-red-700 px-5 py-2 rounded-[8px] inline">Inactive</p>
                )}
                <div className="flex justify-between mt-[30px]">
                  <button onClick={() => deleteUsers(e.id)} className="text-red-800 hover:bg-red-400 px-3 py-1 hover:text-white transition rounded-[12px] cursor-pointer"><Trash /></button>
                  <button className="text-blue-800 hover:bg-blue-400 px-3 py-1 hover:text-white transition rounded-[12px] cursor-pointer" onClick={() => {
                    setOpenEdit(true)
                    setNameEdit(e.name)
                    setDescEdit(e.description)
                    setIdx(e.id)
                  }}><SquarePen /></button>
                  <button className='cursor-pointer hover:bg-gray-500 px-3 py-1 hover:text-white transition rounded-[12px]' onClick={() => {
                    setOpenAddImg(true)
                    setIdxImg(e.id)
                  }}><CopyPlus /></button>
                  <Link to={`/info/${e.id}`}><button className="text-gray-800 hover:bg-gray-400 px-3 py-1  hover:text-white transition rounded-[12px] cursor-pointer"><Info /></button></Link>
                  <input type="checkbox" checked={e.isCompleted} onChange={() => changeStatus(e.id)} />
                </div>
              </div>
            )
          })}
        </div>
      </div >
      <div className="p-5 flex-col md:flex-row flex items-center justify-between md:w-[800px] m-auto">
        <div>
          <p className="text-[30px] mb-[16px]">Нет подходящего проекта?</p>
          <p className="text-[15px] mb-[26px] md:w-[310px]">Мы разработаем проект индивидуально под ваш запрос с помощью 3D-макета</p>
          <button className='bg-[#F39C32] text-white text-[13px] font-bold px-7 py-3 rounded-[4px] md:mb-0 mb-[20px]'>Разработать проект</button>
        </div>
        <img src={photo1} alt="" />
      </div>
    </>
  )
}

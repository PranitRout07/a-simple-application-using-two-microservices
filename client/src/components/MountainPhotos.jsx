import React, { useEffect, useState } from 'react'
import axios from "axios"

function MountainPhotos() {

    const [photos,setPhotos] = useState([])

    async function FetchMountainPhotos() {
        const resp = await axios.get("http://app.microservices.com/api/mountains")
        setPhotos([...resp.data])
    }
    useEffect(()=>{
        FetchMountainPhotos();
    },[])
  return (
    <div className='h-screen w-full m-10 overflow-x-hidden bg-transparent flex justify-center'>
        <div className='h-[80%] w-[80%]'>
        <div className='flex justify-center w-full text-white'>
            <span className='text-3xl font-semibold '>Mountains</span>
        </div>
        {
            photos.map((photo,index)=>{
                return (
                    <div key={index} className='m-10 inline-block '>
                        <img className='h-[270px] w-[320px]' src={photo}/>
                    </div>
                )
            })
        }

        </div>

    </div>
  )
}
export default MountainPhotos
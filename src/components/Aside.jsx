import React from 'react'
import { Link } from 'react-router-dom'

export const Aside = ({setModal}) => {
  return (
    <aside className='bg-white bg-opacity-95 gap-3  rounded-xl w-fit px-8 py-4 flex flex-col absolute right-8 top-[11.5rem] text-sm '>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/1"}><strong>Paso 1:</strong> La sinceridad </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/2"}><strong>Paso 2:</strong> La esperanza </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/3"}><strong>Paso 3:</strong> Confiar en Dios </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/4"}><strong>Paso 4:</strong> La verdad </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/5"}><strong>Paso 5:</strong> La confesión </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/6"}><strong>Paso 6:</strong> El cambio de corazón </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/7"}><strong>Paso 7:</strong> La humildad </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/8"}><strong>Paso 8:</strong> La búsqueda del perdón </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/9"}><strong>Paso 9:</strong> Restitución y reconciliación </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/10"}><strong>Paso 10:</strong> La responsabilidad diaria  </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/11"}><strong>Paso 11:</strong> La revelación personal  </Link>
        <Link onClick={()=>setModal(false)} className=' uppercase hover:bg-slate-300 p-[2px] rounded-md' to={"/12"}><strong>Paso 12:</strong> El servicio  </Link>
    </aside>
  )
}

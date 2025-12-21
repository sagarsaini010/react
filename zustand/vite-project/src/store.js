import { create } from 'zustand'
import {devtools, persist}  from 'zustand/middleware'

const store = (set,get)=>{
    return {
        count: 1,
        name: 'sagar Saini',
        increment: ()=>{
           set((state)=>({
            count: state.count +1
           }))
        },
        capitalizeName: ()=>{
            const {name} = get();
            set({
                name : name.charAt(0).toUpperCase() + name.slice(1)
            })
        }
    }
}
const useMyStore = create(devtools(persist(store)));

export default useMyStore
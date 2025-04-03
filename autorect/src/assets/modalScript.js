import {create} from 'zustand';

export const useModal=create((set)=>({
    modalState:0,
    setModalState:(action)=>set({modalState:action})
}))
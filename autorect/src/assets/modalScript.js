import {create} from 'zustand';

export const useModal=create((set)=>({
    modalState:0,
    setModalState:(action)=>set({modalState:action}),
    
}))

/*
// stores/formModal.js
import { create } from 'zustand'

export const useFormModal = create((set, get) => ({
  isOpen: false,
  mode: 'create', // 'create' | 'update'
  currentId: null,
  formData: {},
  
  // Abre el modal en modo creación
  openCreateModal: () => set({ 
    isOpen: true,
    mode: 'create',
    currentId: null,
    formData: {} 
  }),

  // Abre el modal en modo edición con los datos del registro
  openUpdateModal: async (id) => {
    set({ 
      isOpen: true,
      mode: 'update',
      currentId: id,
      formData: {} 
    });
    
    // Carga los datos solo en modo edición
    try {
      const response = await axios.get(`/api/records/${id}`);
      set({ formData: response.data });
    } catch (error) {
      console.error("Error loading record", error);
    }
  },

  closeModal: () => set({ isOpen: false }),
  
  // Maneja cambios en el formulario
  handleChange: (e) => set(state => ({
    formData: {
      ...state.formData,
      [e.target.name]: e.target.value
    }
  })),

  // Envía el formulario (create/update según el modo)
  handleSubmit: async () => {
    const { mode, currentId, formData } = get();
    
    try {
      if (mode === 'create') {
        await axios.post('/api/records', formData);
      } else {
        await axios.put(`/api/records/${currentId}`, formData);
      }
      set({ isOpen: false });
      // Aquí podrías llamar a un callback para refrescar la lista
    } catch (error) {
      console.error("Submission error", error);
    }
  }
}))

*/ 
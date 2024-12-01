import { createSlice } from "@reduxjs/toolkit";


export const medicineSlice = createSlice({
    name:'medicine',
    initialState:{
        medicines:[
            {
                id:1,
                medName:'Dolo MF',
                stock: 4,
                added_time:"10:14:52 AM"
            },
            {
                id:2,
                medName:'Toba Eye Drops',
                stock: 2,
                added_time:"10:24:52 AM"
            }
        ]
    },

    reducers:{

        addMeds:(state,action)=>{
            if(state.medicines.length < 5){
                state.medicines.push(action.payload)

            }else{
                
                alert(`Oops! you already added 5 Medicines!!`)
            }
            
        },

        updateMeds:(state,action)=>{
            console.log(action.payload)
            const {id,newName,newStock,updatedTime} = action.payload
            const getIndex = state.medicines.findIndex((items)=> items.id === id) // get the index of element from array same to the edited id
            const getData = {...state.medicines[getIndex]}
            console.log(getData)
            const setData = {getData,id:id,medName:newName,stock:newStock,added_time:updatedTime} // assigning new values
            console.log(setData)
            state.medicines[getIndex] = setData
            console.log(state.medicines)
        },

        deleteMeds:(state,action)=>{
            console.log(action.payload)
            const {id} = action.payload
            state.medicines = state.medicines.filter((med)=> med.id !== id)

        }
    }

});

export const {addMeds,updateMeds,deleteMeds} = medicineSlice.actions

export default medicineSlice.reducer;
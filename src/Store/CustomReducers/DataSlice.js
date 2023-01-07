import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
      { id: 0, name: 'Learn React', phone: '1234' },
      { id: 1, name: 'Learn Redux', phone: '4444' },
      { id: 2, name: 'Build something fun!', phone: '555' }
    ]
  };
export const DataSlice = createSlice({
    name:'data',
    initialState,
    reducers: {
        setData : (state) => {
           console.log('ff');
        },
        inc: (state, payload) => {
            //console.log('jjjjjj');
            //console.log(payload.payload);
            state.data = [
                ...state.data,
                payload.payload
            ];
            console.log(state.data);

        }
    },
});


export const {setData,inc} = DataSlice.actions;

export default DataSlice.reducer;
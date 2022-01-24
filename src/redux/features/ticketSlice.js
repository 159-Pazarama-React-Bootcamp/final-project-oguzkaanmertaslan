import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userTicket:[]
};

const ticketSlice = createSlice({
  name: "userTicket",
  initialState,
  reducers: {
      saveTicket:(state,action)=>{
          state.userTicket.push(action.payload)
      }
  },
});

export const {saveTicket} = ticketSlice.actions;
export const selectTicket=state=>state.userTicket.userTicket
export default ticketSlice.reducer;

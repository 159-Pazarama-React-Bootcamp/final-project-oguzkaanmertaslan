import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tickets:[]
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
      saveTicket:(state,action)=>{
          state.tickets.push(action.payload)
      }
  },
});

export const {saveTicket} = ticketsSlice.actions;
export const selectTicket=ticketState=>ticketState.tickets.tickets
export default ticketsSlice.reducer;


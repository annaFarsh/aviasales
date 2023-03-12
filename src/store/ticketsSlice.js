import { createSlice, current } from "@reduxjs/toolkit";
const ticketsSlice = createSlice({
    name: "todos",
    initialState: {
        tickets: [],
    },
    reducers: {}
    })
export default ticketsSlice.reducer;
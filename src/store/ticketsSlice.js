import { createSlice } from "@reduxjs/toolkit";
import saveSearchIdLS from "../services/saveSearchIdLS";
import { getFullTimeDuration } from "../services/funcsWorkWithTime";
import { getTickets, searchID } from "../api/fetchRequests";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    status: "",
    error: null,
    searchId: "",
    quantityShowTickets: 5,
    stopRequest: false,
    count: 0,
    filterStops: [],
    allFilter: true,
  },
  reducers: {
    showMoreTickets(state) {
      state.quantityShowTickets += 5;
    },
    getCheapestTickets(state) {
      state.tickets = [
        ...state.tickets.sort((elem1, elem2) => elem1.price - elem2.price),
      ];
    },
    getFastestTickets(state) {
      state.tickets = [
        ...state.tickets.sort(
          (elem1, elem2) =>
            getFullTimeDuration(elem1) - getFullTimeDuration(elem2)
        ),
      ];
    },
    getOptimalTickets(state) {
      state.tickets = [
        ...state.tickets.sort(
          (elem1, elem2) =>
            getFullTimeDuration(elem1) +
            elem1.price -
            (getFullTimeDuration(elem2) + elem2.price)
        ),
      ];
    },
    filterTicketsForCheckbox(state, action) {
      if (state.filterStops.includes(action.payload.value)) {
        state.filterStops = state.filterStops.filter(
          (elem) => elem !== action.payload.value
        );
      } else if (!state.filterStops.includes(action.payload.value)) {
        state.filterStops.push(action.payload.value);
      }
    },
    filterAll(state, action) {
      state.allFilter = action.payload.checked;
    },
  },

  extraReducers: {
    [searchID.pending]: (state) => {
      state.status = "loading";
      state.error = "null";
    },
    [searchID.fulfilled]: (state, action) => {
      state.status = "ok";
      state.error = "null";
      state.searchId = action.payload["searchId"];
      saveSearchIdLS(state.searchId);
    },
    [searchID.rejected]: (state, action) => {
      state.status = "reject";
      state.error = action.payload;
    },
    [getTickets.pending]: (state) => {
      state.status = "loading";
      state.error = "null";
    },
    [getTickets.fulfilled]: (state, action) => {
      state.status = "loading";
      state.error = "null";
      state.stopRequest = action.payload["stop"];
      if (state.stopRequest === false) {
        state.count++;
        state.tickets = [...state.tickets, ...action.payload["tickets"]].sort(
          (elem1, elem2) => elem1.price - elem2.price
        );
      } else if (state.stopRequest === true && state.count <= 1) {
        state.count++;
      } else {
        state.status = "ok";
      }
    },
    [getTickets.rejected]: (state, action) => {
      state.status = "reject";
      state.error = action.payload;
      if (state.tickets.length === 0 || action.payload === 500) {
        state.status = "ok";
        state.count++;
      }
    },
  },
});

export default ticketsSlice.reducer;
export const {
  showMoreTickets,
  getCheapestTickets,
  getFastestTickets,
  getOptimalTickets,
  filterTicketsForCheckbox,
  filterAll,
} = ticketsSlice.actions;

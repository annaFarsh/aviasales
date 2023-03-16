import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchID = createAsyncThunk(
  "tickets/searchID",
  async function (_, { rejectWithValue }) {
    const res = await fetch("https://aviasales-test-api.kata.academy/search");
    if (!res.ok) return rejectWithValue(res.status);
    return await res.json();
  }
);
export const getTickets = createAsyncThunk(
  "tickets/tickets",
  async function (_, { rejectWithValue }) {
    const res = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${localStorage.getItem(
        "searchId"
      )}`
    );
    if (!res.ok) return rejectWithValue(res.status);
    return res.json();
  }
);

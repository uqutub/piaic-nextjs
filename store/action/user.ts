import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/getAllUsers", async (thunkAPI) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=10");
    const data = await res.json();
    return data;
});

export const getPosts = createAsyncThunk("user/getAllPosts", async (thunkAPI) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();
    return data;
});

interface IUser {
    entities: any[];
    loading: boolean;
    counter: number;
    err: any
    postLoader: boolean;
}

const initialState = {
    entities: [],
    loading: false,
    postLoader: false,
    counter: 5,
    err: null,
} as IUser;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment: (state: IUser) => {                  // actions / types (Pure function)
            state.counter++;
        },
        decrement: (state: IUser) => {                  // actions / types (Pure function)
            console.log('Decrement')
            state.counter--;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = false;
        });

        builder.addCase(getPosts.pending, (state, action) => {
            state.postLoader = true;
        });

        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.postLoader = false;
        });

    }
});

export const { increment, decrement } = userSlice.actions

export default userSlice.reducer;
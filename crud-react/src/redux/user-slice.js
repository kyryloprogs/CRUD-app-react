import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: []
  },
  reducers: {
    addUser: function(state, action) {
        state.items.push(action.payload);
    },
    deleteUser: function(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateUser:  function(state, action) {
        // state.items = 
        state.items.map(item => {
            if (item.id == action.payload.id) {
                item.firstName = action.payload.firstName;
                item.lastName = action.payload.lastName;
                item.age = action.payload.age;
            };
        });
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
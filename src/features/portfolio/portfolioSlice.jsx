import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'ok',
    skills: [
        { id:0, value: 'frontend', count:0 },
        { id:1, value: 'backend', count:0 },
        { id:2, value: 'database', count:0 },
        { id:3, value: 'devops', count:0 }
    ]
  };


export const votationSlice = createSlice( {
    name: 'counter',
    initialState, //! initialState:initialState
    reducers: {
        voteSkill: (state,action) => {
            ///console.log(state)
            state.skills.forEach( (el) => {
                el.id == action.payload ? el.count++ : el.count = el.count
            } )
        }
    }

} )

export const { voteSkill } = votationSlice.actions 

export const selectVote = (state) => state.votation.value

export default votationSlice.reducer;

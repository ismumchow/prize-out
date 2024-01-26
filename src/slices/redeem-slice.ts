/* eslint-disable sort-keys */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addSelection } from '../thunks/addSelection';

export interface RedeemPayload {
    checkout_value_id: string;
    cost_in_cents: number;
    value_in_cents: number;
    name: string;
}

export interface RedeemInitialState {
    isLoading: boolean;
    error: any
    data: RedeemPayload[];
}

export const initialState: RedeemInitialState = {
    data: [],
    error: null,
    isLoading: false,
};

export const redemptionSlice = createSlice({
    initialState,
    name: 'redeem',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addSelection.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addSelection.fulfilled, (state, action) => {
            console.log(action);
        });
        builder.addCase(addSelection.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export default redemptionSlice.reducer;

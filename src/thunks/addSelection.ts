import { createAsyncThunk } from '@reduxjs/toolkit';
import { RedeemPayload } from '../slices/redeem-slice';
import axios from 'axios';

const addSelection = createAsyncThunk('redeem/add', async (payload: RedeemPayload) => {
    const response = await axios.post('http://localhost:3000/selections', {
        checkout_value_id: payload.checkout_value_id,
        cost_in_cents: payload.cost_in_cents,
        name: payload.name,
        value_in_cents: payload.value_in_cents,
    });
    await pause(1000);
    return response.data;
});

// to test loader on checkout button
const pause = (duration: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export { addSelection };

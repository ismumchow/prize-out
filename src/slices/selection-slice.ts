import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface GiftCardList {
    checkout_value_id: string;
    cost_in_cents: number;
    value_in_cents: number;
}

export interface SelectionSlice {
    giftcard_list: GiftCardList[];
    name: string;
}

export const selectionInitialState: SelectionSlice = {
    giftcard_list: [],
    name: '',
};

export type Selection = {
    name: string;
    giftcard_list: GiftCardList[];
};

export const selectionSlice = createSlice({
    initialState: selectionInitialState,
    name: 'selection',
    reducers: {
        setSelection(state, action: PayloadAction<Selection>) {
            state.name = action.payload.name;
            state.giftcard_list = action.payload.giftcard_list;
        },
    },
});

export const { setSelection } = selectionSlice.actions;

export const selectName = ({ selection: { name } }: RootState): string => name;
export const selectGiftCardList = ({ selection: { giftcard_list } }: RootState): GiftCardList[] => giftcard_list;

export default selectionSlice.reducer;

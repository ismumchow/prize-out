/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk: (arg0: any) => any) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback(
        (arg) => {
            setIsLoading(true);
            dispatch(thunk(arg))
                .unwrap()
                .catch((err: any) => setError(err))
                .finally(() => setIsLoading(false));
        },
        [dispatch, thunk],
    );

    return [runThunk, isLoading, error];
}

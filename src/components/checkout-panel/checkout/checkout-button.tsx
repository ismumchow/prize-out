import React, { useEffect } from 'react';
import { Button } from '../../common';
import { GiftCardList } from '../../../slices/selection-slice';
import { addSelection } from '../../../thunks/addSelection';
import { useThunk } from '../../../hooks/use-thunk';

const CheckoutButton: React.FC<{ currentName: string; selectedItem: GiftCardList }> = ({
    currentName,
    selectedItem,
}): React.ReactElement => {
    const buttonText = 'Prizeout Gift Card';
    const [doCreateSelection, isCreatingSelection, creatingSelectionError] = useThunk(addSelection);

    useEffect(() => {
        doCreateSelection();
    }, [doCreateSelection]);

    const buttonHandler = () => {
        doCreateSelection({
            checkout_value_id: selectedItem.checkout_value_id,
            cost_in_cents: selectedItem.cost_in_cents,
            name: currentName,
            value_in_cents: selectedItem.value_in_cents,
        });
    };

    return (
        <>
            <Button
                isDisabled={!selectedItem}
                ariaLabel="Prizeout your gift card"
                color={`primary`}
                onClick={buttonHandler}
                size="medium"
                type="submit"
                isLoading={isCreatingSelection}
                text={buttonText}
            />
        </>
    );
};

export default CheckoutButton;

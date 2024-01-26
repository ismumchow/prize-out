import React, { useEffect, useMemo, useState } from 'react';
import checkoutPanelViewWrapper from '../view-wrapper';
import CheckoutButton from './checkout-button';
import Classnames from 'classnames';
import { formatCurrency, formatBonus } from '../../../utils/functions/converters';

import './checkout.less';
import { useAppSelector } from '../../../hooks/hooks';
import { selectGiftCardList, selectName, GiftCardList } from '../../../slices/selection-slice';

const CheckoutPanelView: React.FC = (): React.ReactElement => {
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const [selectedItemDetails, setSelectedItemDetails] = useState<GiftCardList>(null);

    const currentGiftCardList = useAppSelector(selectGiftCardList);
    const currentName = useAppSelector(selectName);
    const getPriceItemClasses = (key: string) =>
        Classnames('price_item', {
            'price_item--selected': key === selectedKey,
            'price_item--unselected': key !== selectedKey,
        });

    useEffect(() => {
        setSelectedItemDetails(null);
        setSelectedKey(null);
    }, [currentName]);

    const prices = useMemo(
        () =>
            currentGiftCardList.map((item) => ({
                key: item.checkout_value_id,
                price: (item.cost_in_cents / 100).toFixed(2),
            })),
        [currentGiftCardList],
    );

    const handleClick = (key: string) => {
        if (selectedKey !== key) {
            const selectedItem = currentGiftCardList.find((item) => item.checkout_value_id === key);
            setSelectedKey(key);
            setSelectedItemDetails(selectedItem);
        } else if (selectedKey === key) {
            setSelectedKey(null);
            setSelectedItemDetails(null);
        }
    };

    return (
        <section className="checkout">
            <div className="grid grid--top-bottom grid--stretch-top">
                <div className="grid__item">
                    <section className="title"> Select a Redemption Amount </section>
                    <div className="price_grid">
                        {prices.map((el) => (
                            <div
                                className={getPriceItemClasses(el.key)}
                                onClick={() => handleClick(el.key)}
                                key={el.key}
                            >
                                ${el.price}
                            </div>
                        ))}
                    </div>

                    {selectedItemDetails && (
                        <div className={`price_details ${selectedItemDetails ? 'price_details--visible' : ''}`}>
                            <div className="flex-between">
                                <span> Redemption Amount </span>
                                <span> {formatCurrency(selectedItemDetails.cost_in_cents)} </span>
                            </div>
                            <div className="flex-between primary-color">
                                <span> Prizeout Bonus (+{selectedItemDetails.display_bonus}%) </span>
                                <span>
                                    {formatBonus(selectedItemDetails.display_bonus * selectedItemDetails.cost_in_cents)}
                                </span>
                            </div>
                            <div className="flex-between">
                                <span> You Get: </span>
                                <span> {formatCurrency(selectedItemDetails.value_in_cents)}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="grid__item">
                    <section className="checkout__calculation">
                        <CheckoutButton currentName={currentName} selectedItem={selectedItemDetails} />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');

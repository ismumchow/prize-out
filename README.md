
# Added Functionality that Dispatches an Action when User Clicks Checkout Button

## Introduction
This README outlines the newly added features to our application, specifically focusing on the functionality associated with the checkout process. These enhancements aim to improve user experience and system robustness.

## Features

1. **Disabled Checkout Button without Selection**: The checkout button remains disabled until the user makes a selection. This ensures that no invalid or empty requests are sent to the server.

2. **New Redux Slice and Thunk for POST Request**: Implemented a new slice and thunk in our Redux store. This addition handles the POST request to the server when a user completes their selection and proceeds to checkout.

3. **Checkout Button Action Dispatch**: Upon clicking the checkout button, an action is dispatched with a payload containing the user's selection. This integration ensures seamless data flow and state management.

4. **Artificial Delay with Spinner**: To emulate a real-time server response, we have introduced an artificial delay. During this period, a spinner is displayed on the checkout button, enhancing the user interface and mimicking a real server request wait time.

## Testing Procedure

To fully test and experience the new features, follow the steps below:

1. **Start the Mock Server**: Run `npm start:server`. This command initiates a mock server which simulates the backend environment.

2. **Make a Selection**: In the application, navigate to the checkout panel. Choose an item from the available gift card selections. Once a selection is made, the previously disabled checkout button will become active.

3. **Observe Checkout Process**: Click the now-active checkout button. Observe that a load spinner appears, simulating the processing of your request. This spinner emulates a real API call, complete with a fake 1-second delay implemented using `setTimeout`.

4. **Check Database Update**: Upon completion of the fake request, the `db.json` file is updated. The update includes details of your selection, such as `checkout_value_id`, `cost_in_cents`, `name`, and `value_in_cents`.

5. **Verify Functionalities**: Ensure that all the above features work as intended. The button should remain disabled until a selection is made, and upon clicking, the spinner should appear, followed by an update in the `db.json`.

Screen Shot Below: 
![image](https://github.com/ismumchow/prize-out/assets/24498139/c085654e-fb57-49f0-9555-603627f656ab)

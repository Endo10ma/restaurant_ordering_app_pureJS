#  Jimmy's Diner: Pure JavaScript Order App

This project is a single-page, responsive application that simulates a restaurant ordering process. It allows users to dynamically add and remove items from a menu, calculates the total price in real-time, and simulates a payment workflow using pure JavaScript.

---

##  Live Demo

**[ Visit the Live Site Here](https://purejs-restaurant-order.netlify.app/)**

---

## 🛠️ Key Technologies and Implementation Details

### Core JavaScript Logic

* **Local Data Management:** Utilized a static, structured **JavaScript array of objects (`menuArray`)** to serve as the local database for all menu items (name, price, ingredients, etc.). This demonstrates effective data modeling.
* **State Management:** The current customer order is maintained in the **`orderItem` array**, which is updated whenever an item is added or removed, ensuring the UI reflects the current state.
* **Dynamic Menu Rendering:** The `renderMenu` function iterates over the `menuArray` and dynamically generates the entire menu interface using **DOM manipulation** (`document.createElement`).
* **Event Delegation:** A single event listener is attached to the main `document` to handle all "add item" and "remove item" clicks efficiently using **`event.target.dataset`**.

### Array Methods & Data Handling

* **Item Retrieval:** The **`.find()`** array method is used to efficiently locate and retrieve a specific menu item object based on its ID when a user adds an item to the order.
* **Total Calculation:** The **`.reduce()`** array method is implemented to calculate the cumulative total cost of all items currently in the `orderItem` array.
* **Item Removal:** The **`.splice()`** and **`.indexOf()`** methods are used together to accurately remove a single item from the `orderItem` array, ensuring the list of orders remains synchronized with the UI.

### UI Flow & Payment Simulation

* **Visibility Control:** The application manages the visibility of the order section, the payment modal, and the success message (`thanks`) by dynamically adding and removing dedicated CSS classes (`.show`, `.hide`).
* **Form Handling:** The payment process utilizes the **`FormData` API** to cleanly collect and access user-entered information (name, card details) upon submission.
* **Personalized Confirmation:** The final thank-you message is personalized using the name captured from the payment form, providing a user-friendly confirmation experience.

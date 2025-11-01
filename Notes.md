# 🧭 Very Simple Redux Counter Example in React

## 🎥 YT Vid: [React Redux Counter Tutorial](https://youtu.be/dOkkHHuFxjM?si=TBnVHpA758cBQgt5&t=475)

⏱ Watch from **7:55 → 17:30** (≈10 mins)

---

## ⚙️ Dependencies

* `react-redux`
* `redux`

---

## ⚛️ Hooks used from React-Redux

* `useSelector()` → To read the state value from the Redux store
* `useDispatch()` → To send (dispatch) actions to the store

---

## 🧩 Step-by-Step Implementation Notes

### 1️⃣ Create a Simple Counter UI

* Create a **`Counter`** component.
* Add:

  * One **Increment** button
  * One **Decrement** button
  * A **display area** to show the counter value

Example JSX:

```jsx
<button onClick={handleIncrement}>Increment</button>
<p>{count}</p>
<button onClick={handleDecrement}>Decrement</button>
```

---

### 2️⃣ Set Up the Redux Store

1. Create a folder named `redux` (or `store`).
2. Inside it, create a file `store.js`.

**In `store.js`:**

```js
import { createStore } from 'redux';
import counterReducer from './counterReducer';

const store = createStore(counterReducer);
export default store;
```

---

### 3️⃣ Provide the Store to the App

* Open `index.js` (or the root file).
* Import `Provider` from `react-redux`.
* Wrap your `<App />` inside `<Provider store={store}>`.

```jsx
import { Provider } from 'react-redux';
import store from './redux/store';

<Provider store={store}>
  <App />
</Provider>
```

✅ This gives your **entire app access to the Redux store**.

---

### 4️⃣ Create a Reducer (Business Logic)

* Create a new file: `counterReducer.js`

**In `counterReducer.js`:**

```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
```

🧠 Reducer:

* Takes **current state** and **action**.
* Returns **new state** based on `action.type`.

---

### 5️⃣ Dispatch Actions from the Component

* Import `useDispatch` from `react-redux`.
* Create handlers for increment & decrement.

```jsx
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

const handleIncrement = () => {
  dispatch({ type: 'INCREMENT' });
};

const handleDecrement = () => {
  dispatch({ type: 'DECREMENT' });
};
```

---

### 6️⃣ Read the State Using `useSelector`

* Import `useSelector` from `react-redux`.
* Access the store’s state and show it in the UI.

```jsx
import { useSelector } from 'react-redux';

const count = useSelector((state) => state.count);
```

Now `count` always reflects the latest value from Redux.

---

### 7️⃣ Verify Flow

✅ Click **Increment** → state updates → UI shows `count + 1`
✅ Click **Decrement** → state updates → UI shows `count - 1`

Redux Data Flow Recap:

```
Button Click → dispatch(action) → reducer updates state → store → UI re-renders
```

---

### 🧱 Project Structure Overview

```
src/
 ┣ components/
 ┃ ┗ Counter.js
 ┣ redux/
 ┃ ┣ store.js
 ┃ ┗ counterReducer.js
 ┣ App.js
 ┗ index.js
```

---

### 💡 Key Concepts Learned

* Redux store holds the **central state**.
* `Provider` connects React to Redux.
* `Reducer` defines how the state changes.
* `Dispatch` sends **actions** to the reducer.
* `Selector` retrieves **state** from the store.
* Redux makes the state predictable and centralized.

---
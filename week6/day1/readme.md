`Redux` is a popular state management library for JavaScript applications, particularly those built with React. It helps you manage the state of your application in a predictable, centralized way. However, using Redux can sometimes involve a lot of boilerplate code, which can make it more difficult to get started with and maintain over time. That's where Redux Toolkit comes in.

`Redux Toolkit` is a package that helps you write Redux logic in a more efficient, intuitive way. It provides a set of utilities that simplify common Redux use cases, such as store setup, defining reducers, and creating actions. It also includes a data structure called "slices" that lets you define a subset of your application state, along with the corresponding reducer and actions, in a more modular way.

### Here are some of the benefits of using Redux Toolkit:

- It helps you write Redux code faster and with less boilerplate.
- It simplifies common Redux use cases, making them easier to understand and maintain.
- It includes features like immutability and serializability checks out of the box, helping you write more reliable code.
- It encourages best practices like using "immer" for immutable updates and "createAsyncThunk" for handling asynchronous actions.

### Now, let's take a look at the main sections of the Redux Toolkit documentation:

`Getting Started:` This section provides an overview of what Redux Toolkit is, why you might want to use it, and how to install it in your project. It also includes a quick tutorial that shows you how to set up a simple Redux store using Redux Toolkit.

`Basic Redux Concepts:` This section covers some of the core concepts behind Redux, such as actions, reducers, and the store. It also explains how Redux Toolkit simplifies these concepts and provides a more intuitive API.

`Defining Slice Reducers:` This section introduces the "slice" API, which lets you define a subset of your application state along with the corresponding reducer and actions. It shows you how to use slices to organize your code and make it more modular.

`Writing Async Logic:` This section covers how to handle asynchronous actions in Redux Toolkit using the "`createAsyncThunk`" API. It explains how to define async thunks, handle loading and error states, and dispatch multiple actions in response to async events.

`Advanced Concepts:` This section covers some more advanced Redux Toolkit features, such as custom middleware, advanced reducer logic, and using multiple stores in a single app.

Overall, Redux Toolkit is a great choice for developers who want to write Redux code more efficiently and with less boilerplate. It provides a set of powerful tools and features that can help you build more reliable, maintainable applications. If you're new to Redux, Redux Toolkit can also be a good way to learn the basics of Redux and start building more complex applications with confidence.

---

To use Redux Toolkit in a React application, you'll need to install it and import it into your
code. You can do this by running the following command in your terminal:

```bash
npm install @reduxjs/toolkit
```

Once you've installed `Redux Toolkit`, you can start using it in your code. Let's take a look at how to set up a simple Redux store using `Redux Toolkit`.

First, create a new file called store.js in your project's src directory. In this file, we'll define our Redux store using the configureStore function provided by Redux Toolkit.

```js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Add reducers here
  },
});

export default store;
```

The `configureStore` function takes an object as its argument, which includes a reducer field. The reducer field is an object that maps reducer functions to their corresponding slice of state. We'll add our reducers to this object in a moment.

Now, let's create a new file called `counterSlice.js` in the src directory. In this file, we'll define a new slice of state called counter. This slice will have a single field called value, which represents the current value of the counter.

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

The createSlice function is provided by Redux Toolkit and allows us to define a slice of state along with its corresponding reducer and actions. In this example, we define a new slice called counter with an initial state of { value: 0 }. We also define two reducer functions called increment and decrement, which will be used to update the value field of the counter slice.

Note that we export the increment and decrement actions separately, as well as the reducer itself. This allows us to use these actions in our React components to update the state of the counter slice.

Now, let's add the counter reducer to our store. In the store.js file, update the reducer field to include the counter slice:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

Finally, let's use our new Redux store in a React component. Create a new file called `Counter.js` in the `src` directory, and add the following code:

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
```

In this component, we use the useSelector hook from react-redux to read the current value of the counter slice from the Redux store. We then use the useDispatch hook to get a reference to the Redux store's dispatch function, which we can use to dispatch actions to update the counter slice.

In the return statement of the component, we display the current value of the counter slice using the count variable, and provide two buttons that dispatch the increment and decrement actions when clicked.

Finally, we can render our Counter component in our App.js file, like so:

```js
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

---

First, let's create a new file called `moviesSlice.js` in our project's src directory. In this file, we'll define a new slice of state called movies. This slice will have a single field called list, which represents an array of movies.

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    "https://free-movie-api.herokuapp.com/movies"
  );
  return response.data;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
```

In this example, we use the createAsyncThunk function to define an asynchronous thunk that fetches data from a free movie API. The fetchMovies thunk has a unique name of 'movies/fetchMovies', which will be used later to dispatch the thunk and handle its results.

We also define a new slice of state called movies with an initial state that includes an empty list array, a status field that starts as 'idle', and an error field that starts as null. We use the extraReducers field to define how our slice should respond to the three different states of our fetchMovies thunk: pending, fulfilled, and rejected. When the fetchMovies thunk is pending, we update the status field to 'loading'. When it's fulfilled, we update the status field to 'succeeded' and update the list field with the response data. And when it's rejected, we update the status field to 'failed' and set the error field to the error message.

Now, let's add the movies reducer to our store. In the store.js file, update the reducer field to include the movies slice:

```js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
```

Finally, let's use our new fetchMovies thunk in a React component. Create a new file called Movies.js in the src directory, and add the following code:

```js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./moviesSlice";

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, ...[dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
```

---

First, let's create a new file called authSlice.js in our project's src directory. In this file, we'll define a new slice of state called auth. This slice will have a single field called isLoggedIn, which represents whether the user is currently logged in or not.

```js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
```

In this example, we define a new slice of state called auth with an initial state that includes a single field called isLoggedIn. We also define two reducers: login and logout. The login reducer sets the isLoggedIn field to true, while the logout reducer sets it to false.

We then export the login and logout actions, as well as the reducer itself, so they can be used in other parts of our application.

Next, let's create a new file called userSlice.js in the src directory. In this file, we'll define a new slice of state called user. This slice will have fields called id, name, and email, which represent information about the currently logged in user.

```js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: null,
    email: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
```

In this example, we define a new slice of state called user with an initial state that includes fields for id, name, and email. We also define two reducers: setUser and clearUser. The setUser reducer takes a payload that includes an id, name, and email, and sets the corresponding fields in the state. The clearUser reducer sets all of the fields in the state to null.

We then export the setUser and clearUser actions, as well as the reducer itself, so they can be used in other parts of our application.

To use the auth and user slices of state and their associated actions, we can import them in our components like this:

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./authSlice";
import { setUser, clearUser } from "./userSlice";

function Auth() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    dispatch(login());
    dispatch(
      setUser({ id: 1, name: "John Doe", email: "johndoe@example.com" })
    );
  };
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome back, {user.name}!</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
}

export default Auth;
```

---

### LAB

Create a Redux store using Redux Toolkit that manages a simple shopping cart. Define a new slice of state called `cart` with an initial state of an empty array. Create two new reducers: `addItem` and `removeItem`, which add and remove items from the cart array, respectively. The `addItem` reducer should take a payload that includes an object representing a new item to add, with fields for `id`, `name`, and `price`. The `removeItem` reducer should take a payload that includes an `id` field representing the ID of the item to remove, and remove that item from the `cart` array. Write a React component that displays the current items in the cart and provides a form to add new items, as well as buttons to remove existing items.

Create a Redux store using Redux Toolkit that manages a list of to-do items. Define a new slice of state called `todos` with an initial state of an empty array. Create three new reducers: `addTodo`, `toggleTodo`, and `deleteTodo`. The `addTodo` reducer should take a payload that includes a `text` field representing the text of the new to-do item, and add a new object to the `todos` array with fields for `id`, `text`, and `completed` (which should be false). The toggleTodo reducer should take a payload that includes an id field representing the ID of the to-do item to toggle, and update the completed field of that item to its opposite value. The `deleteTodo` reducer should take a payload that includes an `id` field representing the ID of the to-do item to delete, and remove that item from the `todos` array. Write a React component that displays the current list of to-do items and provides a form to add new items, as well as buttons to toggle and delete existing items.

# useContext Hook in React

The `useContext` hook is a built-in hook in React that allows you to access the value of a context directly in a functional component. It simplifies the process of consuming context values without needing to use the `Context.Consumer` component.

## Table of Contents

- [useContext Hook in React](#usecontext-hook-in-react)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Creating a Context](#creating-a-context)
  - [Using the Context in a Component](#using-the-context-in-a-component)

## Overview

The `useContext` hook is used to share data or state across multiple components without passing props down manually at every level. It helps to avoid prop drilling and makes the code more maintainable.

## Creating a Context

First, you create a context using `React.createContext()`.

```jsx
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [value, setValue] = useState('Hello from context!');

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
```

## Using the Context in a Component

Next, you can use the context in a component by wrapping it with the `MyProvider` and accessing the context value using the `useContext` hook.

```jsx
import React from 'react';
import { MyProvider } from './context/MyContext';
import MyComponent from './components/MyComponent';
import './App.css';

function App() {
    return (
        <MyProvider>
            <div className="App">
                <MyComponent />
            </div>
        </MyProvider>
    );
}

export default App;
```

```jsx
import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const MyComponent = () => {
    const { value, setValue } = useContext(MyContext);

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue('Context value updated!')}>Update Value</button>
        </div>
    );
};

export default MyComponent;
```


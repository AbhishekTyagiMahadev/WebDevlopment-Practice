# React Projects

This repository contains various React projects for practicing and learning different concepts of React.

## What is React?

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.

## React Hooks

React hooks are functions that let you use state and other React features in functional components. Here is an overview of the most commonly used hooks in React:

### 1. useState
The `useState` hook lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.

**Example:**
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 2. useEffect
The `useEffect` hook lets you perform side effects in functional components. It takes a function that contains the side effect logic. The function can return a cleanup function to clean up the side effect.

**Example:**
```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <p>Count: {count}</p>;
}
```

### 3. useContext
The `useContext` hook lets you access the context value in functional components. It takes a context object (the value returned from `React.createContext`) and returns the current context value.

**Example:**
```jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return <button style={{ background: theme.background, color: theme.color }}>Click me</button>;
}
```

### 4. useReducer
The `useReducer` hook lets you manage complex state logic in functional components. It takes a reducer function and an initial state, and returns the current state and a dispatch function.

**Example:**
```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

### 5. useMemo
The `useMemo` hook lets you memoize expensive calculations in functional components. It takes a function and a dependency array, and returns a memoized value.

**Example:**
```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return <div>{sortedItems.join(', ')}</div>;
}
```

### 6. useCallback
The `useCallback` hook lets you memoize callback functions in functional components. It takes a function and a dependency array, and returns a memoized callback.

**Example:**
```jsx
import { useCallback } from 'react';

function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
```

### 7. useRef
The `useRef` hook lets you persist values between renders and access DOM elements directly in functional components. It returns a mutable ref object whose `.current` property is initialized to the passed argument (initial value).

**Example:**
```jsx
import { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```



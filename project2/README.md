# Project 2 – React Basics

## 1. Project Introduction

The project mainly focuses on creating a React application using Vite and understanding important React concepts such as JSX, functional components, state management, event handling, and Hooks such as `useState` and `useEffect`.

The practical implementation uses a simple counter-based application to understand how data changes in React and how the interface can respond to those changes.

---

## 2. Software and Tools Required

The following tools were used for developing the project:

* Node.js
* npm (Node Package Manager)
* Visual Studio Code
* React.js
* Vite
* Web Browser

---

## 3. Creating a React Application Using Vite

Vite was used to create the React project because it provides a fast and lightweight development environment.

The project was created using:

```bash
npm create vite@latest
```

After running the command, Vite asks for some project details.

### Project Name

Enter the desired project name.

For example:

```text
react-basics
```

### Select a Framework

Choose:

```text
React
```

### Select a Variant

Choose:

```text
JavaScript
```

After completing these steps, Vite creates the basic React project structure.

---

## 4. Opening the Project

Then install the required dependencies:

```bash
npm install
```

This command installs all the packages required by the project according to the `package.json` file.

---

## 5. Starting the Development Server

After installing the dependencies, the React development server can be started using:

```bash
npm run dev
```

Vite then provides a local development URL, usually similar to:

```text
http://localhost:5173/
```

The application can be opened in a web browser using this address.

---

# 6. Basic React Project Structure

The Vite React project contains several important files and folders.

### `src/`

The `src` folder contains the main source code of the React application.

### `App.jsx`

This file contains the main React component of the application.

### `main.jsx`

This is the entry point of the React application. It connects the React application with the HTML document.

### `package.json`

This file contains information about the project, installed dependencies, and available npm scripts.

### `index.html`

This is the main HTML file where the React application is mounted.

---

# 7. Importing React Hooks

The project uses React Hooks to manage application state and perform actions when state values change.

The Hooks were imported using:

```javascript
import { useEffect, useState } from 'react'
```

`useState` and `useEffect` are built-in React Hooks.

---

# 8. Functional Component

The main application was created using a functional component:

```javascript
function App() {
    // application code
}
```

A functional component is a JavaScript function that returns the user interface of a React application.

The `App` component acts as the main component of this project.

---

# 9. JSX

JSX is a syntax used in React that allows JavaScript code to describe the structure of the user interface.

For example:

```javascript
return (
    <>
        <h2>Sum: {total}</h2>
    </>
)
```

JavaScript values can be displayed inside JSX using curly braces:

```javascript
{total}
```

This allows the interface to display dynamic values.

---

# 10. useState Hook

The `useState` Hook is used to create and manage state inside a React component.

In the project, multiple counters were created:

```javascript
const [count1, setCount1] = useState(0)
const [count2, setCount2] = useState(0)
const [count3, setCount3] = useState(0)
const [total, setTotal] = useState(0)
```

Each state variable has two parts:

```text
count1     → current value
setCount1  → function used to update the value
```

The initial value of each counter is `0`.

For example:

```javascript
const [count1, setCount1] = useState(0)
```

means that `count1` initially contains `0`, and `setCount1` can be used to change its value.

---

# 11. State Updating

State values should be updated using their corresponding setter functions.

For example:

```javascript
setCount1(count1 + 1)
```

This increases the value of `count1` by one.

When the state changes, React automatically re-renders the component so that the updated value can be displayed.

---

# 12. Multiple State Variables

The project demonstrates that a React component can maintain multiple independent state variables.

For example:

```javascript
const [count1, setCount1] = useState(0)
const [count2, setCount2] = useState(0)
const [count3, setCount3] = useState(0)
```

Each counter maintains its own value and can be updated independently.

This helps in understanding how React manages different pieces of data within a component.

---

# 13. Event Handling

React allows functions to be executed when users interact with the interface.

For example, a button can update a counter:

```javascript
<button onClick={() => setCount1(count1 + 1)}>
    Count 1
</button>
```

Here:

* `onClick` detects the button click.
* `setCount1()` updates the state.
* React re-renders the component with the new value.

This introduces the concept of interactive user interfaces in React.

---

# 14. useEffect Hook

The `useEffect` Hook is used to perform an operation when certain values change.

The project uses:

```javascript
useEffect(
    () => setTotal(count1 + count2),
    [count1, count2]
)
```

The first part contains the function that should be executed:

```javascript
() => setTotal(count1 + count2)
```

The second part is the dependency array:

```javascript
[count1, count2]
```

This means the effect runs whenever `count1` or `count2` changes.

As a result, the `total` value is updated based on the two counters.

---

# 15. Calculating Values from State

The project also demonstrates how values can be calculated using state variables.

For example:

```javascript
count1 + count2
```

calculates the total of the two counters.

Another example is finding the maximum value:

```javascript
Math.max(count1, count2)
```

This demonstrates how JavaScript operations can be combined with React state.

---

# 16. Rendering Dynamic Values

React can display values stored in state directly inside JSX.

For example:

```javascript
<h2>Sum: {total}</h2>
```

Whenever `total` changes, React updates the displayed value automatically.

This demonstrates the dynamic nature of React applications.

---

# 17. Fragment

The project also uses the React Fragment syntax:

```javascript
<>
    ...
</>
```

A Fragment allows multiple elements to be returned from a component without adding an unnecessary HTML element to the output.

---

# 18. Running and Testing the Application

After completing the code, the application can be started using:

```bash
npm run dev
```

The application can then be opened in the browser.

The counter functionality can be tested by clicking the buttons and observing how the state values and calculated values change.

---

# 19. Development Workflow

The overall development process followed these steps:

1. Install Node.js and npm.
2. Create a React project using Vite.
3. Select React as the framework.
4. Select JavaScript as the project variant.
5. Open the project in Visual Studio Code.
6. Install project dependencies using `npm install`.
7. Start the development server using `npm run dev`.
8. Understand the basic React project structure.
9. Create the main functional component.
10. Import `useState` and `useEffect`.
11. Create multiple state variables.
12. Add counter functionality.
13. Handle button click events.
14. Calculate the total of counter values.
15. Use `useEffect` to update the total when dependencies change.
16. Display dynamic values using JSX.
17. Test the application in the browser.

---

# 20. Concepts Learned

Through this project, the following React concepts were introduced:

### React

React is a JavaScript library used to build interactive user interfaces using a component-based approach.

### Vite

Vite is a modern development tool used to quickly create and run frontend projects, including React applications.

### JSX

JSX allows JavaScript and UI markup to be written together inside React components.

### Functional Components

Functional components are JavaScript functions used to create parts of a React user interface.

### State

State stores information that can change during the execution of an application.

### useState

`useState` allows functional components to create and manage state.

### Event Handling

React uses event handlers such as `onClick` to respond to user interactions.

### useEffect

`useEffect` allows code to run when a component is rendered or when specified state values change.

### Dependency Array

The dependency array determines which values cause an effect to run again.

### Dynamic Rendering

React automatically updates the interface when state values change.

---

# 21. Conclusion

This project provided a basic introduction to React.js and helped in understanding how a React application is created, structured, and executed. Through the counter-based implementation, concepts such as JSX, functional components, state management, event handling, `useState`, `useEffect`, dependency arrays, and dynamic rendering were practiced.

The project serves as the foundation for further React development and prepares for more advanced concepts such as component reusability, props, routing, forms, API integration, and eventually MERN Stack application development.

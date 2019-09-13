1. What problem does the context API help solve?

Contect API solves the problem where a child component will have access to a value to the parent component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is an object the tells the reducer how to change it's state, reducers returs some state data, while an object holds the data of an application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

An application state is global, while a component state is local. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A redux-thunk is a middleware for redux, where it is written for something to return a function instead of an action, so we can write a function a get it returned by the program isntead of it having to be an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is redux-thunk, because I now know how to return a function instead of only actions.

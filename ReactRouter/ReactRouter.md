## Routing

see testingreactrouter App.js

Routing is the process by which a web application uses the current browser URL (Uniform Resource Locator) to determine what content to show a user.

![Routing](./url-dark.png)

## React Router can be installed with npm install --save react-router-dom@latest

Once you have added react-router-dom to your project, you can import one of its router components to add routing to your project. React Router provides several router components however the most common one is the BrowserRouter

## We need to import the router and create an instance of the router

> import { BrowserRouter as Router } from "react-router-dom";

then, to create an instance of a router (it must be top-level component)

> export default function App () {
> return (
> \<Router>
> /\* Application views are rendered here \*/
> \</Router>
> );
> }

Making Router the top-level component prevents URL changes from causing the page to reload.
URL changes will allow the Router to determine which of its child components to render while passing along information about the current URL’s path as props.

## Route component

Each Route component should:

- be rendered inside a Router.
- have a path prop indicating the URL path that will cause the route to render.
- wrap the component that we want to display in the event that the path prop matches.

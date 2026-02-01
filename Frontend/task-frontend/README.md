# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Task Mangager Frontend

A modern, responsive Task Mangaement UI built with React, Tailwind css and jwt.

## Tech stack
    React (Vite)
    JavaScript (ES6+)
    Tailwind CSS
    Axios
    React router dom
    React icons
    JWT authentication

## Features
    User Signup and login
    jwt-based auth.
    protected routes
    create/update/delete task
    Task complteion toggle
    Separate pending & completed task
    Responsive & clean UI
    Icons using react-icons
    secure API communication

## Run the project
    Install dependencies
        npm install
    Start development server
        npm run dev
    Frontend will run on:
        http://localhost:5173

## State Management 
    Local State handled using React useState

    API data fetched using useEffect
    Task list automatically refreshes after CRUD operations.
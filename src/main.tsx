import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateNewPost } from './page/CreateNewPost.tsx';
import RootLayout from './router/RootLayout.tsx';


const router = createBrowserRouter([{
  path: "/", element: <RootLayout />, children: [
    { path: "/", element: <App /> },
    { path: "/create", element: <CreateNewPost /> }]
}]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

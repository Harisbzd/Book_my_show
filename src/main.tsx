import { createRoot } from 'react-dom/client';
import routes from './presentation/routes/routes.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./shared/css/tailwind.css";
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const router = createBrowserRouter(routes);

const initialOptions = {
  clientId: "Abz1klgB0-aXSdTTGtIZpo7gjBMqwNLZpb7PGsLBiGCGNw7ImUBB908RneE2r2u8YB6ZiQjVUQBOr4po",
  currency: "USD",
  intent: "capture",
};

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions} >
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </React.StrictMode>,
);

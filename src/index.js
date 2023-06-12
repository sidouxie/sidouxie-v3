import React from "react";
import { createRoot } from "react-dom/client";

// import { Provider } from 'react-redux'

import "./styles/index.css";
import "./styles/styles.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
// import { store } from './store'

const container = document.getElementById("app");
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  // <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
  // </Provider>
);

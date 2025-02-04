import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";
import { Header } from "./header";
import { Gallery } from "./gallery";
import { GalleryItem } from "./gallery-item";

export function App() {
  const queryclient =  new QueryClient()

  return (
    <Router>
      <QueryClientProvider client={queryclient}>
        <div className="app container">
          <Header />
          <div className="main">
            <Switch>
              <Route path="/item/:id" component={GalleryItem} />
              <Route path="/" component={Gallery} />
            </Switch>
          </div>
        </div>
      </QueryClientProvider>
      
    </Router>
  );
}

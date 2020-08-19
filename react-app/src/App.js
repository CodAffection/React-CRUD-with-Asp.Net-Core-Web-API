import React from 'react';
import logo from './logo.svg';
import './App.css';
import DCandidates from './components/DCandidates';
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <ToastProvider autoDismiss={true}>
      <Container maxWidth="lg">
        <DCandidates />
      </Container>
    </ToastProvider>
  );
}

export default App;

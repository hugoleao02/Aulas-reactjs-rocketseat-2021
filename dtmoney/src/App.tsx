import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrasactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/globais"
import {TransactionsProvider } from "./hooks/useTransactions";




Modal.setAppElement('#root');

export function App() {
 
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

    return (
    <TransactionsProvider>
        <Header onNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard /> 

        <NewTrasactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
        /> 
        <GlobalStyle/> 
   </TransactionsProvider>
  );
}
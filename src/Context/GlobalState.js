import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State

const initialState = {
  transactions: [
  ],
};


// Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Action
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
      //add Action
      function addTransaction(transaction){
        dispatch({
            type:"add_TRANSACTION",
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )

}
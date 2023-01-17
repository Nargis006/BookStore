import { useContext } from "react";
import { createContext } from "react"

interface Store {
    
    //userStore: UserStore;
    
}

const store: Store = {
    //userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}
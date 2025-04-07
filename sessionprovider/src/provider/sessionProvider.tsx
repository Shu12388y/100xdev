import React, { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
export const SessionContext = createContext("");
function SessionProvider({ children }) {
    const [sessionId,setSessionId] = useState('')
    useEffect(()=>{
        setSessionId(uuidv4())
    },[])

  return (
    <div>
      <SessionContext.Provider value={sessionId}>
        {children}
      </SessionContext.Provider>
    </div>
  );
}

export default SessionProvider;

import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()
const AppProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(false)
    return (
        <AppContext.Provider value={{refresh, setRefresh}}>
            {children}
        </AppContext.Provider>

    )
}

export default AppProvider
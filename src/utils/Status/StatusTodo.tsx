import { FC, ReactNode, createContext, useState } from "react"

interface StatusContextType {
    modalStatus: boolean,
    toggleModalStatus: () => void
}

interface Props {
    children?: ReactNode
}

const StatusContext = createContext<StatusContextType>({ 
    modalStatus: false,
    toggleModalStatus: () => {}
})

const StatusProvider: FC<Props> = ({ children }) => {
    const [modalStatus, setModalStatus] = useState(false)
    const toggleModalStatus = () => {
        setModalStatus(!modalStatus)
    }
    return (
        <StatusContext.Provider value={{ modalStatus: false, toggleModalStatus: toggleModalStatus }}>
            {children}
        </StatusContext.Provider>
    )
}

export {
    StatusProvider,
    StatusContext,
}
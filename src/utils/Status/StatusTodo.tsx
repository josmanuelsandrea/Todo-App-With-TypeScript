import { FC, ReactNode, createContext, useState } from "react"

interface StatusContextType {
    modalStatus: boolean,
    searchStatus: boolean,
    toggleSearchStatus: () => void,
    toggleModalStatus: () => void,
}

interface Props {
    children?: ReactNode
}

const StatusContext = createContext<StatusContextType>({ 
    modalStatus: false,
    searchStatus: false,
    toggleSearchStatus: () => {},
    toggleModalStatus: () => {}
})

const StatusProvider: FC<Props> = ({ children }) => {
    const [searchStatus, setSearchStatus] = useState<boolean>(false)
    const [modalStatus, setModalStatus] = useState<boolean>(false)

    const toggleSearchStatus = () => {
        setSearchStatus(!searchStatus)
    }

    const toggleModalStatus = () => {
        setModalStatus(!modalStatus)
    }

    return (
        <StatusContext.Provider value={{ modalStatus: modalStatus, toggleModalStatus: toggleModalStatus, searchStatus: searchStatus, toggleSearchStatus: toggleSearchStatus }}>
            {children}
        </StatusContext.Provider>
    )
}

export {
    StatusProvider,
    StatusContext,
}
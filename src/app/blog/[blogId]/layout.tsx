import React from "react";

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            {children}
            <h1 style={{ backgroundColor: "red", color: "white" }}>Quảng cáo</h1>
        </>
    )
}

export default Layout;
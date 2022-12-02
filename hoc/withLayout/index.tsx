import React from "react"
import Nav from "../../components/nav"

function WithLayout(WrappedComponent: React.FC) {
    return ()=><><Nav></Nav><WrappedComponent></WrappedComponent></>
}

export default WithLayout
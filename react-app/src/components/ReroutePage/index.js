import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


export default function ReroutePage() {
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        history.push('/')

    }, [dispatch])




    return (
        <> </>
    )

}

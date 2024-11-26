import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function plants(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getPlants() {
            try {
                const response = await axios(url)
                if(!response.status == 200) throw new Error("Error fetching Plants");
                console.log(response.data)
                setData(response.data)
                
            } catch (error) {
                console.log(error.response)
                console.log(error.message)
                console.log(error.request)
                setError(error.message)
            }finally{
                setIsLoading(false)
            }
        }
        getPlants()
    }, [url])

    return { data, error, isLoading }
}

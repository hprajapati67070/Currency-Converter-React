import React from 'react'
import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, SetData] = useState({})

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=> res.json() )
        .then((res)=> SetData(res[currency]))
    }, [currency])
    return data;
}

export default useCurrencyInfo;
import useSWR from 'swr'
import fetch from 'unfetch'
import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from "next/router";

const fetcher = url => fetch(url).then(r => r.json())

const Room = () => {
    const router = useRouter()
    const result = useSWR('/api/rooms/' + router.query.id, fetcher) // api/rooms/1

    if (!result.data) return <div>aa</div>

    return <div>
        <img src={result.data.image}/>
        <div>
            {result.data.title} / {result.data.star}
        </div>
    </div>
}



export default Room

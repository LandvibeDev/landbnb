import useSWR from 'swr'
import fetch from 'unfetch'
import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from "next/router";

const fetcher = url => fetch(url).then(r => r.json())

const Rooms = () => {
    const result = useSWR('api/rooms', fetcher)
    const router = useRouter()
    if (!result.data) return <div>aa</div>

    const render = (rooms) => {

        const clickEventHandler = (id) => () => {
            router.push('rooms/' + id)
        }

        return rooms.map((room) =>
            <div key={room.id} onClick={clickEventHandler(room.id)}>
                    <Image src={room.image}/>
                    <Row>{room.title} / {room.star}</Row>
            </div>
        )
    }

    return <div>
        {
            render(result.data.rooms)
        }
    </div>
}

const Row = styled.div`

  margin: 8px;
  padding: 8px;
  font-size: 1.5rem;
  color: cornflowerblue;
`

// https://developer.mozilla.org/en-US/docs/Web/CSS/contain
const Image = styled.img`
  margin: 8px;
  padding: 8px;
  width: 400px;
  height: auto;
`

export default Rooms

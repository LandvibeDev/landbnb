import useSWR from 'swr'
import fetch from 'unfetch'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'


const fetcher = url => fetch(url).then(r => r.json())

const Rooms = () => {
  const router = useRouter()

  const { data: room } = useSWR(`/api/rooms/${router.query.id}`, fetcher)
  if (!room) return <div>loading...</div>

  return <Wrapper>
    <Image src={room.image} />
    <Information>
      <div>
        {room.title}
      </div>
      <div>
        {room.star}
      </div>
      <div>
        {room.location}
      </div>
    </Information>
  </Wrapper>
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;

  padding-left: 8px;
  padding-right: 8px;
  margin-top: 1rem;
`

const Image = styled.img`
  margin-bottom: 10px;
  margin-right: 10px;

  box-sizing: border-box;
  border-radius: 8px;
  width: 400px;
`

const Information = styled.div`
`

export default Rooms

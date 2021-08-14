// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import rooms from './rooms.json'

export default function roomsHandler(req, res) {
  console.log(rooms)

  res.status(200).json(rooms)
}

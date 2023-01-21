import { Outlet } from "react-router-dom"

const PrivateRouter = () => {
  const user = true
  return (
    <div>{user && <Outlet />}</div>
  )
}

export default PrivateRouter
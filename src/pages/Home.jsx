import { Outlet } from "react-router"
import Cards from "../components/Cards"

export const Home = () => {
  return (
    <div className="flex justify-between mt-4">
      <div className="grid grid-cols-3 gap-4 ml-4">
        <Cards />
      </div>
      <div style={{width: '30%'}}>
        <Outlet/>
      </div>
    </div>
  )
}

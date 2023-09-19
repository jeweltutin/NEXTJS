'use client'
import { ordered, restocked } from "@/app/redux/state/features/icecream/icecreamSlice";
import { useDispatch, useSelector } from "react-redux"

const IcecreamView = () => {
  const totalIcecream = useSelector((state:any) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream - {totalIcecream}</h2><br/>
      <button onClick={() => dispatch(ordered()) } className="btn btn-success">Order icecream</button><br/><br/>
      <button onClick={() => dispatch(restocked(10))} className="btn btn-success">Restock icecream</button><br/>
    </div>
  )
}

export default IcecreamView


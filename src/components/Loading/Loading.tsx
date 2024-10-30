import { ClipLoader } from "react-spinners";

export default function LoadingComp() {
  return (
    <div className="mt-3">
      <p style={{float: "left", marginRight: "10px", marginTop: "10px"}}>Please wait...   </p>
      <ClipLoader />  
    </div>
  )
}

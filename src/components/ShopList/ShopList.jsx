
import { PhoneItem, TVItem, LaptopItem, SmartwatchItem } from "./ShopItem"
import { phones, tvs, laptops, smartwatches } from "./data"

export default function ShopList(props) {


  return (
    <div className="flex gap-20 flex-wrap">
      {props.category == "phones" && phones.map(PhoneItem)}
      {props.category == "televisions" && tvs.map(TVItem)}
      {props.category == "laptops" && laptops.map(LaptopItem)}
      {props.category == "smartwatches" && smartwatches.map(SmartwatchItem)}
    </div>
  )
}
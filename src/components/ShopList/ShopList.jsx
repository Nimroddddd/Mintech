import ShopItem from "./ShopItem"

const devices = [
  {
    name: "iPhone 16",
    img: "ip16.jpg",
    price: "699"
  },
  {
    name: "iPhone 16 Pro",
    img: "ip16p.webp",
    price: "649"
  },
  {
    name: "iPhone 16 Pro Max",
    img: "ip16pm.jpg",
    price: "799"
  },
  {
    name: "iPhone 15",
    img: "ip15.webp",
    price: "599"
  },
  {
    name: "iPhone 14",
    img: "ip14.webp",
    price: "499.99"
  },
  {
    name: "Samsung S22",
    img: "s22.webp",
    price: "699"
  }
]

export default function ShopList(props) {

  return (
    <div className="flex gap-20 flex-wrap">
      {props.category == "phones" ? devices.map(ShopItem) : <h1>not Found</h1>}
    </div>
  )
}
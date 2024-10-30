import EachCategory from "./EachCategory"

export default function Featured() {
  return (
    <div className="py-11 px-32 text-black">
      <h1 className="text-3xl text-center mb-7">Featured Products</h1>
      <div className="flex flex-wrap gap-10">
        <EachCategory img="laptop.webp" category="Laptops" />
        <EachCategory img="phones.jpg" category="Phones" />
        <EachCategory img="tv.avif" category="Televisions" />
        <EachCategory img="watch.webp" category="Smartwatches" />
      </div>
    </div>
  )
}
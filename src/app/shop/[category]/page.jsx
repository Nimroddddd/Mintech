import ShopList from "@/components/ShopList/ShopList"
import ShopCategory from "@/components/ShopList/ShopFilter/ShopCategory"
import ShopSort from "@/components/ShopList/ShopFilter/ShopSort"

export async function generateStaticParams() {
  // Define all the possible category values you want to pre-render
  const categories = ['phones', 'laptops', 'smartwatches', 'televisions']; // Replace with actual categories

  return categories.map((category) => ({
    category,
  }));
}


export default async function Shop({params}) {
  const {category} = await params;
  return (
    <div className="mt-10 flex flex-col py-10 px-14">
      <div className="flex justify-evenly mb-20">
        <div className="min-w-32">
          <ShopSort />
        </div>
        <div className="min-w-32">
          <ShopCategory category={category} />
        </div>
      </div>
      <ShopList category={category}/>
    </div>
  )
}
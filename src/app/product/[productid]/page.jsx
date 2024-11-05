import axios from "axios";

export async function generateStaticParams() {
  // Define all the possible category values you want to pre-render
  // const response = await axios.get(`${api}productids`)
  const productids = [
    'ph_ip16p',  'ph_ss22', 'la_msiT',
    'la_msi63',  'la_asx5', 'la_ase2',
    'la_ase4',   'la_pv15', 'la_hp15',
    'la_pv13',   'ph_ip16', 'ph_ip15',
    'ph_ip14',   'wa_s544', 'wa_s440',
    'wa_se44',   'wa_s945', 'ph_ip16pm',
    'tv_s65i', 'tv_s43i', 'tv_s50i',
    'tv_s85i',   'tv_s43i_2', 'tv_s32i',
    'tv_s55i_2', 'tv_s55i'
  ]

  return productids.map((productid) => ({
    productid,
  }));
}

export default async function ProductDetail({params}) {
  const {productid} = await params
  const api = process.env.NEXT_PUBLIC_API_URL
  const response = await axios.get(`${api}product/${productid}`)
  const {category, name, price, img, description} = response.data;
  return(
    <div className="flex flex-col md:flex-row py-5 px-5 gap-10 mt-20">
      <div className="basis-full flex items-center justify-center">
        <img src={`/${category}/${img}`} className="" />
      </div>
      <div className="basis-full flex flex-col px-10">
        <p className="text-2xl mb-4 font-bold">{name}</p>
        <p className="text-xl font-bold mb-6">${price}</p>
        <hr />
        <p className="mt-6">{description}</p>
        <div className="flex flex-row gap-2 w-[60%]">
          <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
          <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Buy Now</button>
        </div>
        <p className="font-bold text-xl mt-12 mb-5">Shipping options</p>
        <p><span className="font-bold">Fast delivery: </span>Delivery between 5-7 days.</p>
        <p><span className="font-bold">Fast delivery: </span>Delivery between 5-7 days.</p>
        <p><span className="font-bold">Fast delivery: </span>Delivery between 5-7 days.</p>
      </div>
    </div>
  )
}
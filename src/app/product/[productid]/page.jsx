// import axios from "axios";

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
    'tv_s85i',   'tv_s43i', 'tv_s32i',
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
  const {category, name, price, img, description} = response.data
  return(
    <div className="flex py-5 px-5 gap-3">
      <div className="border border-black basis-full">
        <h1>hello</h1>
        <img src={`/${category}/${img}`} className="h-[600px] w-[700px]" />
      </div>
      <div className="basis-full">
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{description}</p>

      </div>
    </div>
  )
}
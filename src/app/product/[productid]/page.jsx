import ProductDetail from "@/components/ProductDetail";


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

export default async function ProductDetailPage({params}) {
  const {productid} = await params;
  return <ProductDetail productid={productid} />
}
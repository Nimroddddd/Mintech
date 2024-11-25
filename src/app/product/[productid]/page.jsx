import ProductDetail from "@/components/ProductDetail";


export async function generateStaticParams() {
  const productids = [
    'ph_ip16p',    'ph_ip15',   'ph_iph16',
    'ph_ipho16pm', 'ph_ip14',   'ph_ss22',
    'tv_s50i',     'tv_s85i',   'tv_s43i_2',
    'tv_s32i',     'tv_s55i_2', 'la_msiT',
    'la_msi63',    'la_asx5',   'la_ase2',
    'la_ase4',     'tvs_s43i',  'la_pv15',
    'la_hp15',     'la_pv13',   'wa_s544',
    'wa_s440',     'wa_se44',   'wa_s945',
    'tv_s65i',     'tvs_s55i'
  ]

  return productids.map((productid) => ({
    productid,
  }));
}

export default async function ProductDetailPage({params}) {
  const { productid } = await params;
  return <ProductDetail productid={productid} />
}
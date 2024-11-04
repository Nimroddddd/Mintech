import CartItem from "./CartItem"

export default function DisplayCart() {

  const placeholderProduct = {
    id: 6,
    category: 'phones',
    name: 'Samsung S22',
    product_id: 'ph_ss22',
    price: 699,
    img: 's22.webp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }

  return (
    <div className="w-full h-screen bg-black bg-opacity-50 absolute">
      <div className="flex flex-col items-center ml-[70%] bg-background">
        <div className="w-full text-center">
          <p className="text-2xl mb-5">My Cart</p>
          <hr />
        </div>
        <p>hello</p>
        <p>hello</p>
        <CartItem product={placeholderProduct} />
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <div>
      <div className="bg-cover bg-center h-screen flex flex-col items-center pt-48" style={{backgroundImage: 'url("background.jpg")'}} >
        <p className="text-5xl">Innovative Tech, Delivered Fast</p>
        <p className="text-xl mt-3">Elevate Your Life with Cutting-Edge Gadgets.</p>
        <button className="text-2xl py-2 px-10 border-2 border-yellow-300 mt-24 hover:bg-yellow-300 duration-300 text-yellow-300 hover:text-white">Shop now</button>
      </div>
    </div>
  )
}
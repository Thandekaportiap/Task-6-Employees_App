import Logo from "./logo.png"

const navbar = () =>{
    return (
        <>
       <nav class="bg-[#4E91FD] text-white py-3 px-4 flex items-center justify-between">
    <a class="font-bold text-xl tracking-tight" href="#">AW.io</a>
    <div class="flex items-center">
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
    </div>
</nav>
        </>
    )
}

export default navbar
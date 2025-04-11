import Image from "next/image";

export const Navbar = () =>{
    return(
        <div className="flex flex-row justify-between items-center p-4">
            <Image src="leftArrow.svg" alt="leftArrowIcon"  width={14} height={12} className="cursor-pointer" />
            <p className="font-semibold text-lg">Checkout</p>
            <p className="text-sm cursor-pointer">Укр</p>
        </div>
    )
}
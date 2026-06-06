import { ArrowUpRight } from "lucide-react";

const leftContent = () => {
    return (
        <div className='w-1/3 h-full px-10 py-16 flex flex-col justify-between'>
            <div className="flex flex-col gap-5">
                <h1 className="text-7xl font-bold">Prospective <br /> <span className="text-amber-500 bold">Customer</span> <br /> segmentation</h1>
                <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est aspernatur, dolor laudantium tenetur sequi id?</p>
            </div>
            <div>
                <ArrowUpRight size={50} />
            </div>
        </div>
    )
}

export default leftContent
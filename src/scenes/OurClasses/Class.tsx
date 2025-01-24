type Props = {
    name: string,
    description?: string,
    image: string
}

const Class = ({ name, description="No Descrition at a time", image }: Props) => {
    const overlayStyle = `p-5 absolute z-30 flex
    h-[300px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-orange-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
    return (
        <li className="relative mx-5 inline-block h-[300px] w-[450px]">
            <div className={overlayStyle}>
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>  
            <img src={image} alt={`${image}`}/>
        </li>
    )
}

export default Class
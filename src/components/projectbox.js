import Image from "next/image"

export default function ProjectBox(props){
    return(
        <div className="flex justify-center items-center flex-col my-[70px] mx-0">
            <a href={props.content} className="text-white font-[520] text-[1.2rem] p-1" target="_blank">
                <Image src={props.image} className="w-[100px] h-[100px]"></Image>
            </a>
            <a href={props.content} className="text-white font-[520] text-[1.2rem] p-1 hover:text-hoverpurple" target="_blank">{props.title}</a>
            <p className="text-white font-[520] text-center text-[1.2rem] py-2 cursor-default">{props.description}</p>
        </div>
    )
}
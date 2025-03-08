import Image from "next/image"

export default function ContactBox(props){
    return(
        <div className="flex justify-center items-center flex-col my-[70px] mx-0">
            <Image src={props.image} className="w-[100px] h-[100px]"></Image>
            <p className="text-white font-[520] text-justify text-[1.2rem] py-2 cursor-default">{props.text}</p>
            <a href={props.content} className="text-linkblue font-[520] text-[1.2rem] p-1 hover:text-hoverpurple hover:bg-white hover:rounded-3xl" target="_blank">
                {props.itemtext}
            </a>
        </div>
    )
}
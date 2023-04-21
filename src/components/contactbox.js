import Image from "next/image"

export default function ContactBox(props){
    return(
        <div class="flex justify-center items-center flex-col my-[70px] mx-0">
            <Image src={props.image} class="w-[100px] h-[100px]"></Image>
            <p class="text-white font-[520] text-justify text-[1.2rem] py-2 cursor-default">{props.text}</p>
            <a href={props.content} class="text-linkblue font-[520] text-[1.2rem] p-1 hover:text-hoverpurple hover:bg-white hover:rounded-3xl" target="_blank">
                {props.itemtext}
            </a>
        </div>
    )
}
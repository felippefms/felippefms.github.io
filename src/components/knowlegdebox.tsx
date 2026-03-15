type KnowledgeBoxProps = {
    image: string;
    text?: string;
    description?: string;
    content?: string;
    itemtext?: string;
};

export default function KnowledgeBox({ image, text, description, content, itemtext }: KnowledgeBoxProps) {
    return (
        <div className="flex justify-center items-center flex-col my-17.5 mx-0">
            <img src={image} alt={text} className="w-25 h-25" />
            <p className="text-white font-[520] text-justify text-[1.2rem] py-2 cursor-default">{text}</p>
            <p className="text-white font-[520] text-[1.2rem] py-2 cursor-default text-center">{description}</p>
            <a href={content} className="text-linkblue font-[520] text-[1.2rem] p-1 hover:text-hoverpurple hover:bg-white hover:rounded-3xl" target="_blank">
                {itemtext}
            </a>
        </div>
    )
}
type ProjectBoxProps = {
  image: string;
  content: string;
  title: string;
  description: string;
};

export default function ProjectBox({ image, content, title, description }: ProjectBoxProps) {
    return(
        <div className="flex justify-center items-center flex-col my-17.5 mx-0">
            <a href={content} className="text-white font-[520] text-[1.2rem] p-1" target="_blank">
                <img src={image} alt={title} className="w-25 h-25" />
            </a>
            <a href={content} className="text-white font-[520] text-[1.2rem] p-1 hover:text-hoverpurple" target="_blank">{title}</a>
            <p className="text-white font-[520] text-center text-[1.2rem] py-2 cursor-default">{description}</p>
        </div>
    )
}
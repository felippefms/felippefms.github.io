type ContactBoxProps = {
  image: string;
  text: string;
  content: string;
  itemtext: string;
  target?: string;
};

export default function ContactBox({ image, text, content, itemtext, target = "_blank", }: ContactBoxProps) {
  return (
    <div className="flex justify-center items-center flex-col my-17.5 mx-0">
      <img src={image} alt={text} className="w-25 h-25" />
      <p className="text-white font-[520] text-justify text-[1.2rem] py-2 cursor-default"> {text} </p>
      <a href={content} target={target} rel="noopener noreferrer" className="text-linkblue font-[520] text-[1.2rem] p-1 hover:text-hoverpurple hover:bg-white hover:rounded-3xl" >
        {itemtext}
      </a>
    </div>
  );
}
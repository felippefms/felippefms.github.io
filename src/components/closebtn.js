import Image from "next/image";
import Link from "next/link";
import closebtn from "../imgs/close.png";

function CloseBtn(){
    return(
        <button className="absolute right-8 top-12">
            <Link href="/">
                <Image
                src={closebtn}
                width={40}
                height={40}
                >
                </Image>
            </Link>
        </button>
    )
}

export default CloseBtn;
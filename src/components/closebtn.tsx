import { Link } from "@tanstack/react-router";
import closebtn from "@/media/images/close.png";

function CloseBtn() {
  return (
    <Link to="/" className="absolute right-8 top-12" >
      <img src={closebtn} width={40} height={40} alt="Fechar" />
    </Link>
  );
}

export default CloseBtn;
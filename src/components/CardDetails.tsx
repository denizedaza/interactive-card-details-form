import Image from "next/image";
import backgroundImg from "/images/bg-main-desktop.png";

function CardDetails() {
  return (
    <>
      <Image src={backgroundImg} className="grid grid-cols-2" />
      <h1>Hello, the CardDetails component!</h1>
    </>
  );
}

export default CardDetails;

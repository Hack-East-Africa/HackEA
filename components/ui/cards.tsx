import { FC } from "react"
interface CardProps {
    width?: string;
    height?: string;
    children:React.ReactNode;

}
const Card: FC<CardProps> = ({width, height, children})=>{
    return (
   <div className={`bg-[#B89068] text-[#F7DDA4] rounded-xl w-[${width}px] h-[${height}px] p-2 m-2 `}>
{children}
   </div>
    );
};

export default Card;
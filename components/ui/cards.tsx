import { cn } from "@/utils/cn";
import { FC } from "react"
interface CardProps {
    width?: string;
    height?: string;
    style?:string
    children:React.ReactNode;

}
const Card: FC<CardProps> = ({width, height, children, style})=>{
    return (
   <div className={cn(`bg-[#B89068] text-[#F7DDA4] rounded-xl w-[${width}px] h-[${height}px] p-2 m-2  `, style )}>
{children}
   </div>
    );
};

export default Card;
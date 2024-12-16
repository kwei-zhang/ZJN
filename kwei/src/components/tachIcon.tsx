import Image from "next/image";

interface TachIconProps {
  name: string;
  className?: string;
}

export const TachIcon = ({ name, className }: TachIconProps) => {
    return (
        <div>
            <Image src={`/${name}.png`} alt={name} width={20} height={20} className={`rounded-full border border-white ${className}`} />
        </div>
    )
}
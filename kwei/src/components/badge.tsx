import { Badge } from "@/components/ui/badge"
import Image from "next/image"
interface BadgeTagProps {
    name: string;
    className?: string;
  }

export function BadgeTag({ name, className }: BadgeTagProps) {
    return (
        <Badge className={`${className} h-8 bg-gray-700`} variant="outline">
            <Image src={`/${name.toLowerCase()}.svg`} alt={name} width={20} height={20} className="" />
            <span className="ml-2">{name}</span>
        </Badge>
    )
}
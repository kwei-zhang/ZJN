import { Badge } from "@/components/ui/badge"
import Image from "next/image"
interface BadgeTagProps {
    name: string;
    className?: string;
  }

export function BadgeTag({ name, className }: BadgeTagProps) {
    return (
        <Badge className={`${className}`} variant="outline">
            <Image src={`/${name}.png`} alt={name} width={20} height={20} className="rounded-full" />
            <span className="ml-2">{name}</span>
        </Badge>
    )
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ZJNAvatar() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export function ZJNAvatarLarge() {
    return (
        <Avatar className="w-24 h-24 m-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export function UofTAvatar() {
    return (
        <Avatar className="w-24 h-24 m-2 rounded-full bg-white">
            <AvatarImage src='/UT.png' />
            <AvatarFallback>UT</AvatarFallback>
        </Avatar>
    )
}
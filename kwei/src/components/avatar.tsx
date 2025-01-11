import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ZJNAvatar() {
    return (
        <Avatar className="w-16 h-16 rounded-full">
            <AvatarImage src="/ZJN.jpg" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export function ZJNAvatarLarge() {
    return (
        <Avatar className="w-24 h-24 m-2">
            <AvatarImage src="/ZJN.jpg" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export function ZJNsubAvatar() {
    return (
        <Avatar className="w-16 h-16 rounded-full">
            <AvatarImage src="/ZJN_sub.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export function ZJNsubAvatarLarge() {
    return (
        <Avatar className="w-24 h-24 rounded-full">
            <AvatarImage src="/ZJN_sub.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export function UofTAvatar() {
    return (
        <Avatar className="w-24 h-24 m-2 rounded-full bg-gray-200">
            <AvatarImage src='/UT.png' />
            <AvatarFallback>UT</AvatarFallback>
        </Avatar>
    )
}
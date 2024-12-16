import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ZJNAvatarLarge } from "../avatar"


export function InfoCardZJN() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Hello, <br /> <br /> I am ZJN</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between ">
                <p>Card Content</p>
                <ZJNAvatarLarge />
            </CardContent>
            <CardFooter>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="m5 12 14 14 4-4"/><path d="M19 18v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"/></svg> */}
            </CardFooter>
        </Card>
    )
}

export function InfoCardEDU() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export function InfoCardWORK() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Work</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}
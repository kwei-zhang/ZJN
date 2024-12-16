import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ZJNAvatar } from "../avatar"


export function PersonalCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row items-center justify-between">
                    <ZJNAvatar />
                    <CardTitle>Hello, I am ZJN</CardTitle>
                </div>
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
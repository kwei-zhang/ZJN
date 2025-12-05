import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { UofTAvatar, ZJNsubAvatarLarge } from "../avatar"
import { NameAnime } from "./nameAnime"


export function InfoCardZJN() {
    return (
        <Card className="w-full h-full">
            <CardHeader className="pb-0">
                <CardTitle>Hello, I am <NameAnime/></CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between ">
                <p className="mr-10">
                    I am a Master student majoring in Electrical & Computer Engineering.
                    My primary areas of interest include computer security, distributed systems and data science.
                    Other than that, I am also interested in open-source software and gaming.
                </p>
                {/* <ZJNsubAvatarLarge/> */}
            </CardContent>
        </Card>
    )
}
 
export function InfoCardEDU() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between ">
                <div>I am currently enrolled in the <b>University of Toronto</b>. I have completed Bachelor of Science in <b>Computer Science</b>, currently pursuing a Master of Engineering in <b>Electrical & Computer Engineering</b>.
                    Here are some of my favorite topics:
                    <br />
                    <br />
                    <ul>
                        <li><b>Computer and Network Security</b></li>
                        <li><b>Blockchain Technology</b></li>
                        <li><b>Distributed Software Systems</b></li>
                        <li><b>Artificial Intelligence</b></li>
                    </ul>
                </div>
                <UofTAvatar/>
            </CardContent>
        </Card>
    )
}

export function InfoCardContact() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>Here are some of my contact information</CardDescription>
            </CardHeader>
            <CardContent>
                <li><b>Email:</b> <a href="mailto:zhangkw0622@gmail.com">zhangkw0622@gmail.com</a></li>
                <li><b>GPG Key:</b> <a href="https://keys.openpgp.org/search?q=zhangkw0622@gmail.com">OpenPGP Key</a></li>
                <li><b>Linkedin:</b> <a href="https://www.linkedin.com/in/kaiwei-zhang-087810269/">Kaiwei Zhang</a></li>
            </CardContent>
        </Card>
    )
}
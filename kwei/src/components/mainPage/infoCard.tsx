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
                    I am a first year Master student in Electrical & Computer Engineering, currently based in Toronto. 
                    My primary areas of interest include computer security, machine learning and various technology stacks. 
                    Additionally, I am passionate about contributing to open-source projects. Feel free to reach out and connect!
                </p>
                {/* <ZJNsubAvatarLarge/> */}
            </CardContent>
            <CardFooter>
                <p></p>
            </CardFooter>
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
                        <li><b>Computer Security</b></li>
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

export function InfoCardWORK() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Work</CardTitle>
                <CardDescription>Experience</CardDescription>
            </CardHeader>
            <CardContent>
                I am currently seeking for internship opportunities. Here are some of my previous experiences:
                <br /><br />
                <ul>
                    <li><b>AI Developer at the Ministry of Education Ontario</b></li>
                    <li><b>Teaching Assistant at the University of Toronto</b></li>
                </ul>
            </CardContent>
        </Card>
    )
}
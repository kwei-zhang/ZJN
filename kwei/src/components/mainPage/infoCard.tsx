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
                    I am a fourth-year computer science student specializing in web development, currently based in Toronto. 
                    My primary areas of interest include web programming, web security, and various technology stacks, particularly those leveraging APIs. 
                    Additionally, I am passionate about contributing to open-source projects. Feel free to reach out and connect!
                </p>
                <ZJNsubAvatarLarge/>
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
                <div>I am currently enrolled in the <b>University of Toronto</b>. I am pursuing a Bachelor of Science in <b>Computer Science</b>, expected to graduate in 2025.
                    I have taken a variety of courses in the past 4 years, my favorite ones are:
                    <br />
                    <br />
                    <ul>
                        <li><b>Web Programming</b></li>
                        <li><b>Computer Networks and Security</b></li>
                        <li><b>Distributed Software Systems</b></li>
                        <li><b>Artificial Intelligence</b></li>
                    </ul>
                    <br />
                    Additionally, I recently received the offer from the <b>University of Toronto</b> for the <b>Master of Engineering in Mechanical & Industrial Engineering</b> program.
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
                <CardDescription>Co-op Experience</CardDescription>
            </CardHeader>
            <CardContent>
                I am currently serving as an AI Developer at the Ministry of Education Ontario. In this capacity, I develop and maintain a variety of websites for the ministry. My core responsibilities include:
                <br /><br />
                <ul>
                    <li><b>Integrating AI technologies including LLMs models to enhance user experience and automate document processing workflows</b></li>
                    <li><b>Refactoring legacy websites using modern tech stacks to improve security, performance, and maintainability</b></li>
                    <li><b>Implementing robust CI/CD pipelines using Azure DevOps, including automated testing and deployment processes</b></li>
                </ul>
            </CardContent>
        </Card>
    )
}
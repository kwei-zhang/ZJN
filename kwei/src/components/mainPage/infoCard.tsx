import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { UofTAvatar, ZJNsubAvatarLarge } from "../avatar"


export function InfoCardZJN() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Hello, <br /> <br /> I am ZJN</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between ">
                <p>
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
                <div>I am currently enrolled in the University of Toronto. I am pursuing a Bachelor of Science in Computer Science, expected to graduate in 2025.
                    I have taken a variety of courses in the past 4 years, including but not limited to:
                    <br />
                    <br />
                    <ul>
                        <li><b>Software Engineering</b></li>
                        <li><b>Web Programming</b></li>
                        <li><b>Web Security</b></li>
                        <li><b>Computer Networks</b></li>
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
                <CardDescription>Co-op Experience</CardDescription>
            </CardHeader>
            <CardContent>
                I am currently serving as an AI Developer at the Ministry of Education in Ontario. In this capacity, I develop and maintain a variety of websites for the ministry. My core responsibilities include:
                <br /><br />
                <ul>
                    <li><b>Implementing new AI features to enhance user experience</b></li>
                    <li><b>Refactoring websites to enhance security and efficiency by using modern technology stacks</b></li>
                    <li><b>Maintaining websites through CI/CD pipelines and regular SSL certificate updates</b></li>
                </ul>
            </CardContent>
        </Card>
    )
}
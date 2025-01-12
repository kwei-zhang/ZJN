import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import { ZJNAvatar } from "../avatar"
import { Github, AtSign, Linkedin } from "lucide-react"


export function PersonalCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row items-center justify-between">
                    <ZJNAvatar />
                </div>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between">
                <AtSign onClick={() => window.open('mailto:zhangkw0622@gmail.com')}/>
                <Github onClick={() => window.open('https://github.com/kwei-zhang')}/>
                <Linkedin onClick={() => window.open('https://www.linkedin.com/in/kevin-zhang-087810269/')}/>
            </CardContent>
        </Card>
    )
}
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useRouter } from "next/navigation";

interface CourseCardProps { 
    courseCode: string;
    courseName: string;
    courseDescription: string;
}

export function TACourseCard({ courseCode, courseName, courseDescription }: CourseCardProps){
    const router = useRouter();
    return (
        <Card className="w-1/3 m-2" onClick={() => router.push(`/ta/${courseCode}`)}>
            <CardHeader>
                <CardTitle>{courseCode} - {courseName}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-row items-center justify-between">
                <CardDescription>{courseDescription}</CardDescription>
            </CardContent>
        </Card>
    )
}
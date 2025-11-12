import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";
import { CourseCard } from "@/components/courses/courseCard";
export default function Courseworks() {
    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Course Works
            </h2>
            <p className="text-muted-foreground">
                A collection of my course works from University, please do not use them for any of your own work.
            </p>
        </MotionWrapperVertical>

        <Separator className="w-10/12 mt-4" />

        <MotionWrapperVertical delay={0.6}>
            <div className="flex flex-row flex-wrap justify-center m-4">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Courses
                </h2>
            </div>

            <div className="flex flex-row flex-wrap justify-center m-4">
                <CourseCard courseCode="CSCB36" courseName="Introduction to the Theory of Computation" courseDescription="Mathematical induction with emphasis on applications relevant to computer science."/>
                <CourseCard courseCode="CSCB09" courseName="Software Tools and Systems Programming" courseDescription="Software techniques in a Unix-style environment, using scripting languages and a machine-oriented programming language."/>
                <CourseCard courseCode="CSCB58" courseName="Computer Organization" courseDescription="Principles of the design and operation of digital computers."/>
                <CourseCard courseCode="CSCB63" courseName="Design and Analysis of Data Structures" courseDescription="Design, analysis, implementation and comparison of efficient data structures for common abstract data types."/>
                <CourseCard courseCode="CSCC01" courseName="Introduction to Software Engineering" courseDescription="Introduction to software development methodologies with an emphasis on agile development methods appropriate for rapidly-moving projects."/>
                <CourseCard courseCode="CSCC09" courseName="Programming on the Web" courseDescription="An introduction to software development on the web."/>
                <CourseCard courseCode="CSCC10" courseName="Human-Computer Interaction" courseDescription="The course will provide an introduction to the field of Human-Computer Interaction (HCI) with emphasis on guidelines, principles, methodologies, and tools and techniques for analyzing, designing and evaluating user interfaces."/>
                <CourseCard courseCode="CSCC11" courseName="Introduction to Machine Learning and Data Mining" courseDescription="An introduction to methods for automated learning of relationships on the basis of empirical data."/>
                <CourseCard courseCode="CSCC37" courseName="Introduction to Numerical Algorithms for Computational Mathematics" courseDescription="An introduction to computational methods for solving problems in linear algebra, non-linear equations, approximation and integration."/>
                <CourseCard courseCode="CSCC43" courseName="Introduction to Databases" courseDescription="Introduction to database management systems. The relational data model. Relational algebra."/>
                <CourseCard courseCode="CSCC63" courseName="Computability and Computational Complexity" courseDescription="Introduction to the theory of computability: Turing machines, Church's thesis, computable and non-computable functions, recursive and recursively enumerable sets, reducibility."/>
                <CourseCard courseCode="CSCC69" courseName="Operating Systems" courseDescription="Principles of operating systems. The operating system as a control program and as a resource allocator. The concept of a process and concurrency problem: synchronization, mutual exclusion, deadlock."/>
                <CourseCard courseCode="CSCC73" courseName="Algorithm Design and Analysis" courseDescription="Standard algorithm design techniques: divide-and-conquer, greedy strategies, dynamic programming, linear programming, randomization, and possibly others."/>
                <CourseCard courseCode="CSCD01" courseName="Engineering Large Software Systems" courseDescription="An introduction to the theory and practice of large-scale software system design, development, and deployment."/>
                <CourseCard courseCode="CSCD03" courseName="Social Impact of Information Technology" courseDescription="The trade-offs between benefits and risks to society of information systems, and related issues in ethics and public policy."/>
                <CourseCard courseCode="CSCD27" courseName="Computer and Network Security" courseDescription="Public and symmetric key algorithms and their application; key management and certification; authentication protocols; digital signatures and data integrity..."/>
                <CourseCard courseCode="CSCD58" courseName="Computer Networks" courseDescription="Computer communication network principles and practice."/>
                <CourseCard courseCode="CSCD84" courseName="Artificial Intelligence" courseDescription="A study of the theories and algorithms of Artificial Intelligence."/>
                <CourseCard courseCode="ECE1508" courseName="Applied Deep Learning" courseDescription="The course provides a fundamental understanding on Computational Learning, its functionality, and its deployment towards building information processing units."/>
                <CourseCard courseCode="MIE1628" courseName="Cloud-Based Data Analytics" courseDescription="The course is designed to equip students with fundamental concepts and practical skills in Cloud-based Data Analytics. "/>
            </div>
        </MotionWrapperVertical>
        </>
    )
}
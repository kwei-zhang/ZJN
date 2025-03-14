"use client"
import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link";

export default function CSCB20Notes() {
    let i = 0;
    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                CSCB20 Notes
            </h2>
            <p className="text-muted-foreground">
                A list of notes for CSCB20
            </p>
            
        </MotionWrapperVertical>

        <Separator className="w-10/12 m-4" />

        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/12">Week Number</TableHead>
            <TableHead>Topic</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 1</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=1" className="text-blue-500 hover:text-blue-700">Week 1</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 2</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=2" className="text-blue-500 hover:text-blue-700">Week 2</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 3</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=3" className="text-blue-500 hover:text-blue-700">Week 3</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 4</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=4" className="text-blue-500 hover:text-blue-700">Week 4</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 5</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=5" className="text-blue-500 hover:text-blue-700">Week 5</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 6</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=6" className="text-blue-500 hover:text-blue-700">Week 6</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 7</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=7" className="text-blue-500 hover:text-blue-700">Week 7</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 8</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=8" className="text-blue-500 hover:text-blue-700">Week 8</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 9</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=9" className="text-blue-500 hover:text-blue-700">Week 9</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 10</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=10" className="text-blue-500 hover:text-blue-700">Week 10</Link></TableCell>
            </TableRow>
            <TableRow key={i++}>
              <TableCell className="font-medium"> Week 11</TableCell>
              <TableCell><Link href="/api/TA/CSCB20?week=11" className="text-blue-500 hover:text-blue-700">Week 11</Link></TableCell>
            </TableRow>
            

        </TableBody>
      </Table>
        </>
    )
}
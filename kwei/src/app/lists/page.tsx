"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DataTable } from './dataTable';
import { columns, Payment } from '../../types/columns';
import { MotionWrapperVertical } from '@/components/motion';
import moment from 'moment';

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        name: "John Doe",
        status: "pending",
        progress: 60,
        description: "John Doe is a software engineer",
        startDate: moment().format('YYYY-MM-DD'),
      },
    ]
}

export default function Lists() {
    const [data, setData] = useState<Payment[]>([]);
    
    useEffect(() => {
        getData().then(setData);
    }, []);

    return (
        <div className="w-full">
        <MotionWrapperVertical delay={0.6}>
            <DataTable columns={columns} data={data} />
        </MotionWrapperVertical>
        <Link href="/lists/todo" className="button">Todo</Link>
        <Link href="/lists/interests" className="button">Interests</Link>
        </div>
    );
}

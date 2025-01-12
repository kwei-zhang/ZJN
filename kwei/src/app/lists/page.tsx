"use client"
import { useEffect, useState } from 'react';
import { DataTable } from './dataTable';
import { columns, Payment } from '@/types/listColumns';
import { MotionWrapperVertical } from '@/components/motion';

async function getData(): Promise<Payment[]> {
    const response = await fetch('/api/lists');
    const data = await response.json();
    return data;
}

export default function Lists() {
    const [data, setData] = useState<Payment[]>([]);
    
    useEffect(() => {
        getData().then(setData);
    }, []);

    return (
        <div className="w-10/12">
        <MotionWrapperVertical delay={0.6}>
            <DataTable columns={columns} data={data} />
        </MotionWrapperVertical>
        </div>
    );
}

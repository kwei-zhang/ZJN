'use client';

import { useState, useEffect } from 'react';

async function getCourse(id: string) {
    const res = await fetch(`/api/courseworks/${id}`);
    const data = await res.json();
    return data;
}

export default function CourseworkPage(props: {
    params: { id: string };
}) {
    const [course, setCourse] = useState(null);
    const id = props.params.id;

    useEffect(() => {
        const fetchCourse = async () => {
            const data = await getCourse(id);
            setCourse(data);
        };
        
        fetchCourse();
    }, [id]);

    return (
        <div>
            <h1>Coursework Page</h1>
        </div>
    )
}
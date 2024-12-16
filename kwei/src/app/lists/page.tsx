"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Lists() {
    const router = useRouter();
    
    return (
        <>
        <Link href="/lists/todo" className="button">Todo</Link>
        <Link href="/lists/interests" className="button">Interests</Link>
        </>
    );
}
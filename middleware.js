import { NextResponse } from 'next/server'

export function middleware(request) 
{
    console.log("triggeed middleware")
}

export const config = {
    matcher: ['/workspace'],
}
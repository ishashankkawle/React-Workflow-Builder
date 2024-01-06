import { NextResponse } from 'next/server'
import res from './resources'

export function middleware(request) {

    const isAuthenticated = res["isAuthenticated"]
    const protectedRoutes = '/workspace'
    
    if((request.nextUrl.pathname == protectedRoutes) && isAuthenticated)
    {
        console.log("Workspace redirect")
        return NextResponse.redirect(new URL('/workspace', request.url))
    }
    if(request.nextUrl.pathname == '/logout')
    {
        console.log("Logout redirect")
        return NextResponse.redirect(new URL('/', request.url))
    } 
    else
    {
        return NextResponse.redirect(new URL('/', request.url))
    }

}

export const config = {
    matcher: ['/','/logout','/workspace'],
}
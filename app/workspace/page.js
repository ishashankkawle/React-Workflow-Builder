'use client';

import { useEffect } from "react"
import res from "../resources"
import { useRouter } from "next/navigation"

export default function workflow() {

  const router = useRouter();

  useEffect(() => {
    if(!res["isAuthenticated"])
    {
      router.replace('/')
    }
  },[]);

  return (
    <div>
      hi
    </div>
  )
}
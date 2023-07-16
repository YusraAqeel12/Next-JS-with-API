
// Get
//
import { NextResponse } from "next/server";

const url="https://reqres.in/api/users"
export async function GET(){
  const response=  await fetch(url)
  const res=await response.json()
    return NextResponse.json({data:res})
}


export async function POST(req:Request){
    const body=await req.json()//body mill jaigee jo bhee json data send hoga from postman 

    const res=await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body) //body ko json string mai convert karo
    })
   const response=await res.json() //reuqest karo in post and you will get response
    return NextResponse.json({response})

}
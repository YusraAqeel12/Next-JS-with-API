import { NextResponse } from "next/server";


//Get in dyanamic 

const url="https://reqres.in/api/users"
export async function GET(req:Request,context:any){
    const id=context.params.id
    const response=  await fetch(`${url}/${id}`)
    const res=await response.json()
      return NextResponse.json({data:res})
  }
  

//Put 
export async function PUT(req:Request,context:any){
  const id=context.params.id
  const response=await fetch(`${url}/${id}`,{
    method:'PUT',
    headers:{
        'Content-Type':"application/json"
    }
  })
  const res=await response.json()

    return NextResponse.json({res})
}
//delete api
export async function DELETE(req:Request,context:any){
    const id=context.params.id
  await fetch(`${url}/${id}`,{
      method:'DELETE',
      headers:{
          'Content-Type':"application/json"
      }
    })
  
      return NextResponse.json({message:'user has been deleted'})
  }
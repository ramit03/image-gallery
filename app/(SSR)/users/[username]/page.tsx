import { UnsplashUser } from "@/app/models/unsplash-user";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Alert } from "@/app/components/bootstrap";

interface PageProps {
    params: {
        username:string
    },
}

async function getUser(username:string):Promise<UnsplashUser> {
    const response = await fetch( `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    if(response.status === 404) notFound();
  return await response.json();
}

// const getUserCached = cache(getUser) to be used instead of user if native fetch is not used

export async function generateMetadata({ params: {username} }:PageProps):Promise<Metadata>{
  const user = await getUser(username);
 
  return{
    title: [user.first_name, user.last_name].filter(Boolean).join(" " || user.username+" -Image Gallery"),
  }
}

async function Page({params:{username}}:PageProps) {
  const user = await getUser(username);
    return (
    <div>
      <Alert>
      This profile page uses <strong>generateMetadata</strong> to set the <strong>page title</strong> dynamically from the API response.
      </Alert>
        <h1>{user.username}</h1>
        <Image 
            src={user.profile_image.large}
            width={100}
            height={100}
            alt={user.username}
            quality={100}
            
        />
        <p>{user.first_name} {user.last_name}</p>
        <p>{user.bio}</p>
        <a href={"https://unsplash.com/"+user.username}>Unsplash Profile</a>
    </div>
  )
}

export default Page
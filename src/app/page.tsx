import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.images.findMany()
  console.log(posts)

  const dummyData = [
    "https://utfs.io/f/15bb4da8-8cf6-4717-a427-78ac79e84089-exz8ak.webp",
    "https://utfs.io/f/c198f306-ab0f-4a3a-a448-b9a12bab7588-gbwab.webp",
    "https://utfs.io/f/a1a95e79-581f-4581-a620-22eb90078dbb-iksjxs.webp",
    "https://utfs.io/f/16d6c647-8efb-40ea-ba72-b0b0d79853e3-b52clr.webp",
    "https://utfs.io/f/bfd58f20-b6db-4b2e-890d-0d8170f3525a-3ckzei.webp"
  ]

  const mockImages = dummyData.map(( item, index)=>{
    return {
      id: index + 1,
      url:item
    }
  })
  return (
    <main className="">
      <div>
        <h2 className="text-lg">
          Dynamic Posts
        </h2>
        <div>
          {posts.map((post)=>{
            return <li key={post.id}>
              {post.name}
            </li>
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center my-4">
        {mockImages.map((item)=>{
          return <div key={item.id} className="w-48">
              {/* <Image src={item.url} height={300} width={300} alt=""/> */}
              <img src={item.url}/>
          </div>
        })}
      </div>
    </main>
  );
}

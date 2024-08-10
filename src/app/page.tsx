import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany()
  console.log(images)


  return (
    <main className="">
      <div className="flex flex-wrap gap-4 items-center justify-center my-4">
        {images.map((item)=>{
          return <div key={item.id} className="w-48">
              {/* <Image src={item.url} height={300} width={300} alt=""/> */}
              <img src={item.url}/>
              <p className="text-sm text-center mt-2">{item.name}</p>
          </div>
        })}
      </div>
    </main>
  );
}

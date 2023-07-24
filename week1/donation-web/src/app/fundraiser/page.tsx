"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { error } from "console";
import { type } from "os";

export default function Page() {
  const [data, setData] = useState();
  const url = "https://pbsfwbgsmkcjegweotla.supabase.co";
  const apikey = process.env.API_KEY;
  const supabase = createClient(
    url,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBic2Z3YmdzbWtjamVnd2VvdGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMDI0ODUsImV4cCI6MjAwNTY3ODQ4NX0.LWSmHnmIPG7g61-3RvbZUhAN51nYlVHHozCXrzrGXpU"
  );

  // type main-image: string
  // console.log("key-->",apikey)

  async function supaData() {
    const { data, error } = await supabase
      .from("FundRaiser")
      .select()
      .eq("slug", "the-green-kanha-initiative");

    // console.log("Error==>", error)

    return { data, error };
  }
  useEffect(() => {
    // supaData().then(error => console.log("update err-->", error))
    supaData().then(({ data, error }) => data && setData(data[0]));
    // .catch(Error, console.log("Something went wrong!", error))
  }, []);

  // console.log(data && data['main-image'])
  return (
    data && (
      <div>
        <div className="mx-5 lg:px-20 mt-2">
          <h1 className="mb-2 py-6 capitalize font-bold lg:text-4xl text-gray-800 text-3xl">
            {data["title"]}
          </h1>
          <div className="lg:grid lg:grid-cols-3">
            <div className="col-span-2">
              <div className="relative rounded-lg overflow-hidden">
                <h2 className="text-center text-white capitalize font-bold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {data["title"]}
                </h2>
                <Image
                  className="object-contain"
                  src={data["main-image"]}
                  alt="main-image"
                  width={1600}
                  height={600}
                />
              </div>
              <div className="mt-2">
                <h2 className="text-gray-800 font-semibold text-3xl py-3">
                  Story
                </h2>
                <h3 className="my-3 text-xl text-gray-900 font-bold">
                  {data["description"]["tagline"]}
                </h3>
                <p>{data["description"]["content"]}</p>
                <div className="p-1 bg-gray-200 rounded-lg mt-5">
                  <h3 className="w-full lg:text-4xl text-3xl font-bold my-1 text-gray-700 text-center">
                    Support the fundraiser
                  </h3>
                  <div className="flex p-3">
                    <button className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-1 mx-2 w-2/3 py-2 font-semibold text-white hover:text-gray-700 ease-out duration-300">
                      Donate
                    </button>
                    <button className="rounded-full border-2 w-2/3 my-1 mx-2 py-2 border-gray-400 font-semibold text-gray-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-gray-100 hover:text-white ease-out duration-300">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block sticky top-10 ease-in-out duration-200 col-span-1 overflow-hidden bg-gray-100 rounded-lg ml-9 flex flex-col h-2/3">
              <div className="bg-[url(https://images.unsplash.com/photo-1497704628914-8772bb97f450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDcxMTcwfHxlbnwwfHx8fHw%3D&w=1000&q=80)] bg-center h-1/2 flex justify-center items-center bg-gray-500">
                <p className="text-white italic">"Quotes"</p>
              </div>
              <div className="flex flex-col h-1/2 items-center justify-center">
                <button className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-3 w-2/3 py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300">
                  Donate
                </button>
                <button className="rounded-full border-2 w-2/3 my-3 py-4 border-gray-400 font-semibold text-gray-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-gray-100 hover:text-white ease-out duration-300">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="fixed bottom-0 rounded-t-md bg-gradient-to-r from-sky-500 to-indigo-500 w-full py-4 font-semiboldtext-white hover:text-gray-700 ease-out duration-300">
          Donate
        </button>
      </div>
    )
    // <h1>hfn</h1>
  );
}

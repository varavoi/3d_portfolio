import Head from 'next/head';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
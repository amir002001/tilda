import Head from "next/head";
import Image from "next/image";
import localFont from "@next/font/local";
import Link from "../components/Link";

const myFont = localFont({ src: "./vcr-osd-mono.ttf", preload: true });

export default function Home() {
    return (
        <>
            <Head>
                <title>Tilda</title>
                <meta
                    name="description"
                    content="The Tilda Podcast"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className={`bg-img ${myFont.className} w-screen h-screen flex flex-col items-center justify-center`}
            >
                {/* title */}
                <div className="">
                    <span className="title-shadow text-[256px] ">~</span>
                    <span className="text-[128px] title-shadow">_</span>
                </div>
                {/* links */}
                <div>
                    <div className="flex justify-center gap-16">
                        <Link href="#" text="Amazon" className="" />
                        <Link href="#" text="Spotify" className="" />
                        <Link href="#" text="Youtube" className="" />
                    </div>
                    <div className="flex justify-center gap-16">
                        <Link href="#" text="Google" className="" />
                        <Link href="#" text="Apple" className="" />
                    </div>
                </div>
            </main>
        </>
    );
}

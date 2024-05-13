import Image from "next/image";
import Qrgenerator from "./Qrgenerator";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-50 px-4 py-6 md:py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-4 md:grid-cols-2">
        <div className="row-span-1 row-start-2 flex flex-col gap-6 px-4 py-6 md:row-start-1 ">
          <Qrgenerator />
        </div>
        <div className="rounded-2xl bg-slate-200 px-4 py-6 text-slate-900">
          <h1 className="pb-4 text-4xl font-bold text-slate-950 md:text-6xl">
            Free QR Code Generator
          </h1>
          <p className="pb-8 text-xl text-slate-700 md:text-2xl">
            A simple QR Code generator. No Sign Up. No Credit Card Required. No
            BS.
          </p>
          <p className="text-slate-900">
            This QR Code generator is made by{" "}
            <a
              href="https://www.oddstopmedia.com/about"
              target="_blank"
              className="text-emerald-700 underline underline-offset-2 hover:text-amber-500"
            >
              Vosram
            </a>
            . All QR Codes can be downloaded as a png and can be made from 64px
            to 2048px. Good enough for most use cases! Since they are pngs, it
            also supports Transparency.
          </p>
        </div>
      </div>
    </main>
  );
}

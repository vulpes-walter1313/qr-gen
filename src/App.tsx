import { useState } from "react";
import { useQRCode } from "next-qrcode";
import "./index.css";
import styles from "./app.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { colorWithTrans } from "./lib/utils";

type Inputs = {
  link: string;
  size: string;
  dark: string;
  light: string;
  darkopacity: string;
  lightopacity: string;
  margin: string;
};

function App() {
  const { Image } = useQRCode();
  const [valToQr, setValToQr] = useState("https://qrgen.iamvosram.com");
  const [size, setSize] = useState(256);
  const [margin, setMargin] = useState(2);
  const [darkColor, setDarkColor] = useState("#000000");
  const [lightColor, setLightColor] = useState("#ffffff");
  const {
    register,
    handleSubmit,
    //formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setValToQr(data.link);
    const size = parseInt(data.size);
    setSize(size);
    const newDarkColor = colorWithTrans(data.dark, data.darkopacity);
    setDarkColor(newDarkColor);
    const newLightColor = colorWithTrans(data.light, data.lightopacity);
    setLightColor(newLightColor);
    setMargin(parseInt(data.margin));
  };

  return (
    <main className="min-h-screen w-full bg-slate-50 px-4 py-6 md:py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-4 md:grid-cols-2">
        <div className="row-span-1 row-start-2 flex flex-col gap-6 px-4 py-6 md:row-start-1 ">
          <div className={`h-auto w-full self-center ${styles.imgWrapper}`}>
            {valToQr.length > 0 ? (
              <Image
                text={valToQr}
                options={{
                  margin: margin,
                  width: size,
                  color: { light: lightColor, dark: darkColor },
                }}
              />
            ) : null}
            <p className="mt-4 rounded-lg bg-green-200 px-4 py-2 text-green-900">
              Just right-click and hit "Save Image As"
            </p>
            <p className="py-4 text-sm md:text-base">
              Showing QR code for{" "}
              <a
                className="text-emerald-800 underline underline-offset-2 hover:text-amber-500"
                href={valToQr}
                target="_blank"
                rel="nofollow"
              >
                {valToQr}
              </a>
            </p>
          </div>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="link">
                Paste Link Below:
              </label>
              <input
                className="rounded-lg border border-slate-300 px-2 py-1"
                defaultValue="https://qrgen.iamvosram.com"
                {...register("link")}
              />
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-start gap-2">
                <label className="font-medium" htmlFor="size">
                  Width{" "}
                  <span className="text-sm font-normal text-slate-600">
                    in Pixels
                  </span>
                </label>
                <input
                  className="w-20 rounded-lg border border-slate-300 px-2 py-1"
                  type="number"
                  defaultValue={256}
                  min={64}
                  max={2048}
                  {...register("size", { max: 2048, min: 64 })}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="font-medium" htmlFor="margin">
                  Margin (0-10)
                </label>
                <input
                  className="w-20 rounded-lg border border-slate-300 px-2 py-1"
                  type="number"
                  defaultValue={2}
                  min={0}
                  max={10}
                  {...register("margin", { max: 10, min: 0 })}
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-start gap-2">
                <label className="font-medium" htmlFor="dark">
                  Dark Color
                </label>
                <input
                  className="border border-slate-300 px-2 py-1"
                  type="color"
                  {...register("dark")}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="font-medium" htmlFor="light">
                  Light Color
                </label>
                <input
                  className="border border-slate-300 px-2 py-1"
                  type="color"
                  defaultValue="#ffffff"
                  {...register("light")}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="darkopacity">
                  Dark Opacity: {watch("darkopacity") ?? "100"}%
                </label>
                <input
                  type="range"
                  {...register("darkopacity")}
                  max="100"
                  min="0"
                  step="1"
                  defaultValue="100"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="lightopacity">
                  Light Opacity: {watch("lightopacity") ?? "100"}%
                </label>
                <input
                  type="range"
                  {...register("lightopacity")}
                  max="100"
                  min="0"
                  step="1"
                  defaultValue="100"
                />
              </div>
            </div>
            <button
              type="submit"
              className="self-start rounded-full bg-slate-700 px-4 py-2 text-slate-100"
            >
              Get QR Code
            </button>
          </form>
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
              className="text-emerald-700 underline underline-offset-2"
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

export default App;

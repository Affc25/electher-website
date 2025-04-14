import { Button, Logo } from "@/components/ui";

export default function Home() {
  return (
    <div
    >
      <section 
        id="hero"
        className="w-screen h-screen bg-white bg-blend-lighten flex flex-col items-center justify-center z-10"
        style={{
          background: "url('/images/header_img.png')"
        }}
      >
        <div className="absolute inset-0 bg-white/90 z-0  " />
        <div className="z-20 flex flex-col items-center">
          <Logo className="size-52"/>
          <h1 className="text-6xl font-bold text-center">
            <span className="text-[#2c3539]">
              Africa Female
            </span>
            <br/>
            <span className="text-brand">
              Founders Collective
            </span>
          </h1>
          <div className="h-[2px] w-28 bg-[rgb(214_135_177)] my-8"/>
          <p className="text-2xl w-[800px] text-center font-medium text-[#1b1c23cc]">
            Powering the visibility, investability, and scalability of Africa&apos;s female-led ventures.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button className="px-5 text-lg h-13 font-inter font-semibold">Find Out More</Button>
            <Button variant="outline" className="px-5 text-lg h-13 font-inter font-semibold">Visit Our Data Center</Button>
          </div>
        </div>

      </section> 
    </div>
  );
}

import { SlideInLeft, SlideInLeftDelayed } from "@/components/Transitions";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center h-[200vh]">
        <h1 className=" text-8xl self-start mt-28 ml-20">
          <SlideInLeft>
            <span className="text-9xl text-accent">Florian Donckers.</span> <br />
          </SlideInLeft>
          <SlideInLeft delay={0.5}>
            <span>Un développeur front-end.</span>
          </SlideInLeft>
        </h1>
    </div>
  );
}

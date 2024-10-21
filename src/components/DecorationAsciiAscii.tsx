import { DisapearOnScroll } from "./Transitions";


export default function DecorationAscii() {


    return (
        <div className=" absolute bottom-0 r w-[calc(100vw-3rem)] h-full flex items-center justify-center mx-5 [&_*]:text-accent [&_*]:text-[2rem] overflow-hidden select-none pointer-events-none">
            <DisapearOnScroll>
                <pre className=" text-center self-center overflow-hidden absolute bottom-0 left-0">
                    {Array(300).fill('-').join('')}
                </pre>
            </DisapearOnScroll>

        </div>
    );
}
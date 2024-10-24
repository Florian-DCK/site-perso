'use client'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function DecorationAscii() {

	useGSAP(() => {
		gsap.to('.DecorationAscii', { 
			x: 50,
			y: 50,
			opacity: 0,
			ease: 'ease-in-out',
			scrollTrigger: {
				trigger: '.DecorationAscii',
				start: 'top 90%',
				markers: false,
				toggleActions: 'play none none reverse'
			}
		})
	})

	return (
		<div className=" DecorationAscii absolute bottom-0 ">
			  		{Array(300).fill('-').join('')}
				</pre>

				<div className="absolute bottom-10 [&_*]:fill-accent [&_*]:size-10 animate-bounce">
				</div>
		</div>
	);
}

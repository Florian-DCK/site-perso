'use client';

import { useState, useEffect } from 'react';
import { motion, MotionStyle } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabStyle: MotionStyle = {
	width: '100px',
	textAlign: 'center',
	position: 'relative' as const, // Explicitly type-casting
	borderRadius: 10,
	padding: '0.5rem',
} as const;

const selectionStyle: MotionStyle = {
	width: '100%',
	height: '100%',
	position: 'absolute' as const, // Explicitly type-casting
	borderRadius: 1000,
	top: 0,
	left: 0,
} as const;

const tabs = [
	{ name: 'Accueil', path: '/' },
	{ name: 'CV', path: '/cv' },
	{ name: 'contact', path: '/contact' },
] as const;

const duration = 0.5;

export default function NavBar() {
	const [selected, setSelected] = useState(0);
	useEffect(() => {
		window.history.scrollRestoration = 'manual';
	}, []);

	useGSAP(() => {
		gsap.to('.Container', {
			scrollTrigger: {
				trigger: '.Container',
				start: 'top top',
				markers: true,
				toggleActions: 'play none none reverse',
			},
			opacity: 1,
			backdropFilter: 'blur(10px)',
		});
	});

	return (
		<div className="Container fixed top-0 flex  h-fit max-h-[calc(100vh-40px)] py-2 min-w-fit w-fit justify-center bg-background items-center m-5 rounded-full drop-shadow-2xl px-5  bg-opacity-0">
			{tabs.map(({ name, path }, i) => (
				<Link
					style={{ position: 'relative', zIndex: 1 }}
					href={path}
					key={`${i}-parent`}>
					<motion.div
						style={tabStyle}
						key={i}
						transition={{ duration }}
						onTap={() => {
							setSelected(i);
						}}>
						<motion.div
							style={{ position: 'relative', zIndex: 1 }}
							initial={{ color: i === selected ? '#18171f' : '#fff' }}
							animate={{ color: i === selected ? '#18171f' : '#fff' }}>
							{name}
						</motion.div>
						{i === selected && (
							<motion.div
								style={selectionStyle}
								layoutId="selected"
								transition={{ duration }}
								initial={{ backgroundColor: '#fdb93a' }}
								animate={{ backgroundColor: '#fdb93a' }}
							/>
						)}
					</motion.div>
				</Link>
			))}
		</div>
	);
}

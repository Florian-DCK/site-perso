'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
	NextIcon,
	JSIcon,
	HtmlIcon,
	GsapIcon,
	CSSIcon,
	PythonIcon,
	TailwindIcon,
} from '@/components/svgs';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

import Menu from '@/components/Menu';
import GithubCalendarComponent from '@/components/GithubCalendar';
import ContactForm from '@/components/ContactForm';

export default function Home() {
	useGSAP(() => {
		gsap.fromTo(
			'.Titles',
			{
				opacity: 0,
				x: -500,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1.5,
				stagger: 0.7,
				ease: 'elastic.out(0.5, 0.2)',
			}
		);

		gsap.fromTo(
			'.SmallTitle',
			{
				opacity: 0,
				y: 200,
			},
			{
				opacity: 1,
				y: 0,
				delay: 2,
				ease: 'back.out(1.3)',
			}
		);

		gsap.fromTo(
			'.Icon',
			{
				y: -300,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1.5,
				ease: 'bounce.out',
				delay: 1.5,
				duration: 1,
			}
		);

		ScrollTrigger.create({
			trigger: '.Icon',
			start: 'top 20%',
			end: 'bottom -200%',
			toggleActions: 'play none none none',
			onToggle: (self) => {
				if (self.isActive) {
					gsap.to('.Icon', {
						x: 300,
						opacity: 0,
						duration: 0.5,
						ease: 'back.inOut(2)',
					});
				} else {
					gsap.to('.Icon', {
						x: 0,
						opacity: 1,
						duration: 0.5,
						ease: 'back.inOut(2)',
					});
				}
			},
		});

		gsap.from('.Menu', {
			x: '-150%',
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.Menu',
				start: 'top 80%',
				end: 'bottom 30%',
			},
		});

		gsap.from('.Calendar', {
			x: '150%',
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.Calendar',
				start: 'top 80%',
				end: 'bottom 30%',
			},
		});
	});

	return (
		<div className="flex flex-col">
			<section
				id="home"
				className="min-h-screen w-screen flex flex-col items-center [&_*]:fill-white">
				<h1 className="Titles lg:self-start mt-24 lg:mt-48 lg:ml-20 text-accent lg:text-8xl -z-10 text-3xl">
					Florian Donckers.
				</h1>
				<span className="Titles text-1xl lg:text-7xl lg:self-start lg:ml-20 -z-10">
					<h1>Un développeur front-end.</h1>
					<h2 className="SmallTitle text-sm lg:text-lg lg:mr-12 lg:text-right text-center">
						Nivelles, Belgique.
					</h2>
				</span>
				<div className="lg:[&_*]:size-24 [&_*]:size-10 lg:flex justify-center items-center space-x-4 absolute bottom-14 right-14 ">
					<span className="Icon">
						<NextIcon />
					</span>
					<span className="Icon">
						<JSIcon />
					</span>
					<span className="Icon">
						<HtmlIcon />
					</span>
					<span className="Icon">
						<CSSIcon />
					</span>
					<span className="Icon">
						<GsapIcon />
					</span>
					<span className="Icon">
						<PythonIcon />
					</span>
					<span className="Icon">
						<TailwindIcon />
					</span>
				</div>
			</section>
			<section
				id="cv"
				className=" self-start flex flex-col justify-center h-screen w-screen space-y-20">
				<Menu className="Menu mb-20 lg:mb-0"></Menu>
				<hr className="border-t-4 border-accent border-dashed m-24 hidden lg:block" />
				<GithubCalendarComponent className="Calendar self-end lg:me-20 hidden lg:flex" />
			</section>

			<section
				id="contact"
				className="flex items-center justify-center min-h-screen w-screen">
				<div className=" flex flex-col-reverse lg:flex-row gap-20">
					<ContactForm></ContactForm>
					<div className="flex flex-col lg:w-1/3 px-4 mt-5 lg:mt-0 self-start align-top">
						<h1 className="text-3xl mt-20 text-accent">
							Travaillons ensemble !
						</h1>
						<p>
							Remplissez ce formulaire pour m'envoyer un message, ou contactez
							moi directement en utilisant les informations ci-dessous.
						</p>
						<hr className="my-4 border-accent opacity-50 w-2/3 border-2 rounded-lg" />
						<p>
							<span className="text-accent mr-3">&gt;</span>fdonckersf@gmail.com{' '}
							<br />
							<span className="text-accent mr-3">&gt;</span>+32 476 41 68 17
							<br />
						</p>
						<hr className="my-4 border-accent opacity-50 w-1/2 border-2 rounded-lg" />
						<div className="flex flex-col">
							<h2 className=" mb-4 text-accent font-medium">Mes réseaux :</h2>
							<div className="flex space-x-4">
								<a
									href="https://www.linkedin.com/in/florian-donckers-b60a08200/"
									target="_blank"
									className="hover:scale-110 transform transition-transform">
									<svg viewBox="0 0 128 128" className=" size-10">
										<path
											fill="#fff"
											d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path>
										<path
											fill="#373642"
											d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
									</svg>
								</a>

								<a
									href="https://x.com/Flo5GK"
									target="_blank"
									className="hover:scale-110 transform transition-transform">
									<svg viewBox="0 0 128 128" className=" size-10">
										<path
											d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
											fill="#fff"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

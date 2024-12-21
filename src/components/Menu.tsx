import React, { useState } from 'react';
import { E6KIcon } from './svgs';
import Image from 'next/image';
// import ucl from '../public/Ucl.png';
import { UclIcon } from './svgs';
// import iscn from '../public/iscn.png';

const Menu = () => {
	const [activeTab, setActiveTab] = useState(1);
	const [hoveredTab, setHoveredTab] = useState<number | null>(null);

	const tabs = [
		{
			id: 1,
			title: 'Alternance',
			content: (
				<p>
					Formation de deux ans en alternance, incluant un stage obligatoire en
					entreprise, offrant une <b>expérience professionnelle concrète</b> et
					un savoir-faire adapté aux besoins du secteur.
				</p>
			),
			year: '2024-2026',
			logo: (
				<a
					href=" https://www.e6k.be "
					target="_blank"
					className="[&_*]:size-24">
					<E6KIcon></E6KIcon>
				</a>
			),
		},
		{
			id: 2,
			title: 'Bachelier en Sciences informatiques',
			content: (
				<p>
					J'ai eu l'opportunité de suivre un{' '}
					<b>bachelier en sciences informatiques </b>à l'Université de Louvain,
					où j'ai acquis des <b>compétences techniques essentielles</b> ainsi
					qu'une méthodologie de travail rigoureuse, me préparant ainsi à
					exercer efficacement le métier de développeur.
				</p>
			),
			year: '2022-2023',
			logo: (
				<a
					href="https://uclouvain.be"
					target="_blank"
					className="[&_*]:size-32">
					<UclIcon></UclIcon>
				</a>
			),
		},
		{
			id: 3,
			title: 'Bachelier en Biologie',
			content: (
				<p>
					J'ai suivi deux années de <b>bachelier en sciences biologiques</b> à
					l'Université Catholique de Louvain-la-Neuve, où j'ai acquis des
					compétences clés telles que le travail en équipe, la capacité à suivre
					des instructions précises et l'application rigoureuse de la méthode
					scientifique pour <b>résoudre des problèmes</b>.
				</p>
			),
			year: '2020-2022',
			logo: (
				<a
					href="https://uclouvain.be"
					target="_blank"
					className="[&_*]:size-32">
					<UclIcon></UclIcon>
				</a>
			),
		},
		{
			id: 4,
			title: 'CESS Sciences appliquées',
			content: (
				<p>
					J'ai suivi et réussi mon cursus scientifique, qui m'a inculqué une
					rigueur tant sur le plan professionnel que personnel, me préparant à
					relever des <b>défis techniques complexes</b>.
				</p>
			),
			year: '2014-2020',
			logo: (
				<a href="https://www.iscnivelles.be/v3/" target="_blank">
					<Image
						src=""
						width={192}
						alt="Institut du Sacré Coeur de Nivelles"></Image>
				</a>
			),
		},
	];

	return (
		<div className="ml-20">
			<div className="flex max-w-max min-w-min border-b border-secondary">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						onMouseEnter={() => setHoveredTab(tab.id)}
						onMouseLeave={() => setHoveredTab(null)}
						className={`pb-2 px-4 ${
							activeTab === tab.id
								? 'border-b-2 border-accent font-bold'
								: 'text-gray-500'
						}`}>
						{tab.year}
					</button>
				))}
			</div>
			<div className="mt-4 h-[10rem] flex w-[60rem] space-x-10">
				<div
					className={`w-[35rem] duration-300 ${
						hoveredTab && hoveredTab !== activeTab
							? 'opacity-20'
							: 'opacity-100'
					}`}>
					<h3 className="text-accent self-start text-xl duration-300">
						{tabs.find((tab) => tab.id === (hoveredTab || activeTab))?.title} :
					</h3>
					<div className={`duration-300`}>
						{tabs.find((tab) => tab.id === (hoveredTab || activeTab))?.content}
					</div>
				</div>
				<div
					className={`duration-300 ${
						hoveredTab && hoveredTab !== activeTab ? 'hidden' : 'opacity-100'
					}`}>
					{tabs.find((tab) => tab.id === (hoveredTab || activeTab))?.logo}
				</div>
			</div>
		</div>
	);
};

export default Menu;

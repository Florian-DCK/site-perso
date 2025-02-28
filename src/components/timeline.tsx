export default function Timeline() {
	const steps = [
		{
			id: 1,
			title: 'Alternance développeur WEB',
			content: (
				<p className=" max-w-sm text-sm text-gray-400 [&_*]:text-gray-400 mb-5">
					Formation de deux ans en alternance, incluant un stage obligatoire en
					entreprise, offrant une <b>expérience professionnelle concrète</b> et
					un savoir-faire adapté aux besoins du secteur.
				</p>
			),
			year: '2024-2026',
			location: 'E6K, Charleroi',
		},
		{
			id: 2,
			title: 'Bachelier en Sciences informatiques',
			content: (
				<p className=" max-w-sm text-sm text-gray-400 [&_*]:text-gray-400 mb-5">
					J'ai eu l'opportunité de suivre un{' '}
					<b>bachelier en sciences informatiques </b>à l'Université de Louvain,
					où j'ai acquis des <b>compétences techniques essentielles</b> ainsi
					qu'une méthodologie de travail rigoureuse, me préparant ainsi à
					exercer efficacement le métier de développeur.
				</p>
			),
			year: '2022-2023',
			location: 'UCLouvain, Louvain-La-Neuve',
		},
		{
			id: 3,
			title: 'Bachelier en Biologie',
			content: (
				<p className=" max-w-sm text-sm text-gray-400 [&_*]:text-gray-400 mb-5">
					J'ai suivi deux années de <b>bachelier en sciences biologiques</b> à
					l'Université Catholique de Louvain-la-Neuve, où j'ai acquis des
					compétences clés telles que le travail en équipe, la capacité à suivre
					des instructions précises et l'application rigoureuse de la méthode
					scientifique pour <b>résoudre des problèmes</b>.
				</p>
			),
			year: '2020-2022',
			location: 'UCLouvain, Louvain-La-Neuve',
		},
	];

	return (
		<div className=" mx-20 ">
			<ul className="">
				{steps.map((step) => (
					<li className="relative ">
						<div className=" flex space-x-5">
							<h2 className="">{step.year}</h2>
							<div className="flex flex-col items-center space-y-2">
								<div className=" size-4 bg-accent rounded-full flex-shrink-0 mt-2 "></div>
								<div className=" w-[4px] rounded-full h-full bg-secondary"></div>
							</div>
							<div className=" relative">
								<h2 className=" text-2xl/6 line">{step.title}</h2>
								<h3 className=" text-lg/5 text-accent mb-2/5 mb-2">
									{step.location}
								</h3>
								{step.content}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

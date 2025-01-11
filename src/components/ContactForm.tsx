import React from 'react';

export default function ContactForm() {
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData: { [key: string]: string } = {};
		Array.from(event.currentTarget.elements).forEach((field) => {
			if (
				(field instanceof HTMLInputElement ||
					field instanceof HTMLTextAreaElement) &&
				field.name
			) {
				formData[field.name] = field.value;
			}
		});
		const spinner = event.currentTarget.querySelector('.Spinner');
		const successMessage = event.currentTarget.querySelector('.Success');
		const errorMessage = event.currentTarget.querySelector('.Error');
		if (spinner) {
			spinner.classList.remove('hidden');
		}
		try {
			const response = await fetch('/api/mail', {
				method: 'POST',
				body: JSON.stringify(formData),
			});
			if (response.status === 200) {
				if (spinner) {
					spinner.classList.add('hidden');
					if (errorMessage) {
						errorMessage.classList.add('hidden');
					}
					if (successMessage) {
						successMessage.classList.remove('hidden');
					}
					const submitButton = document.querySelector(
						'button[type="submit"]'
					) as HTMLButtonElement;
					if (submitButton) {
						submitButton.disabled = true;
						submitButton.classList.add('hidden');
					}
				}
			} else {
				if (spinner) {
					spinner.classList.add('hidden');
					if (successMessage) {
						successMessage.classList.add('hidden');
					}
					if (errorMessage) {
						errorMessage.classList.remove('hidden');
					}
				}
			}
		} catch (error) {
			if (spinner) {
				spinner.classList.add('hidden');
				if (successMessage) {
					successMessage.classList.add('hidden');
				}
				if (errorMessage) {
					errorMessage.classList.remove('hidden');
				}
				console.log(error);
			}
		}
	}

	return (
		<div className=" mx-4 lg:w-1/2">
			<form method="post" onSubmit={handleSubmit} className="space-y-5">
				<p>
					<label htmlFor="name" className=" block mb-1 text-accent">
						Qui êtes vous ?
					</label>
					<input
						type="text"
						name="name"
						placeholder="Entrer votre nom / nom de société*"
						required
						className=" block mb-1 w-full bg-secondary  border-dashed px-2 focus:outline-none"
					/>
				</p>
				<p>
					<label htmlFor="contact" className=" block mb-1 text-accent">
						Comment vous contacter ?
					</label>
					<span className="flex justify-between space-x-5">
						<span className="w-full flex flex-col relative">
							<input
								type="email"
								name="email"
								required
								placeholder="Entre votre adresse email*"
								className="w-full bg-secondary border-2 border-transparent px-2 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500  peer"
							/>
							<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block absolute bottom-[-1.5rem]">
								Veuillez entrez une adresse email valide
							</span>
						</span>
						<span className="w-full h-min relative">
							<input
								type="tel"
								name="phone"
								pattern="^\+?[0-9\s\-]{7,15}$"
								placeholder="Entrer votre numéro de téléphone (optionnel)"
								className="w-full bg-secondary border-2 border-transparent px-2 focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
							/>
							<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block absolute bottom-[-1.5rem]">
								Veuillez entrez un numéro de téléphone valide
							</span>
						</span>
					</span>
				</p>
				<p>
					<label htmlFor="message" className=" block mb-1 w-full text-accent">
						Que puis-je faire pour vous ?
					</label>
					<textarea
						name="message"
						placeholder="Entrer votre message*"
						required
						className=" w-full h-64 bg-secondary  border-dashed p-2 resize-none focus:outline-none border-2 border-transparent"></textarea>
				</p>
				<p className="flex flex-col lg:flex-row items-center space-x-5">
					<button
						type="submit"
						disabled={false}
						className={` bg-accent hover:[&:not(:disabled)]:bg-opacity-75  p-3 rounded-full transform active:[&:not(:disabled)]: transition-transform lg:w-min flex flex-row space-x-5 justify-center items-center disabled:bg-opacity-20 w-full`}>
						<p className="text-black">Envoyer</p>
						<div role="status">
							<svg
								aria-hidden="true"
								className="Spinner w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 hidden"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="#373642"
								/>
							</svg>
						</div>
					</button>
					<span className="Success hidden flex flex-row items-center">
						<svg
							className=" w-8 h-8 text-gray-200 stroke-green-600 "
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4 12.6111L8.92308 17.5L20 6.5"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span className="text-green-600">
							Votre message a bien été envoyé
						</span>
					</span>

					<span className="Error  flex flex-row items-center mt-2 lg:mt-0">
						<svg
							className=" w-8 h-8 text-gray-200 stroke-red-500 "
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 16H12.01M12 8V12M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span className="text-red-500">Une erreur est survenue</span>
					</span>
				</p>
			</form>
		</div>
	);
}

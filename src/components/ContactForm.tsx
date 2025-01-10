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
		fetch('/api/mail', { method: 'POST', body: JSON.stringify(formData) });
	}

	return (
		<div className=" w-1/2">
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
						className=" block mb-1 w-full bg-secondary  border-dashed px-2"
					/>
				</p>
				<p>
					<label htmlFor="contact" className=" block mb-1 text-accent">
						Comment vous contacter ?
					</label>
					<span className="flex justify-between space-x-5">
						<input
							type="email"
							name="email"
							required
							placeholder="Entrer votre email*"
							className="w-full bg-secondary  border-dashed px-2"
						/>
						<input
							type="tel"
							name="phone"
							placeholder="Entrer votre numéro de téléphone (optionnel)"
							className="w-full bg-secondary  border-dashed px-2"
						/>
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
						className=" w-full h-64 bg-secondary  border-dashed p-2 resize-none"></textarea>
				</p>
				<p>
					<button className="bg-accent text-black p-3 rounded-full">
						Envoyer
					</button>
				</p>
			</form>
		</div>
	);
}

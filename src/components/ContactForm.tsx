import React from 'react';

export default function ContactForm() {
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData: { [key: string]: any } = {};
		Array.from(event.currentTarget.elements).forEach((field) => {
			if (
				!(
					field instanceof HTMLInputElement ||
					field instanceof HTMLTextAreaElement ||
					field instanceof HTMLSelectElement
				)
			)
				return;
			if (!field.name) return;
			formData[field.name] = field.value;
		});
		fetch('/api/mail', {
			method: 'POST',
			body: JSON.stringify(formData),
		});
	}

	return (
		<div className=" w-1/2">
			<form method="post" onSubmit={handleSubmit} className="space-y-5">
				<p>
					<label htmlFor="name" className=" block mb-1 text-accent">
						Name
					</label>
					<input
						type="text"
						name="name"
						className=" block mb-1 w-full bg-secondary border-accent border border-dashed"
					/>
				</p>
				<p>
					<label htmlFor="email" className=" block mb-1 text-accent">
						E-Mail
					</label>
					<input
						type="email"
						name="email"
						className="w-full bg-secondary border-accent border border-dashed"
					/>
				</p>
				<p>
					<label htmlFor="message" className=" block mb-1 w-full text-accent">
						Message
					</label>
					<textarea
						name="message"
						className=" w-full h-64 bg-secondary border-accent border border-dashed"></textarea>
				</p>
				<p>
					<button className="bg-accent text-black p-3 rounded-e-full">
						Envoyer
					</button>
				</p>
			</form>
		</div>
	);
}

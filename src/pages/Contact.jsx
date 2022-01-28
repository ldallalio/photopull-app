import React from 'react';
import Logo from '../components/assets/images/photoPullLogo.png';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
	const [state, handleSubmit] = useForm('mlezgqkq');
	if (state.succeeded) {
		return (
			<div className='hero  rounded-xl shadow-2xl h-80'>
				<div className='hero-overlay bg-opacity-40'></div>
				<div className='hero-content align-center'>
					<div className='card w-8/12 grid grid-cols-1  min-w-400 text-center bg-neutral '>
						<figure className='mx-auto max-h-72 max-w-lg'>
							<img src={Logo} alt='Logo' srcset='' className='w-10' />
						</figure>
						<div className='card-body w-10/12 mx-auto'>
							<h1 className='text-center text-2xl font-bold'>
								Thank you for your message!
							</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='hero  rounded-xl shadow-2xl h-80'>
			<div className='hero-overlay bg-opacity-40'></div>
			<div className='hero-content align-center'>
				<div className='card w-8/12 grid grid-cols-1 text-center bg-neutral '>
					<figure className='mx-auto max-h-72 max-w-lg'>
						<img src={Logo} alt='Logo' srcset='' className='w-10' />
					</figure>
					<div className='card-body w-10/12 mx-auto'>
						<form className='flex flex-col' onSubmit={handleSubmit}>
							<label className='mb-4' htmlFor='email'>
								Email Address
							</label>
							<input
								className='input mb-8'
								id='email'
								type='email'
								name='email'
							/>
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>

							<label className='mb-4' htmlFor='message'>
								Message
							</label>
							<textarea
								className=' textarea mb-8'
								id='message'
								name='message'
							/>
							<ValidationError
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
							<button
								type='submit'
								className='btn btn-primary btn-block mb-8'
								disabled={state.submitting}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

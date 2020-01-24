import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Button from '../components/Button.js';
import About from './about.js';
import Projects from './projects.js';
import Faq from './faq.js';

import logo from '../images/headerImage.jpg';
import profile from '../images/profileImage.jpg'

const style = StyleSheet.create({
	Header: {
		backgroundImage: `url(${logo})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		width: '100%',
		height: '400px'
	},
	HeaderButtons: {
		display: 'flex',
		justifyContent: 'center',
	},
	btnHeader: {
		outline: 'none',
		height: '100px',
		width: '100px',
		borderRadius: '50%',
		border: 'none',
		background: '#F2766B',
		cursor: 'pointer',
		margin: '350px 20px',
		border: '3px solid white',
		fontFamily: "'Shadows Into Light', cursive",
		textTransform: 'uppercase',
		fontSize: '20px',
	},
	profileImg: {
		outline: 'none',
		height: '150px',
		width: '150px',
		borderRadius: '50%',
		border: 'none',
		background: '#F2766B',
		margin: '325px 20px',
		border: '3px solid white',
		cursor: 'pointer'
	}
});

const Home = () => {

	const [show, setShow] = useState('about');

	return (
		<div>
			<header className={css(style.Header)} >
				<section className={css(style.HeaderButtons)} >
					<Button className={css(style.btnHeader)} id={'about'} title={'About'} onClick={() => setShow('about')} />
					<a onClick={() => setShow('faq')} ><img className={css(style.profileImg)} /></a>
					<Button className={css(style.btnHeader)} id={'projects'} title={'Projetos'} onClick={() => setShow('projects')} />					
				</section>
			</header>
			{
				show === 'about' ? <About /> : show === 'projects' ? <Projects /> : <Faq />
			}
		</div>
	)
};

export default Home;

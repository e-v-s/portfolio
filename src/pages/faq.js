import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
	aboutPage: {
		margin: '150px 100px',
		fontFamily: '"Exo 2", sans-serif',
		border: '1px solid black'
	}
});

const Faq = () => {
	return(
		<>
			<section className={css(style.aboutPage)} >
				<h1>FAQ</h1>
				<h2>O que você faz?</h2>
				<p>Sou Desenvolvedora front-end, formada pela Laboratória (<a href='https://www.laboratoria.la/br'>vem aqui saber mais, é um lugar incrível</a>).</p>
				<h2>O que você fazia antes de ser desenvolvedora?</h2>
				<p>Fui farmacêutica em uma clínica psiquiátrica e passei um ano na vida acadêmica.</p>
				<h2>Nossa, que diferente!!! E por quê você mudou de área?</h2>
				<p>Ah, fiz farmácia pra entender como as coisas funcionavam, e uma área que abrange tantos processos biológicos - pensei - vai me trazer uma vida cheia de coisas novas para estudar e para implementar na vida real. Não foi bem assim, então resolvi procurar algo que me desse a dinâmica de estudar coisas diferentes e de, olha lá, fazer as coisas funcionarem :)</p>
				<h2>E em quê você é boa?</h2>
				<p>Amo pegar projetos que me ensinem ferramentas novas, sou muito hiperfocada no que faço, então não me incomodo com barulho no ambiente e nem muito menos de trabalhar de um café se for necessário. Sou</p>
				<p>Quando terminei o curso de Farmácia resolvi tentar um mestrado em Ciências da Computação, na área de Machine Learning e Data Mining, no CIn-UFPE. Infelizmente muitas coisas ocorreram e acabei não concluindo o curso. Apesar da frustração não desisti, e resolvi de uma vez por todas estudar e ser desenvolvedora.</p>
				<p>
				, e agora sou Desenvolvedora pelo mesmo motivo. Tenho uma mente voltada para resolução de problemas práticos e foco em resultados, não consigo passar um dia sem aprender algo novo e linguagens de programação me fascinam.</p>
			</section>
		</>
	);
};

export default Faq;
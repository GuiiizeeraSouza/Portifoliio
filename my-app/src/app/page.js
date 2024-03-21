import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-9">
      <div id="nav" className="md:container md:mx-auto flex flex-row">
        <div id='logoNav' class="basis-2/4 flex items-center">
          <Image
            src="/gs.png"
            alt="Minha imagem"
            href='#Container'
            width={100}
            height={100}
          /><a href='#Container'>Guilherme Souza</a></div>
        <div class="basis-2/4">
          <div className="md:container md:mx-auto flex flex-row">

            <div id='linkNav' class="basis-2/4"><a href='#Sobre'>Sobre</a></div>
            <div id='linkNav' class="basis-3/4" ><a href='#Experiencia'>Experiência</a></div>
            <div id='linkNav' class="basis-3/4" >Contato</div>
            <div id='linkNav' class="basis-3/4" >Curriculo</div>
          </div>
        </div>
      </div>
      <div id="mainContainer" className="md:container md:mx-auto">

        <div id="Container" className="md:container md:mx-auto flex flex-row">
          <div id="textInit" class="basis-3/4">
            <Image
              src="/texto.png"
              width={900}
              height={900}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className='barra'></div>

        <div id="Sobre" className="md:container md:mx-auto flex flex-row">
            <div id="textSobre" className="basis-5/5">
                <h1 id='titleSobre'>Sobre mim:</h1>

                <p id='paragrafoSobre'>Olá! Me chamo Guilherme, sou estudante de Sistemas de Informação. Atualmente estou em busca de uma oportunidade na área do desenvolvimento Front-End, estudo a área já faz 3 anos de muito aprendizado!!
                    Nesse meio tempo já fiz cursos, projetos pessoais e tive a oportunidade de trabalhar e aprender como estagiário na Ideatos, onde consegui implementar os conhecimentos que vinha adquirindo. Estou sempre disposto a conversar caso queira saber mais sobre a minha trajetoria na área. </p>
            </div>
        </div>

        <div className='barra'></div>

        <div id="Experiencia" className="md:container md:mx-auto flex flex-row">
          <div className='barraExperiencia'></div>
          <div id="textExperiencia" className="basis-5/5">
            <section id='containerTitle'>
              <h1 id='itemTempo'>{"</>"}</h1>
              <h1 id='titleTempo'>Minhas experiências.</h1>
            </section>

            <section id='containerTempo'>
              <Image
                id='linhaTempo'
                src="/linhaTempo.png"
                width={1200}
                height={1200}
                alt="Picture of the author"
              />
              <div id='titlesLinha'>
                <h1 className='litleTitle'>Curso </h1>
                <h1 className='litleTitle'>Faculdade</h1>
                <h1 className='litleTitle'>Estágio</h1>
              </div>

            </section>
            <div id='textLinha'>
              <h1 className='litleText'>Meu primeiro contato com desenvolvimento, em um curso de desenvolvimento FullStack utilizando JavaScript. </h1>
              <h1 className='litleText'>Momento onde decidi mergulhar na jornada do desenvolvimento de Software dentro da universidade, e onde eu me encontro no momento atual.</h1>
              <h1 className='litleText'>Depois de 1 ano de estudo intenso em desenvolvimento, minha primeira oportunidade dentro de uma empresa, onde pude ter a experiência de desenvolver dentro de um ambiente formal.</h1>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
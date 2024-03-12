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

       

          <div id="Sobre" className="md:container md:mx-auto flex flex-row"> 
            <div id="textSobre" class="basis-5/5"> 
            <div className='barra'></div>    
              <h1 id='titleSobre'>Sobre mim.</h1>
              
              <p id='paragrafoSobre'>Olá! Me chamo Guilherme, sou estudante de Sistemas de Informação. Atualmente estou em busca de uma oportunidade na área do desenvolvimento Front-End, estudo a área já faz 3 anos de muito aprendizado!! 
              Nesse meio tempo já fiz cursos, projetos pessoais e tive a oportunidade de trabalhar e aprender como estagiário na Ideatos, onde consegui implementar os conhecimentos que vinha adquirindo. Estou sempre disposto a conversar caso queira saber mais sobre a minha trajetoria na área. </p>
              
              <div className='barra'></div>
           </div> 

           <div id='Experiencia' className="md:container md:mx-auto flex flex-row"></div>   
          
          </div>
           
      </div>
  
    </main>
  );
}
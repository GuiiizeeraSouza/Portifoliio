import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-9">
     
        <div id="nav" className="md:container md:mx-auto flex flex-row">
          <div class="basis-2/4">GuilhermeSouza</div>
            <div class="basis-2/4">
              <div className="md:container md:mx-auto flex flex-row">
                <div class="basis-1/4"></div>
                <div class="basis-1/4">Sobre</div>
                <div class="basis-1/4">Experiência</div>
                <div class="basis-1/4">Contato</div>
                <div class="basis-1/4">Contato</div>
              </div>
            </div>
         </div> 
      <div id="mainContainer" className="md:container md:mx-auto">  

         <div id="Container" className="md:container md:mx-auto flex flex-row">
           <div id="textInit" class="basis-1/2">
            <section id="lineOne">OLÁ EU SOU O GUILHERME,</section>
            <section id="lineTwo">DEV FRONT-END.</section>
            <section id="lineThree"> <p> <span class="typed-text"></span><span class="cursor">&nbsp;</span></p></section></div>
           <div id="area2" class="basis-1/2"><p>oi</p></div>
         </div>

      </div>
    </main>
  );
}
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9">
     
        <div id="nav" className="md:container md:mx-auto flex flex-row">
          <div class="basis-2/4">01</div>
            <div class="basis-2/4">
              <div className="md:container md:mx-auto flex flex-row">
                <div class="basis-1/4">01</div>
                <div class="basis-1/4">02</div>
                <div class="basis-1/4">03</div>
                <div class="basis-1/4">04</div>
              </div>
            </div>
         </div> 
    
    </main>
  );
}

import { SEO } from '../components/SEO';

export function About() {
  return (
    <>
      <SEO
        title="O salonu | Adna Cosmetics Vrhnika"
        description="Spoznaj zgodbo salona Adna Cosmetics in več kot 5 let izkušenj na področju profesionalne lepotne nege na Vrhniki."
        path="/o-meni"
      />
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">O meni</h1>
          <p className="max-w-2xl mx-auto text-brand-dark/70 text-lg">
            Spoznaj zgodbo salona Adna Cosmetics in več kot 5 let izkušenj na področju lepotne nege na Vrhniki.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-y-12 lg:gap-x-16 lg:gap-y-0 items-start">
          
          <div className="lg:col-start-2 lg:row-start-1 w-full">
            <h2 className="text-4xl font-serif mb-6 lg:mb-8 text-brand-dark">Adna Cosmetics</h2>
            <div className="prose prose-lg text-brand-dark/80 max-w-none">
              <p className="mb-0 lg:mb-6">
                Lepo vabljena v moj kotiček lepote! Spoznajva se v okolju, kjer tvoj termin ni le termin ampak čas, ki ga nameniš sama sebi. Zagotovim ti dobro energijo in prijeten pristop. Če ti je neprijetno ob novem spoznavanju, se lahko zmeniva in te počaka tvoj najljubši film ali pa serija. Trudim se, da je vsem strankam pri meni prijetno in udobno, saj je to tisto kar šteje. Se vidiva! :)
              </p>
            </div>
          </div>

          <div className="w-full static lg:sticky lg:top-32 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-brand-nude translate-x-4 translate-y-4"></div>
              <div className="relative bg-brand-dark/5 overflow-hidden border border-brand-rose group">
                <img
                  src="/profilna-slika.webp"
                  alt="Adna, ustanoviteljica salona Adna Cosmetics na Vrhniki"
                  width={1067}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-start-2 lg:row-start-2 w-full">
            <div className="prose prose-lg text-brand-dark/80 max-w-none">
              <h3 className="text-2xl font-serif text-brand-dark mt-0 lg:mt-10 mb-4">Kdo sem?</h3>
              <p className="mb-6 leading-relaxed">
                Ime mi je Adna, že od majhnega me kozmetika in lepota navdušujeta. V srednji šoli me je želja po delu v kozmetiki popolnoma prevzela in opravila sem prva tečaja za manikuro. Bila sem namreč na srednji šoli, ki s kozmetiko ni imela skupne točke, a sem se po zaključku vpisala na Višjo šolo za kozmetiko in velnes v Ljubljani. Med srednjo šolo in izobraževanjem na višji šoli sem delala v različnih salonih in si nabrala izkušnje. Te izkušnje so nekaj, kar nosim s seboj in mi pri vsakdanjem delu vsekakor pridejo prav. V preteklem času sem v ponudbo dodala tudi nekaj novih storitev, a vseeno manikura ostaja moja svetla točka in nekaj, na kar se želim osredotočiti tudi v prihodnosti.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-brand-nude/30 p-6">
                  <h4 className="font-serif text-xl mb-3 text-brand-dark">Certifikati</h4>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Verjamem v to, da se je v tem poslu potrebno konstantno izobraževati, zato sem se v preteklih letih tudi sama izobraževala in se udeležila več kot 20 izobraževanj. Izobraževanj sem se udeležila tako v Sloveniji kot v tujih državah in se tako učila od najboljših.
                  </p>
                </div>
                <div className="bg-brand-nude/30 p-6">
                  <h4 className="font-serif text-xl mb-3 text-brand-dark">Izkušnje</h4>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Na tem področju imam pet let izkušenj. Ta pot mi je omogočila ogromno karierno in osebnostno rast. Vse to mi je prineslo boljše komunikacijske sposobnosti, boljše odnose s strankami, hitrost ter spretnost pri salonskem delu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

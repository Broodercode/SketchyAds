import { Video, Mic2, MapPin } from 'lucide-react';

export default function Vibe() {
  return (
    <section id="vibe" className="py-24 px-4 bg-white pattern-grid-lg text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black"></div>
            <div className="absolute inset-0 bg-purple-600 translate-x-2 translate-y-2 border-4 border-black"></div>
            <div className="relative bg-white border-4 border-black p-8 md:p-12">
              <h3 className="text-4xl font-display font-extrabold uppercase mb-6">The &quot;Me&quot; Factor</h3>
              <p className="text-lg font-bold mb-4">
                Big agencies send you a 40-page PDF and charge you $5k for &quot;strategy.&quot;
              </p>
              <p className="text-lg mb-4">
                I send you a script that makes you spit out your coffee.
              </p>
              <p className="text-lg font-bold">
                I&apos;m a solo operator. I don&apos;t have overhead. I have a camera, a weird sense of humor, and a deep understanding of what makes locals click.
              </p>
              <div className="mt-8 flex gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-black"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-1 transition-transform cursor-crosshair">
              <h4 className="font-display font-extrabold text-2xl uppercase mb-2 flex items-center gap-2">
                <Video className="w-8 h-8" /> Short Form King
              </h4>
              <p className="font-medium">The world has the attention span of a goldfish. I make 15-second masterpieces that fit right into YouTube Shorts and Google feeds.</p>
            </div>

            <div className="bg-pink-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:-rotate-1 transition-transform cursor-crosshair">
              <h4 className="font-display font-extrabold text-2xl uppercase mb-2 flex items-center gap-2">
                <Mic2 className="w-8 h-8" /> Pro Voice Talent
              </h4>
              <p className="font-medium">I&apos;m solo, but I&apos;m not alone. I contract professional voice actors who sound like they belong in a Marvel trailer.</p>
            </div>

            <div className="bg-blue-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-1 transition-transform cursor-crosshair">
              <h4 className="font-display font-extrabold text-2xl uppercase mb-2 flex items-center gap-2">
                <MapPin className="w-8 h-8" /> Hyper-Local
              </h4>
              <p className="font-medium">We aren&apos;t targeting &quot;America.&quot; We are targeting the 5-mile radius around your front door. Zero wasted spend.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

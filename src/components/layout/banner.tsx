
import Image from 'next/image';

export function Banner() {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 w-full flex items-center justify-center text-center bg-secondary/50">
      <Image
        src="https://placehold.co/1200x400.png"
        alt="网站横幅"
        fill
        className="object-cover opacity-30"
        data-ai-hint="abstract landscape"
        priority
      />
      <div className="relative z-10 p-4 md:p-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
          banner
        </h2>
        <p className="text-md md:text-lg text-foreground/90 mb-6 max-w-2xl mx-auto">
          描述
        </p>
      </div>
    </section>
  );
}


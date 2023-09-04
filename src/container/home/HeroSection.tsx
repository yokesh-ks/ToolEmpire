import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const router = useRouter();
  return (
    <div
      id="home"
      className="relative overflow-hidden pt-[120px] md:pt-[100px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-8 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                Innovative tools for empire builders.
              </h1>
              <p className="mx-auto mb-10 max-w-[720px] text-base  sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                Welcome to a world of innovation and creativity! Discover a
                treasure trove of powerful tools designed to empower empire
                builders like you. Whether you&apos;re a designer, marketer,
                developer, or entrepreneur, our site offers an array of
                essential utilities at your fingertips.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center">
                <Button onClick={() => router.push("/font-wise")}>
                  Start Exploring
                </Button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

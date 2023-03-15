import { FC } from "react";
import { LayoutProps } from "./_";

import desktopBg from "../../assets/bg-main-desktop.png";
import mobileBg from "../../assets/bg-main-mobile.png";
import { FrontCard } from "../FrontCard";
import { BackCard } from "../BackCard";

export const PageLayout: FC<LayoutProps> = ({
  headerProps: { back, front },
  children,
}) => {
  return (
    <main className="flex flex-col w-full lg:flex-row h-full xl:h-5/6 xl:max-w-5xl m-auto lg:overflow-hidden lg:drop-shadow-2xl">
      <header className="relative w-full h-auto min-h-[40vh] lg:h-full basis-1/2 lg:basis-1/3">
        <picture role="presentation" className="absolute inset-0">
          <source srcSet={desktopBg} media="(min-width: 1024px)" />
          <img
            src={mobileBg}
            alt=""
            className="object-cover block h-full w-full"
          />
        </picture>
        <div className="relative w-full h-full max-w-xl mx-auto">
          <div className="absolute top-1/3 translate-y-1/3 left-0 translate-x-8 z-10 lg:translate-y-full lg:top-0 lg:translate-x-1/3 xl:translate-y-1/2 xl:translate-x-[20%]">
            <FrontCard {...front} />
          </div>
          <div className="absolute top-0 translate-y-1/4 right-0 -translate-x-8 z-0 lg:z-10 lg:translate-y-[20%] lg:top-1/2 lg:translate-x-1/2 xl:translate-y-[10%] xl:translate-x-[30%]">
            <BackCard {...back} />
          </div>
        </div>
      </header>
      <article className="h-full w-full lg:h-full lg:basis-2/3 bg-neutral-1">
        {children}
      </article>
    </main>
  );
};

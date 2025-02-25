"use client";

import { PinContainer } from "../ui/3d-pin";

export default function ThreeDPin({
  children,
  project,
  links,
}: {
  children: React.ReactNode;
  project: JSX.Element;
  links: {
    href: string;

    name: string;
  }[];
}) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        links={links}
        project={project}
      >
        {children}
      </PinContainer>
    </div>
  );
}

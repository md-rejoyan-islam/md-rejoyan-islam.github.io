import MobileBottomMenu from "./mobile-bottom-menu";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className="mb-[64px] md:mb-0 relative">
      <footer className="bg-gradient-to-b to-teal-100/50 from-teal-50/50 dark:from-[#0C142E]/70 dark:to-[#0C142E]/10  border-t border-[#0d7ded1d] dark:border-[#0d7ded2d]">
        <div className=" grid grid-cols-1   px-4 max-w-7xl  mx-auto   md:grid-cols-2     items-center gap-y-4  gap-x-12   py-6   flex-wrap overflow-hidden z">
          <div className="text-text-secondary order-2 md:order-1">
            <p className="text-center md:text-left text-sm">
              Copyright © 2024.Made by&nbsp;
              <span className="text-[#0d7ded] font-medium dark:text-[#0d7ded]">
                Md. Rejoyan Islam.&nbsp;
              </span>
            </p>
          </div>
          <div className=" order-1 md:order-2 pr-2">
            <Socials direction="row" position="relative" />
          </div>
        </div>
      </footer>
      <MobileBottomMenu />
    </div>
  );
}

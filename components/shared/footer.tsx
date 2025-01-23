import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="   border-t">
      <div className=" grid grid-cols-1   px-4 max-w-7xl  mx-auto   md:grid-cols-2     items-center gap-y-4  gap-x-12   py-6   flex-wrap overflow-hidden ">
        <div className="text-text-secondary order-2 md:order-1">
          <p className="text-center md:text-left text-sm">
            Copyright © 2024.Made by&nbsp;
            <span className="text-[var(--primary-title)] font-medium">
              Md. Rejoyan Islam.&nbsp;
            </span>
          </p>
        </div>
        <div className=" order-1 md:order-2 pr-2">
          <Socials direction="row" position="relative" />
        </div>
      </div>
    </footer>
  );
}

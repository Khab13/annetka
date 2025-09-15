import { links } from "./constants";

export const Footer = () => (
  <footer
    data-aos="zoom-in"
    className="bg-color-bg pt-[90px] pb-[20px] xl:pt-[100px]"
  >
    <div className="container">
      <div className="border-t border-[#7f7f7f] md:flex items-center justify-between flex-wrap gap-y-[45px] w-full">
        <div
          data-aos="fade-right"
          style={{ color: "var(--color-primary)" }}
          className="pt-[40px] font-fvhr font-normal text-[20px] leading-[180%] uppercase mb-[20px] md:mb-[0] md:pt-[35px] md:flex-grow shrink-0 basis-[45%] xl:basis-[0]"
        >
          Annetka.Hair
        </div>
        <ul
          className="mb-[20px] md:flex flex-grow shrink-0 basis-[45%] gap-x-[30px] md:mb-[0] md:pt-[40px] xl:basis-[0] "
        >
          {links.map((link, i) => (
            <li className="mb-[12px] md:mb-[0]" key={i}>
              <a
                className="text-[16px] text-color-primary"
                style={{ color: "var(--color-primary)" }}
                href={link.href}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-[#7f7f7f] text-[14px] leading-[180%] flex flex-col md:basis-auto md:items-center md:flex-col md:w-[100%] xl:basis-[20%] xl:flex-col xl:items-center xl:justify-center xl:pt-[40px] xl:items-end">
          <span>2014-2022</span>
          <span>Политика конфидициальности</span>
        </div>
      </div>
    </div>
  </footer>
);

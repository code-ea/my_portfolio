/**
 * @copyright 2024 code-ea
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="https://avatars.githubusercontent.com/u/75689614?v=4"
                width={40}
                height={40}
                alt="Nitin portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
          <div className="group">
            <ButtonPrimary
                href="https://drive.google.com/file/d/1rT0rjgeXg9yRxX8b__1rTVz5763vgMQo/view?usp=drive_link"
                label="View CV"
                target="_blank"
                icon="visibility"
              />
          </div>
          <div className="group">
            <ButtonOutline
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
              />
          </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEnuYV-y9rF1A/profile-displayphoto-shrink_800_800/B4DZTHkQBPG8Ac-/0/1738514957596?e=1744243200&v=beta&t=Z3igv9Hh9MsYqDS3YSJeLbWk92zaRLZNZO_EWC9hLmo"
              width={656}
              height={800}
              alt="Hnery Clark"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;

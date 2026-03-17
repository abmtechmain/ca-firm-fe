import { BRAND_COLORS, FOUNDER_DATA } from '../constants';

export const FounderSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4 md:mb-6">
          <div className="inline-block relative w-fit">
            <h2
              className="page-headers"
              style={{ color: BRAND_COLORS.accent }}
            >
              MEET OUR PARTNERS
            </h2>
            <div
              className="absolute -bottom-3 left-0 w-full h-1"
              style={{ backgroundColor: BRAND_COLORS.primary }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-stretch">
          <div className="relative flex justify-center min-h-0">
            <div className="relative overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(14,109,138,0.2)] h-full w-auto max-w-[280px] md:max-w-[320px] lg:max-w-[380px] aspect-[3/4]">
              <img
                src={FOUNDER_DATA.imageUrl}
                alt={FOUNDER_DATA.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p
              className="uppercase font-semibold tracking-[0.28em] mb-4"
              style={{ color: BRAND_COLORS.accent, fontSize: '12px' }}
            >
              {FOUNDER_DATA.tag}
            </p>

            <div className="inline-block relative w-fit mb-6">
              <h3
                className="font-bold"
                style={{
                  color: BRAND_COLORS.primary,
                  fontSize: '36px',
                  lineHeight: '1.15'
                }}
              >
                {FOUNDER_DATA.name}
              </h3>
              <div
                className="absolute -bottom-2 left-0 w-full h-[3px]"
                style={{ backgroundColor: BRAND_COLORS.accent }}
              />
            </div>

            <p
              className="font-medium mb-6"
              style={{
                color: BRAND_COLORS.primary,
                fontSize: '18px'
              }}
            >
              {FOUNDER_DATA.role}
            </p>

            <div
              className="space-y-4 border-l-2 pl-6"
              style={{ borderColor: `${BRAND_COLORS.accent}55` }}
            >
              {FOUNDER_DATA.description.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    color: '#4b5563',
                    fontSize: '17px',
                    lineHeight: '1.8'
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import svgPaths from "./svg-bbliirnbu2";
// import imgImage257 from "figma:asset/b630f1acb79cf46a1263ba545b3b3cb5fd666011.png";
// import imgImage258 from "figma:asset/851bd1445d370081d48011e50696829562956e22.png";
// import imgImage259 from "figma:asset/eac267566ed7c5cc99bb98894c5354c28c168d58.png";
const imgImage257 = "";
const imgImage258 = "";
const imgImage259 = "";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full">
      <p className="css-ew64yg font-['Satoshi:Regular',sans-serif] leading-none relative shrink-0 text-[#0a0a0a] text-[56px]">
        <span>{`Safe. Flexible. `}</span>
        <span
          className="bg-clip-text"
          style={{
            WebkitTextFillColor: "transparent",
            backgroundImage:
              "linear-gradient(90deg, rgb(228, 8, 121) 0%, rgb(191, 46, 185) 50%, rgb(156, 25, 244) 100%), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)",
          }}
        >
          Built for you.
        </span>
      </p>
      <p className="css-ew64yg font-['Inter:Light',sans-serif] font-light leading-[1.67] relative shrink-0 text-[#262626] text-[16px]">{`We deliver smart solutions designed to solve real needs and drive measurable growth. `}</p>
    </div>
  );
}

function Div() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Div"
    >
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[24px] shrink-0 w-[1152px]">
      <Div />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[2px] relative shrink-0 w-[436px]" data-name="Container">
      <div
        className="absolute bg-[#17171c] h-[4px] left-[147.5px] opacity-20 right-0 rounded-[9999px] top-0"
        data-name="Background"
      />
      <div
        className="absolute bg-[#18181b] h-[4px] left-0 rounded-[9999px] top-0 w-[137.5px]"
        data-name="Gradient"
      />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p241d8be0}
            fill="var(--fill-0, #212121)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-col items-center pb-[5.5px] pt-[3px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container2 />
    </div>
  );
}

function ButtonPrevious() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0"
      data-name="Button - Previous"
    >
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p259e0900}
            fill="var(--fill-0, #212121)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-center pb-[5.5px] pt-[3px] px-0 relative shrink-0"
      data-name="Container"
    >
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Container5 />
    </div>
  );
}

function ButtonNext() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0"
      data-name="Button - Next"
    >
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-start relative shrink-0"
      data-name="Container"
    >
      <ButtonPrevious />
      <ButtonNext />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0"
      data-name="Margin"
    >
      <Container7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Margin />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[228px] overflow-clip relative shrink-0 w-[437px]">
      <div
        className="absolute h-[228px] left-0 top-[0.2px] w-[437px]"
        data-name="image 257"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage257}
        />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Satoshi:Regular',sans-serif] justify-center relative shrink-0 text-[28px] text-black tracking-[-0.28px]">
        <p className="css-ew64yg leading-[1.25]">
          Business Process Outsourcing
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-ellipsis w-[min-content]">
        <p className="css-4hzbpn leading-[1.7]">
          Shift your business model from labor-intensive operations to
          high-margin agentic services.
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px]">
        <p className="css-ew64yg leading-[25.2px]">Read more</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p382780f0}
            fill="var(--fill-0, #212121)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container8 />
      <Container10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
        <div className="absolute bg-white h-[54px] left-[364.33px] rounded-tl-[12px] top-[193px] w-[73px]" />
        <Frame9 />
        <Container11 />
        <div
          className="absolute left-[352.33px] size-[12px] top-[235px]"
          data-name="Exclude"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 12"
          >
            <path
              d={svgPaths.p6e67f00}
              fill="var(--fill-0, #FAFAFA)"
              id="Exclude"
            />
          </svg>
        </div>
        <div
          className="absolute left-[425.33px] size-[12px] top-[181px]"
          data-name="Exclude"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 12"
          >
            <path
              d={svgPaths.p6e67f00}
              fill="var(--fill-0, #FAFAFA)"
              id="Exclude"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[16px] h-[491px] items-start overflow-clip relative rounded-[22px] shrink-0 w-[437.333px]">
      <Frame14 />
      <Frame8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[228px] overflow-clip relative shrink-0 w-[437px]">
      <div
        className="absolute h-[228px] left-[-0.33px] top-[0.2px] w-[437px]"
        data-name="image 258"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage258}
        />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Satoshi:Regular',sans-serif] justify-center relative shrink-0 text-[28px] text-black tracking-[-0.28px]">
        <p className="css-ew64yg leading-[1.25]">Commercial Aviation</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-ellipsis w-[min-content]">
        <p className="css-4hzbpn leading-[1.7]">
          Manage high-volume, high-stakes scheduling and passenger support with
          absolute zero-error tolerance.
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px]">
        <p className="css-ew64yg leading-[25.2px]">Read more</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p382780f0}
            fill="var(--fill-0, #212121)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container12 />
      <Container14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
        <div className="absolute bg-white h-[54px] left-[364.34px] rounded-tl-[12px] top-[193px] w-[73px]" />
        <Frame11 />
        <Container15 />
        <div
          className="absolute left-[352.34px] size-[12px] top-[235px]"
          data-name="Exclude"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 12"
          >
            <path
              d={svgPaths.p6e67f00}
              fill="var(--fill-0, #FAFAFA)"
              id="Exclude"
            />
          </svg>
        </div>
        <div
          className="absolute left-[425.34px] size-[12px] top-[181px]"
          data-name="Exclude"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 12"
          >
            <path
              d={svgPaths.p6e67f00}
              fill="var(--fill-0, #FAFAFA)"
              id="Exclude"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[16px] h-[491px] items-start overflow-clip relative rounded-[22px] shrink-0 w-[437.333px]">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[228px] overflow-clip relative shrink-0 w-[437px]">
      <div
        className="absolute h-[228px] left-[0.33px] top-[0.2px] w-[437px]"
        data-name="image 259"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage259}
        />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Satoshi:Regular',sans-serif] justify-center relative shrink-0 text-[28px] text-black tracking-[-0.28px] w-full">
        <p className="css-4hzbpn leading-[1.25]">{`Staffing & RPO`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#171717] text-[16px] text-ellipsis w-full">
        <p className="css-4hzbpn leading-[1.7]">
          cale your delivery capabilities and placement volume without
          increasing administrative overhead.
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[16px]">
        <p className="css-ew64yg leading-[25.2px]">Read more</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p382780f0}
            fill="var(--fill-0, #212121)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div
      className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container16 />
      <Container18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
        <div className="absolute bg-white h-[54px] left-[364.34px] rounded-tl-[12px] top-[193px] w-[73px]" />
        <Frame18 />
        <Container19 />
        <div
          className="absolute left-[352.34px] size-[12px] top-[235px]"
          data-name="Exclude"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 12"
          >
            <path
              d={svgPaths.p6e67f00}
              fill="var(--fill-0, #FAFAFA)"
              id="Exclude"
            />
          </svg>
        </div>
        <div
          className="absolute left-[425.34px] size-[12px] top-[181px]"
          data-name="Exclude"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 12 12"
          >
            <path
              d={svgPaths.p6e67f00}
              fill="var(--fill-0, #FAFAFA)"
              id="Exclude"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[16px] h-[491px] items-start overflow-clip relative rounded-[22px] shrink-0 w-[437.333px]">
      <Frame16 />
      <Frame19 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="content-stretch flex gap-[24px] h-[491px] items-center relative shrink-0 w-full"
      data-name="Section"
    >
      <Frame12 />
      <Frame10 />
      {[...Array(4).keys()].map((_, i) => (
        <Frame13 key={i} />
      ))}
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1152px]">
      <Frame1 />
      <Section />
    </div>
  );
}

function Connection() {
  return (
    <div
      className="relative shrink-0 size-[80px]"
      data-name="connection_4743843 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g clipPath="url(#clip0_4_6548)" id="connection_4743843 1">
          <path
            d={svgPaths.p3a9f7c00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p157fff80}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p8752700}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3994b900}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1e5a6300}
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p3e65c80}
            fill="var(--fill-0, black)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p1d1fd000}
            fill="var(--fill-0, black)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p3257d770}
            fill="var(--fill-0, black)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p15cd9100}
            fill="var(--fill-0, black)"
            id="Vector_9"
          />
          <path
            d={svgPaths.pe7ecd00}
            fill="var(--fill-0, black)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p7363c00}
            fill="var(--fill-0, black)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p81f6f00}
            fill="var(--fill-0, black)"
            id="Vector_12"
          />
          <path
            d={svgPaths.p15cd9100}
            fill="var(--fill-0, black)"
            id="Vector_13"
          />
          <path
            d={svgPaths.pe7ecd00}
            fill="var(--fill-0, black)"
            id="Vector_14"
          />
          <path
            d={svgPaths.p37d7e000}
            fill="var(--fill-0, black)"
            id="Vector_15"
          />
          <path
            d={svgPaths.p19248e00}
            fill="var(--fill-0, black)"
            id="Vector_16"
          />
          <path
            d={svgPaths.p33232a30}
            fill="var(--fill-0, black)"
            id="Vector_17"
          />
          <path
            d={svgPaths.p26111200}
            fill="var(--fill-0, black)"
            id="Vector_18"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_6548">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start not-italic relative w-full">
        <p className="css-ew64yg font-['Satoshi:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[#0a0a0a] text-[32px]">
          Security
        </p>
        <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[1.67] min-w-full relative shrink-0 text-[#262626] text-[16px] w-[min-content]">
          Human-verified outputs with zero tolerance for hallucination
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Connection />
      <Container20 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d="M4.16667 10H15.8333"
            id="Vector"
            stroke="var(--stroke-0, #262626)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p1ae0b780}
            id="Vector_2"
            stroke="var(--stroke-0, #262626)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[50px] shrink-0"
      data-name="Button"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#262626] text-[16px] text-center">
        Learn More
      </p>
      <Icon5 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="backdrop-blur-[3.9px] flex-[1_0_0] h-[314px] min-h-px min-w-px relative rounded-[14px]"
      data-name="Container"
    >
      <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[25px] px-[25px] relative size-full">
        <Container21 />
        <Button />
      </div>
    </div>
  );
}

function Upload() {
  return (
    <div
      className="h-[80px] relative shrink-0 w-[82px]"
      data-name="upload_14316697 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 82 80"
      >
        <g clipPath="url(#clip0_4_6538)" id="upload_14316697 1">
          <path
            d={svgPaths.p562d500}
            fill="var(--fill-0, black)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeWidth="0.4"
          />
          <path
            d={svgPaths.p2b01d400}
            fill="var(--fill-0, black)"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeWidth="0.4"
          />
          <path
            d={svgPaths.p29900700}
            fill="var(--fill-0, black)"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeWidth="0.4"
          />
          <path
            d={svgPaths.p302a5c00}
            fill="var(--fill-0, black)"
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeWidth="0.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_6538">
            <rect fill="white" height="80" width="82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start not-italic relative w-full">
        <p className="css-ew64yg font-['Satoshi:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[#0a0a0a] text-[32px]">
          Deployment
        </p>
        <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[1.67] min-w-full relative shrink-0 text-[#262626] text-[16px] w-[min-content]">
          Deploy your way: VPC or on-premises, fully isolated and protected
          behind your firewall.
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Upload />
      <Container23 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d="M4.16667 10H15.8333"
            id="Vector"
            stroke="var(--stroke-0, #262626)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p1ae0b780}
            id="Vector_2"
            stroke="var(--stroke-0, #262626)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[50px] shrink-0"
      data-name="Button"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#262626] text-[16px] text-center">
        Learn More
      </p>
      <Icon6 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="backdrop-blur-[3.9px] flex-[1_0_0] h-[314px] min-h-px min-w-px relative rounded-[14px]"
      data-name="Container"
    >
      <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[25px] px-[25px] relative size-full">
        <Container24 />
        <Button1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[9.38%_1.47%_0_1.45%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 77.6626 72.5014"
      >
        <g id="Group">
          <path
            d={svgPaths.p20f27170}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p128a5f80}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function X346ShapeBuilder() {
  return (
    <div
      className="absolute contents inset-[9.38%_1.47%_0_1.45%]"
      data-name="_x34_6_Shape_Builder"
    >
      <Group />
    </div>
  );
}

function ShapeBuilder() {
  return (
    <div
      className="relative shrink-0 size-[80px]"
      data-name="shape-builder_15590782 1"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <X346ShapeBuilder />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start not-italic relative w-full">
        <p className="css-ew64yg font-['Satoshi:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[#0a0a0a] text-[32px]">
          Customization
        </p>
        <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[1.67] min-w-full relative shrink-0 text-[#262626] text-[16px] w-[min-content]">
          AI built for your business trained on your data and tailored to your
          goals.
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <ShapeBuilder />
      <Container26 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d="M4.16667 10H15.8333"
            id="Vector"
            stroke="var(--stroke-0, #262626)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p1ae0b780}
            id="Vector_2"
            stroke="var(--stroke-0, #262626)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[50px] shrink-0"
      data-name="Button"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#262626] text-[16px] text-center">
        Learn More
      </p>
      <Icon7 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="backdrop-blur-[3.9px] flex-[1_0_0] h-[314px] min-h-px min-w-px relative rounded-[14px]"
      data-name="Container"
    >
      <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[25px] px-[25px] relative size-full">
        <Container27 />
        <Button2 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container22 />
      <Container25 />
      <Container28 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[24px] shrink-0 w-[1152px]">
      <Frame5 />
    </div>
  );
}

export default function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center px-[144px] py-[112px] relative size-full">
      <Frame3 />
      <Frame21 />
      <Frame2 />
    </div>
  );
}

import svgPaths from "./svg-nxvvyqgizm";
// import imgImageUser from "figma:asset/e1a028291ab99feda0049f236aadcdba942cb545.png";
// import imgImage253 from "figma:asset/1bae956ac4d4865066aed82f0108384890d7b289.png";
const imgImageUser = "";
const imgImage253 = "";

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
      <div className="font-['Satoshi:Regular',sans-serif] leading-none relative shrink-0 text-[#0a0a0a] text-[56px] w-full">
        <p className="css-4hzbpn mb-0">Lets scale your</p>
        <p
          className="bg-clip-text bg-gradient-to-r css-4hzbpn from-[#e40879] to-[#9c19f4] via-1/2 via-[#bf2eb9]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          intelligence.
        </p>
      </div>
      <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[1.67] relative shrink-0 text-[#262626] text-[16px] w-full">
        Join forward-thinking enterprises that trust Pop! AI for their most
        critical workflows.
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function ImageUser() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (User)">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgImageUser}
      />
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[#4a5565] relative rounded-[16777200px] shrink-0 size-[48px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageUser />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px]">
        Marcus Chen
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px]">
        CTO, FinServe Global
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="h-[44px] relative shrink-0 w-[136.758px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-[646px]"
      data-name="Container"
    >
      <Container />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="bg-[#262626] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="content-start flex flex-wrap gap-[50px_1px] items-start p-[24px] relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[#ffb300] text-[36px] tracking-[0.3691px]">{`"`}</p>
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Italic',sans-serif] font-normal italic leading-[28px] min-h-px min-w-px relative text-[#e5e7eb] text-[18px] tracking-[-0.4395px]">{`We reduced our manual QA costs by 70% while increasing accuracy to 99.95%. The human-in-the-loop guarantee allowed us to deploy AI in regulated markets where we couldn't before.`}</p>
        <Container4 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[258px] items-start relative shrink-0 w-full">
      <Container5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <Frame16 />
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="h-[48px] relative rounded-[8px] shrink-0 w-full"
      data-name="Frame"
    >
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px] w-full">
            Name
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Frame"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[16px]">
        Full Name
      </p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div
      className="h-[48px] relative rounded-[8px] shrink-0 w-full"
      data-name="Frame"
    >
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px] w-[143px]">
            Enter 10 digit number
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d4d4d4] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]"
      />
    </div>
  );
}

function Frame3() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative"
      data-name="Frame"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[16px]">
        Phone number
      </p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div
      className="h-[48px] relative rounded-[8px] shrink-0 w-full"
      data-name="Frame"
    >
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px] w-full">{`Enter your email `}</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d4d4d4] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]"
      />
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative"
      data-name="Frame"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[16px]">{`Email `}</p>
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
      data-name="Frame"
    >
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div
      className="h-[120px] relative rounded-[8px] shrink-0 w-full"
      data-name="Frame"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[14px] relative size-full">
          <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px] w-[82px]">
            Write here...
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d4d4d4] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]"
      />
    </div>
  );
}

function Frame8() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Frame"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[16px]">
        How can we help you?
      </p>
      <Frame7 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="calendar">
          <path
            d={svgPaths.p3998da00}
            id="Vector"
            stroke="var(--stroke-0, #71717A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative"
      data-name="Content"
    >
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[20px] min-h-px min-w-px not-italic relative text-[#404040] text-[14px]">
        Pick date and time
      </p>
    </div>
  );
}

function Input() {
  return (
    <div
      className="h-[48px] min-h-[36px] relative rounded-[8px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative size-full">
          <Calendar />
          <Content />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d4d4d4] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]"
      />
    </div>
  );
}

function Frame9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Frame"
    >
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[16px]">
        Select a date and time for your Meeting :
      </p>
      <Input />
    </div>
  );
}

function Frame10() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full"
      data-name="Frame"
    >
      <Frame1 />
      <Frame6 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#0a0a0a] relative rounded-[50px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#fafafa] text-[16px] text-center">
            Send Message
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[16px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#d4d4d4] border-solid inset-[-1px] pointer-events-none rounded-[17px]"
      />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Frame10 />
        <div
          className="h-[55.064px] relative shrink-0 w-[235.42px]"
          data-name="image 253"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[138.87%] left-[-3.81%] max-w-none top-[-24.01%] w-[107.58%]"
              src={imgImage253}
            />
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Frame11 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-start justify-center relative rounded-[27.375px] shrink-0 w-[1140px]"
      data-name="Content"
    >
      <Frame14 />
      <Frame12 />
    </div>
  );
}

export default function Contact() {
  return (
    <div
      className="content-stretch flex flex-col items-center px-[150px] py-[112px] relative size-full"
      data-name="Contact"
    >
      <Content1 />
    </div>
  );
}

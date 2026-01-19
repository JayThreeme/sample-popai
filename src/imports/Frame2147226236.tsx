import svgPaths from "./svg-y7oatyvao";
// import imgFrame2147226236 from "figma:asset/e5c5b4fa85692b3ae6840a011c1d4ea7bce8cbf2.png";
const imgFrame2147226236 = "";

function Div() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-full"
      data-name="Div"
    >
      <p className="css-4hzbpn font-['Satoshi:Medium',sans-serif] leading-none min-w-full relative shrink-0 text-[#fafafa] text-[56px] w-[min-content]">
        <span>{`Ready to put `}</span>AI to work?
      </p>
      <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[1.67] relative shrink-0 text-[#e5e5e5] text-[16px] w-[522.219px]">
        Join enterprise teams who trust Pop! AI for mission-critical automation
        with human-verified accuracy.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#fafafa] h-[56px] relative rounded-[50px] shrink-0"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[32px] py-[16px] relative">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[16px] text-center">
          Request a Demo
        </p>
      </div>
    </div>
  );
}

function Icon() {
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
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p1ae0b780}
            id="Vector_2"
            stroke="var(--stroke-0, #FAFAFA)"
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
      className="h-[56px] relative rounded-[50px] shrink-0"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center justify-center px-[32px] py-[16px] relative">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#fafafa] text-[16px] text-center">
          View Case Studies
        </p>
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-start justify-center pl-0 pr-[0.008px] py-0 relative shrink-0 w-[896px]"
      data-name="Container"
    >
      <Button />
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative rounded-[24px] shrink-0 w-[1152px]">
      <Div />
      <Container />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-end pb-[164px] pt-[112px] px-[144px] relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#010101] inset-0" />
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src={imgFrame2147226236}
        />
      </div>
      <Frame />
    </div>
  );
}

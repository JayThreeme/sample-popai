import svgPaths from "./svg-g7w5duapdr";

function Container() {
  return (
    <div className="h-[2px] relative shrink-0 w-[436px]" data-name="Container">
      <div className="absolute bg-[#a1a1a1] h-[4px] left-[147.5px] opacity-20 right-0 rounded-[9999px] top-0" data-name="Background" />
      <div className="absolute bg-white h-[4px] left-0 rounded-[9999px] top-0 w-[137.5px]" data-name="Gradient" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p241d8be0} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
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
    <div className="content-stretch flex flex-col items-center pb-[5.5px] pt-[3px] px-0 relative shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function ButtonPrevious() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Button - Previous">
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p259e0900} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
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
    <div className="content-stretch flex flex-col items-center pb-[5.5px] pt-[3px] px-0 relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function ButtonNext() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Button - Next">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Container">
      <ButtonPrevious />
      <ButtonNext />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-0 pr-[144px] py-0 relative shrink-0 w-[1341px]">
      <Frame />
    </div>
  );
}

function LucidePlug() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="lucide:plug">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="lucide:plug">
          <path d={svgPaths.p1f2ab380} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function ProductShowcase() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="ProductShowcase">
      <LucidePlug />
      <p className="css-ew64yg font-['Satoshi:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white">{`Rapid Plug & Play`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e40879] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_40px_0px_rgba(192,45,183,0.3)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <ProductShowcase />
        <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.3125px] w-full">Seamlessly connect your data sources text, files, and URLs to build a robust knowledge base and train your agents in minutes.</p>
      </div>
    </div>
  );
}

function MdiRobotOutline() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="mdi:robot-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="mdi:robot-outline">
          <path d={svgPaths.p1c461200} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ProductShowcase1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="ProductShowcase">
      <MdiRobotOutline />
      <p className="css-4hzbpn font-['Satoshi:Regular',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Ready-to-Deploy Agents</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <ProductShowcase1 />
        <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.3125px] w-full">Access a comprehensive library of pre-built, domain-specific AI agents and specialized tools designed for immediate operational impact across your enterprise.</p>
      </div>
    </div>
  );
}

function BiMagic() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="bi:magic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="bi:magic">
          <path d={svgPaths.p23277c00} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ProductShowcase2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="ProductShowcase">
      <BiMagic />
      <p className="css-ew64yg font-['Satoshi:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white">No-Code Automation</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <ProductShowcase2 />
        <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.3125px] w-full">Design complex workflows and autonomous agents using simple natural language prompts, removing the technical barriers to advanced business process automation.</p>
      </div>
    </div>
  );
}

function MdiShieldCheckOutline() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="mdi:shield-check-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="mdi:shield-check-outline">
          <path d={svgPaths.p1cccf650} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ProductShowcase3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="ProductShowcase">
      <MdiShieldCheckOutline />
      <p className="css-ew64yg font-['Satoshi:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[24px] text-white">Guaranteed Integrity</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <ProductShowcase3 />
        <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.3125px] w-full">Ensure total control with our HITL layer that verifies agent behavior, prevents escalations, and drives continuous performance improvements.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[2350px]">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container8 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container9 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container10 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        {[...Array(3).keys()].map((_, i) => (
          <Container11 key={i} />
        ))}
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch" />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-tl-[144px] shrink-0 w-[1296px]">
      <Frame1 />
      <Frame11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[32.31px] relative shrink-0 w-[168.386px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168.386 32.3099">
        <g id="Frame 2147226248">
          <path d={svgPaths.p3d0b1400} fill="var(--fill-0, #D4D4D4)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p918df00} fill="var(--fill-0, #D4D4D4)" id="Vector_2" />
            <path d={svgPaths.p6c8d800} fill="var(--fill-0, #D4D4D4)" id="Vector_3" />
            <path d={svgPaths.p12a92700} fill="var(--fill-0, #D4D4D4)" id="Vector_4" />
            <path d={svgPaths.pdfe2680} fill="var(--fill-0, #D4D4D4)" id="Vector_5" />
            <path d={svgPaths.p1da0a400} fill="var(--fill-0, #D4D4D4)" id="Vector_6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[32.309px] relative shrink-0 w-[93.997px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.9975 32.3089">
        <g id="Frame 2147226252">
          <path d={svgPaths.p14ebeb00} fill="var(--fill-0, #D4D4D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[32.309px] relative shrink-0 w-[120.838px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.838 32.3089">
        <g id="Frame 2147226251">
          <path d={svgPaths.p27d86500} fill="var(--fill-0, #D4D4D4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[32.309px] relative shrink-0 w-[137.235px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.235 32.3089">
        <g id="Frame 2147226249">
          <g id="Group">
            <path d={svgPaths.p7e3a370} fill="var(--fill-0, #D4D4D4)" id="Vector" />
            <path d={svgPaths.p34538540} fill="var(--fill-0, #D4D4D4)" id="Vector_2" />
            <path d={svgPaths.p3c8608d0} fill="var(--fill-0, #D4D4D4)" id="Vector_3" />
            <path d={svgPaths.p2806ba00} fill="var(--fill-0, #D4D4D4)" id="Vector_4" />
          </g>
          <path d={svgPaths.p1e096f00} fill="var(--fill-0, #D4D4D4)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[31.808px] relative shrink-0 w-[43.331px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3306 31.8083">
        <g id="Group 1597884367">
          <path d={svgPaths.p5df1e80} fill="var(--fill-0, #D4D4D4)" id="Vector" />
          <path d={svgPaths.p38cbec70} fill="var(--fill-0, #D4D4D4)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[32.307px] relative shrink-0 w-[215.324px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215.324 32.307">
        <g id="Group">
          <path d={svgPaths.pabd32f2} fill="var(--fill-0, #D4D4D4)" id="Vector" />
          <path d={svgPaths.p1eb7f580} fill="var(--fill-0, #D4D4D4)" id="Vector_2" />
          <path d={svgPaths.p2f68b200} fill="var(--fill-0, #D4D4D4)" id="Vector_3" />
          <path d={svgPaths.p3023f940} fill="var(--fill-0, #D4D4D4)" id="Vector_4" />
          <path d={svgPaths.p18eea700} fill="var(--fill-0, #D4D4D4)" id="Vector_5" />
          <path d={svgPaths.p3a9fdf80} fill="var(--fill-0, #D4D4D4)" id="Vector_6" />
          <path d={svgPaths.p239acd00} fill="var(--fill-0, #D4D4D4)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12.486px] items-center relative shrink-0">
      <Group1 />
      <Group />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24.179px] items-center relative shrink-0">
      <Frame4 />
      <Frame8 />
      <Frame7 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12.486px] items-start relative shrink-0 w-[899px]">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[1.67] min-w-full not-italic relative shrink-0 text-[#d4d4d4] text-[16px] text-center w-[min-content]">DEPLOYED ON</p>
      <Frame9 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#101010] content-stretch flex flex-col gap-[48px] items-center pb-[112px] pl-[144px] pr-0 pt-0 relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <Frame12 />
      <Frame10 />
    </div>
  );
}
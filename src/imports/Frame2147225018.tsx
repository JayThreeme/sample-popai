import svgPaths from "./svg-st6xn7ygav";

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-name="Div">
      <div className="font-['Satoshi:Regular',sans-serif] leading-none min-w-full relative shrink-0 text-[#0a0a0a] text-[72px] w-[min-content]">
        <p className="css-4hzbpn mb-0">
          <span>{`Sovereign `}</span>
          <span className="bg-clip-text text-[#0a0a0a]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(228, 8, 121) 0%, rgb(191, 46, 185) 50%, rgb(156, 25, 244) 100%), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }}>
            Intelligence.
          </span>
        </p>
        <p className="css-4hzbpn">
          <span>{`Engineered for `}</span>
          <span className="text-[#0a0a0a]">{`P&L Impact`}</span>
        </p>
      </div>
      <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[1.67] relative shrink-0 text-[#262626] text-[16px] w-[801.391px]">Deploy full-stack AI agents built on proprietary foundational models and scaled by human-in-the-loop integrity layer. Your data, your models, our results.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative rounded-[50px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#fafafa] text-[16px] text-center">Request a Demo</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative rounded-[10px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[16px] text-center">More Information</p>
      <Icon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Div />
      <Frame1 />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Div">
      <Frame2 />
    </div>
  );
}

function Hero() {
  return <div className="absolute h-[415px] left-0 top-0 w-[664px]" data-name="Hero" />;
}

function Container() {
  return <div className="bg-[#00bc7d] opacity-98 rounded-[12673413px] shrink-0 size-[6.043px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[15.108px] relative shrink-0 w-[152.808px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[12.754px] left-0 not-italic text-[#fafafa] text-[16px] top-[0.38px]">Handwritten receipt</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[9.065px] h-[15.108px] items-center left-[73.88px] top-[17.75px] w-[415.467px]" data-name="Container">
      <Container />
      <Text />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[44.7px] w-[276.976px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[59.8px] w-[207.734px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="h-[15.108px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0719 12.5899">
            <path d={svgPaths.p18b13800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.25899" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.49px] size-[15.108px] top-[18.13px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function IsolationMode() {
  return (
    <div className="absolute h-[60.671px] left-[11.88px] overflow-clip top-[11.97px] w-[47.609px]" data-name="Isolation_Mode">
      <div className="absolute inset-[-0.01%_0.02%_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.6008 60.6748">
          <path d={svgPaths.pe85b900} fill="var(--fill-0, #DADADA)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex inset-[15.18%_48.26%_73.51%_23.73%] items-center justify-center">
        <div className="flex-none h-[3.641px] rotate-[344.88deg] w-[12.829px]">
          <p className="css-4hzbpn font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative size-full text-[#707070] text-[3.01px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            RECEIPT
          </p>
        </div>
      </div>
      <div className="absolute flex inset-[18.23%_32.35%_69.16%_15.35%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[25.514px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5137 1.03503">
              <path d={svgPaths.p398f6300} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[52.06%_20.71%_35.33%_26.99%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[25.514px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5137 1.03503">
              <path d={svgPaths.p398f6300} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[59.7%_33.57%_33.53%_41.72%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[11.908px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9082 1.03503">
              <path d={svgPaths.p26d41c00} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[32.45%_51.86%_59.76%_18.59%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[14.291px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2912 1.03503">
              <path d={svgPaths.p3b0a1600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.7%_69.21%_55.5%_20.06%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[5.01px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.01016 1.03503">
              <path d={svgPaths.p1621bb00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.76%_57.39%_51.24%_21.52%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[10.121px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.121 1.03504">
              <path d={svgPaths.p1f38f880} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.23%_47.47%_46.99%_22.98%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[14.291px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2912 1.03503">
              <path d={svgPaths.p3b0a1600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[53.02%_62.73%_42.73%_24.45%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[6.043px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.04305 1.03503">
              <path d={svgPaths.p33053e00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.7%_29.45%_68.1%_57.93%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[5.944px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.94448 1.03503">
              <path d={svgPaths.p6a61300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.95%_27.98%_63.84%_59.4%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.88deg] w-[5.944px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.94448 1.03503">
              <path d={svgPaths.p6a61300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.22%_26.51%_59.58%_60.87%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[5.944px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.94447 1.03503">
              <path d={svgPaths.p20cd9300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.47%_25.04%_55.33%_62.34%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.88deg] w-[5.944px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.94447 1.03503">
              <path d={svgPaths.p20cd9300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.73%_23.59%_51.07%_63.79%] items-center justify-center">
        <div className="flex-none h-[1.035px] rotate-[344.89deg] w-[5.944px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.94448 1.03503">
              <path d={svgPaths.p6a61300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[76.86%_63.81%_12.16%_31.59%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.435px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.435015 6.78236">
              <path d={svgPaths.pb182300} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[76.45%_61.88%_12.57%_33.52%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.435px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.435014 6.78236">
              <path d={svgPaths.p1ce8c800} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[75.52%_57.5%_13.6%_38.35%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.219px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.218579 6.78236">
              <path d={svgPaths.p22e0c670} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[75.21%_56.04%_13.9%_39.8%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.219px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.218579 6.78236">
              <path d={svgPaths.p22e0c670} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[75.77%_58.65%_12.98%_35.48%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.89deg] w-[1.063px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.06289 6.78236">
              <path d={svgPaths.p3381a080} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[74.54%_52.88%_14.21%_41.26%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.89deg] w-[1.063px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.06289 6.78236">
              <path d={svgPaths.p3381a080} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[74.25%_51.54%_14.77%_43.86%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.435px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.435015 6.78236">
              <path d={svgPaths.pb182300} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[73.85%_49.61%_15.17%_45.79%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.435px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.435014 6.78236">
              <path d={svgPaths.p1ce8c800} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[71.56%_38.83%_17.46%_56.57%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.435px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.435014 6.78236">
              <path d={svgPaths.p1ce8c800} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[71.16%_36.93%_17.86%_58.48%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.435px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.435014 6.78236">
              <path d={svgPaths.p1ce8c800} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[72.92%_45.24%_16.19%_50.6%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.219px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.218579 6.78236">
              <path d={svgPaths.p22e0c670} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[72.6%_43.77%_16.51%_52.07%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.88deg] w-[0.219px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.218578 6.78236">
              <path d={svgPaths.p14f48780} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[73.17%_46.38%_15.58%_47.75%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.89deg] w-[1.063px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.06289 6.78236">
              <path d={svgPaths.p3381a080} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[71.94%_40.61%_16.81%_53.52%] items-center justify-center">
        <div className="flex-none h-[6.782px] rotate-[344.89deg] w-[1.063px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.06289 6.78236">
              <path d={svgPaths.p3381a080} fill="var(--fill-0, #707070)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border-[0.755px] border-[rgba(255,255,255,0.2)] border-solid h-[86.115px] left-[126.8px] rounded-[12.086px] shadow-[0px_4px_10px_-9.065px_rgba(0,0,0,0.25)] top-[216.39px] w-[453.237px]" data-name="card">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <IsolationMode />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#00bc7d] opacity-98 rounded-[12673413px] shrink-0 size-[6.043px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="h-[15.108px] relative shrink-0 w-[152.808px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16.884px] left-0 not-italic text-[#fafafa] text-[16px] top-[0.38px]">Scanned PDF</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[9.065px] h-[15.108px] items-center left-[73.88px] top-[17.42px] w-[415.467px]" data-name="Container">
      <Container5 />
      <Text1 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[45.33px] w-[276.976px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[60.43px] w-[207.734px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="h-[15.108px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-1/4 right-[16.67%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0719 12.5899">
            <path d={svgPaths.p18b13800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.25899" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.49px] size-[15.108px] top-[18.13px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4566 51.4044">
        <g id="Group 1597884317">
          <path d={svgPaths.p2b08ab00} fill="var(--fill-0, #DADADA)" id="Vector" />
          <path d={svgPaths.p39b97f80} fill="var(--fill-0, #EF2525)" id="Vector_2" />
          <path d={svgPaths.p389b1400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1bec5100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p27d1b240} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1b358a00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2ac0fc00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p23c39000} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p11bb3800} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border-[0.755px] border-[rgba(255,255,255,0.2)] border-solid h-[86.115px] left-[126.8px] rounded-[12.086px] shadow-[0px_4px_10px_-9.065px_rgba(0,0,0,0.25)] top-[313.84px] w-[453.237px]" data-name="card">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <div className="absolute flex inset-[calc(15.28%-0.76px)_calc(86.07%-0.76px)_calc(15.28%-0.76px)_calc(2.06%-0.76px)] items-center justify-center">
        <div className="flex-none h-[51.404px] rotate-[347.108deg] w-[43.457px]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return <div className="bg-[#00bc7d] opacity-98 rounded-[12673413px] shrink-0 size-[6.043px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="h-[15.108px] relative shrink-0 w-[152.808px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[12.754px] left-0 not-italic text-[#fafafa] text-[16px] top-[0.38px]">Booking form</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[9.065px] h-[15.108px] items-center left-[73.88px] top-[18.13px] w-[415.467px]" data-name="Container">
      <Container10 />
      <Text2 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[45.32px] w-[276.976px]" data-name="Container" />;
}

function Container13() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[60.43px] w-[207.734px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="h-[15.108px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.49%_16.65%_12.51%_25.02%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0719 12.5899">
            <path d={svgPaths.p18b13800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.25899" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.49px] size-[15.108px] top-[18.13px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Objects() {
  return (
    <div className="h-[57.127px] relative w-[34.189px]" data-name="OBJECTS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.1888 57.1273">
        <g clipPath="url(#clip0_2_2160)" id="OBJECTS">
          <path d={svgPaths.p3562c600} fill="var(--fill-0, #DADADA)" id="Vector" />
          <path d={svgPaths.p24ce000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p59a1e00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pd12b500} fill="var(--fill-0, #A8A8A8)" id="Vector_4" />
          <path d={svgPaths.p25cb200} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p33e5300} fill="var(--fill-0, #A8A8A8)" id="Vector_6" />
          <path d={svgPaths.p1c97cb00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2204bb00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p136ffc00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1f30fa00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2cf0fb00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p31e5bd00} fill="var(--fill-0, white)" id="Vector_12" />
        </g>
        <defs>
          <clipPath id="clip0_2_2160">
            <rect fill="white" height="57.1273" width="34.1888" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border-[0.755px] border-[rgba(255,255,255,0.2)] border-solid h-[86.115px] left-[126.8px] rounded-[12.086px] shadow-[0px_4px_10px_-9.065px_rgba(0,0,0,0.25)] top-[118.95px] w-[453.237px]" data-name="card">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <div className="absolute flex h-[63.254px] items-center justify-center left-[12.88px] top-[7.73px] w-[45.93px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[347.278deg]">
          <Objects />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return <div className="bg-[#00bc7d] opacity-98 rounded-[12673413px] shrink-0 size-[6.043px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="h-[15.108px] relative shrink-0 w-[152.808px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[15.108px] left-0 not-italic text-[#fafafa] text-[16px] top-[0.38px]">Customer email</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[9.065px] h-[15.108px] items-center left-[73.88px] top-[18.13px] w-[415.467px]" data-name="Container">
      <Container15 />
      <Text3 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[45.32px] w-[276.976px]" data-name="Container" />;
}

function Container18() {
  return <div className="absolute bg-[rgba(255,255,255,0.32)] h-[6.043px] left-[73.88px] rounded-[12673413px] top-[60.43px] w-[207.734px]" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="h-[15.108px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.49%_16.65%_12.51%_25.01%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0719 12.5899">
            <path d={svgPaths.p18b13800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.25899" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.49px] size-[15.108px] top-[18.13px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8569 35.5304">
        <g id="Group 1597884318">
          <path d={svgPaths.pb659980} fill="var(--fill-0, #DADADA)" id="Vector" />
          <path d={svgPaths.p33330aa0} fill="var(--fill-0, #DADADA)" id="Vector_2" />
          <path d={svgPaths.pc11d400} fill="var(--fill-0, #E02727)" id="Vector_3" />
          <path d={svgPaths.p35e36400} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[calc(22.32%-0.76px)_calc(85.03%-0.76px)_calc(27.74%-0.76px)_calc(3.06%-0.76px)]">
      <div className="absolute flex inset-[22.32%_85.03%_27.74%_3.06%] items-center justify-center">
        <div className="flex-none h-[35.53px] rotate-[350.636deg] w-[48.857px]">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border-[0.755px] border-[rgba(255,255,255,0.2)] border-solid h-[86.115px] left-[126.8px] rounded-[12.086px] shadow-[0px_4px_10px_-9.065px_rgba(0,0,0,0.25)] top-[21.5px] w-[453.237px]" data-name="card">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Group2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#262626] h-[415px] relative rounded-[24px] shrink-0 w-[474px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        {[...Array(2).keys()].map((_, i) => (
          <Hero key={i} />
        ))}
        <Card />
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#525252] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Hero1() {
  return (
    <div className="absolute h-[415px] left-0 top-0 w-[664px]" data-name="Hero">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/f908201f5873820207e49a5985cefc39f45c2bd3" />
      </video>
    </div>
  );
}

function Hero2() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[415px] left-0 to-[rgba(0,0,0,0)] top-0 w-[664px]" data-name="Hero" />;
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px]">Empower your workforce</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">AI that works alongside your team</p>
    </div>
  );
}

function Hero3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[52px] items-start left-[32px] top-[331px] w-[218.477px]" data-name="Hero">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] h-[415px] min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="Container">
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[1152px]">
      <Container20 />
      <Container21 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center pb-[112px] pt-[186px] px-[64px] relative size-full">
      <Div1 />
      <Frame3 />
    </div>
  );
}
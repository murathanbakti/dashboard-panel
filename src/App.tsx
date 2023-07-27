import React, { useState } from "react";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

const App: React.FC = () => {
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);

  const toggleSidebar = (i: number) => {
    if (i === 1) {
        setIsOpenLeft(!isOpenLeft);
    }else{
        setIsOpenRight(!isOpenRight);
    }
  };

  
  return (
    <div className="flex">
      <div className="flex">
        <SidebarLeft isOpen={isOpenLeft} />
      </div>
      <div className="flex-1 p-5">
        <div className="w-full">
          <div className="header-comp border-b-2 pb-5 flex align-middle justify-between">
            <div className="header-left flex align-middle">
              <button
                className="text-black font-bold  rounded  w-4 h-4 mr-3"
                onClick={()=>toggleSidebar(1)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Sidebar-d">
                    <path
                      id="Vector"
                      d="M3.19535 12.5573C3.07447 12.5573 2.95859 12.5093 2.87308 12.4238C2.78763 12.3383 2.73962 12.2224 2.73962 12.1015V3.89842C2.73962 3.77753 2.78763 3.66165 2.87308 3.57615C2.95859 3.4907 3.07447 3.44269 3.19535 3.44269H5.92973V12.5573H3.19535Z"
                      fill="#1C1C1C"
                      fill-opacity="0.1"
                    />
                    <path
                      id="Vector_2"
                      d="M5.474 3.44267V12.5573C5.474 12.8089 5.67804 13.013 5.92973 13.013C6.18142 13.013 6.38546 12.8089 6.38546 12.5573V3.44267C6.38546 3.19098 6.18142 2.98694 5.92973 2.98694C5.67804 2.98694 5.474 3.19098 5.474 3.44267Z"
                      fill="#1C1C1C"
                    />
                    <path
                      id="Vector_3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.28381 3.8984C2.28381 3.8984 2.28381 3.52086 2.55077 3.2539C2.55077 3.2539 2.81773 2.98694 3.19527 2.98694H13.2213C13.2213 2.98694 13.5989 2.98694 13.8658 3.2539C13.8658 3.2539 14.1328 3.52086 14.1328 3.8984V12.1015C14.1328 12.1015 14.1328 12.4791 13.8658 12.746C13.8658 12.746 13.5989 13.013 13.2213 13.013H3.19527C3.19527 13.013 2.81773 13.013 2.55077 12.746C2.55077 12.746 2.28381 12.4791 2.28381 12.1015V3.8984ZM3.19527 3.8984V12.1015H13.2213V3.8984H3.19527Z"
                      fill="#1C1C1C"
                    />
                    <path
                      id="Vector_4"
                      d="M2.73954 5.72133H4.10673C4.35842 5.72133 4.56246 5.5173 4.56246 5.2656C4.56246 5.01391 4.35842 4.80988 4.10673 4.80988H2.73954C2.48785 4.80988 2.28381 5.01391 2.28381 5.2656C2.28381 5.5173 2.48785 5.72133 2.73954 5.72133Z"
                      fill="#1C1C1C"
                    />
                    <path
                      id="Vector_5"
                      d="M2.73954 7.54427H4.10673C4.35842 7.54427 4.56246 7.34023 4.56246 7.08854C4.56246 6.83685 4.35842 6.63281 4.10673 6.63281H2.73954C2.48785 6.63281 2.28381 6.83685 2.28381 7.08854C2.28381 7.34023 2.48785 7.54427 2.73954 7.54427Z"
                      fill="#1C1C1C"
                    />
                    <path
                      id="Vector_6"
                      d="M2.73954 9.36715H4.10673C4.35842 9.36715 4.56246 9.16311 4.56246 8.91142C4.56246 8.65973 4.35842 8.45569 4.10673 8.45569H2.73954C2.48785 8.45569 2.28381 8.65973 2.28381 8.91142C2.28381 9.16311 2.48785 9.36715 2.73954 9.36715Z"
                      fill="#1C1C1C"
                    />
                  </g>
                </svg>
              </button>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Star-d">
                  <path
                    id="Vector"
                    d="M7.70904 11.5718L10.5801 13.3947C10.9504 13.6283 11.4061 13.2808 11.2979 12.8535L10.4662 9.58368C10.4437 9.49303 10.4473 9.3979 10.4765 9.30919C10.5057 9.22052 10.5594 9.14188 10.6314 9.08239L13.2063 6.93475C13.5423 6.65562 13.3714 6.09166 12.9328 6.06318L9.57179 5.84669C9.48011 5.84135 9.39194 5.80942 9.31812 5.75479C9.24424 5.70016 9.18788 5.6252 9.15595 5.53908L7.9027 2.38316C7.86954 2.29195 7.80907 2.21318 7.72963 2.15749C7.65013 2.10183 7.55539 2.07196 7.45837 2.07196C7.3613 2.07196 7.26661 2.10183 7.18711 2.15749C7.10762 2.21318 7.0472 2.29195 7.01405 2.38316L5.76079 5.53908C5.72886 5.6252 5.6725 5.70016 5.59863 5.75479C5.5248 5.80942 5.43663 5.84135 5.34495 5.84669L1.98395 6.06318C1.5453 6.09166 1.3744 6.65562 1.71047 6.93475L4.28535 9.08239C4.35733 9.14188 4.41102 9.22052 4.44022 9.30919C4.46948 9.3979 4.47304 9.49303 4.45057 9.58368L3.68153 12.6143C3.55052 13.127 4.09737 13.5428 4.53602 13.2637L7.2077 11.5718C7.28263 11.5241 7.36958 11.4989 7.45837 11.4989C7.54716 11.4989 7.63411 11.5241 7.70904 11.5718Z"
                    fill="#1C1C1C"
                    fill-opacity="0.1"
                  />
                  <path
                    id="Vector_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.46446 11.9563C7.46446 11.9563 7.46166 11.9546 7.45834 11.9546C7.45834 11.9546 7.45503 11.9546 7.45223 11.9563L4.7798 13.6487C4.7798 13.6487 4.49551 13.8296 4.16725 13.8067C4.16725 13.8067 3.86516 13.7856 3.61932 13.5987C3.61932 13.5987 3.37655 13.4142 3.27091 13.1302C3.27091 13.1302 3.15731 12.8248 3.23995 12.5014L4.0088 9.47156C4.0088 9.47156 4.01098 9.46274 4.00738 9.45182C4.00738 9.45182 4.00378 9.4409 3.99492 9.43357L1.41855 7.2847C1.41855 7.2847 1.18548 7.09113 1.10902 6.80089C1.10902 6.80089 1.03913 6.53565 1.1213 6.27019C1.1213 6.27019 1.20438 6.00178 1.41467 5.82403C1.41467 5.82403 1.64615 5.62839 1.95436 5.60837L5.31561 5.39189C5.31561 5.39189 5.32351 5.39142 5.3276 5.38839C5.3276 5.38839 5.33169 5.38537 5.33346 5.3806L5.3372 5.37086L6.58836 2.22019C6.58836 2.22019 6.68895 1.94998 6.92567 1.78419C6.92567 1.78419 7.16552 1.61621 7.45834 1.61621C7.45834 1.61621 7.75116 1.61621 7.99101 1.78419C7.99101 1.78419 8.22773 1.94998 8.32832 2.22019L9.57949 5.37086L9.58323 5.3806C9.58323 5.3806 9.585 5.38537 9.58909 5.38839C9.58909 5.38839 9.59318 5.39142 9.59826 5.39171L12.9621 5.60836C12.9621 5.60836 13.2705 5.62839 13.502 5.82403C13.502 5.82403 13.7123 6.00178 13.7954 6.27019C13.7954 6.27019 13.8776 6.53565 13.8077 6.80089C13.8077 6.80089 13.7312 7.09113 13.4974 7.28531L10.9233 9.43232C10.9233 9.43232 10.9129 9.4409 10.9093 9.45182C10.9093 9.45182 10.9057 9.46274 10.9085 9.4739L11.7395 12.7412C11.7395 12.7412 11.8138 13.0342 11.7103 13.3108C11.7103 13.3108 11.614 13.5683 11.3935 13.7352C11.3935 13.7352 11.17 13.9045 10.895 13.9234C10.895 13.9234 10.5966 13.9439 10.337 13.7801L7.46507 11.9567L7.46472 11.9565L7.46446 11.9563ZM10.8232 13.0092L7.95362 11.1873L7.95327 11.187C7.95327 11.187 7.72675 11.0431 7.45834 11.0431C7.45834 11.0431 7.18978 11.0431 6.96315 11.1872L4.29216 12.8786C4.29216 12.8786 4.23013 12.9181 4.1709 12.8731C4.1709 12.8731 4.09957 12.8189 4.12303 12.7271L4.89226 9.69575C4.89226 9.69575 4.95892 9.42712 4.87305 9.16654C4.87305 9.16654 4.78717 8.90597 4.57573 8.73113L2.00236 6.58475C2.00236 6.58475 1.98302 6.56869 1.992 6.53969C1.992 6.53969 1.99844 6.51889 2.01343 6.51792L5.37419 6.30146C5.37419 6.30146 5.64737 6.28557 5.86964 6.12116C5.86964 6.12116 6.08949 5.95853 6.18594 5.70315L7.43756 2.55133L7.44228 2.53892C7.44228 2.53892 7.44412 2.53385 7.44854 2.53076C7.44854 2.53076 7.45295 2.52767 7.45834 2.52767C7.45834 2.52767 7.46373 2.52767 7.46814 2.53076C7.46814 2.53076 7.47256 2.53385 7.4744 2.53892L7.47912 2.55133L8.73075 5.70314C8.73075 5.70314 8.82719 5.95853 9.04704 6.12116C9.04704 6.12116 9.26931 6.28557 9.54531 6.30163L12.9035 6.51793C12.9035 6.51793 12.9182 6.51889 12.9247 6.53969C12.9247 6.53969 12.9337 6.56869 12.9151 6.58414L10.3395 8.73238C10.3395 8.73238 10.1295 8.90596 10.0436 9.16654C10.0436 9.16654 9.95777 9.42712 10.0238 9.6934L10.8562 12.9658C10.8562 12.9658 10.8632 12.9935 10.8433 13.0086C10.8433 13.0086 10.8337 13.0158 10.8232 13.0092Z"
                    fill="#1C1C1C"
                  />
                </g>
              </svg>
              <p className="text-xs ml-2"><span className="text-slate-400">Dashboard  /</span>  Default</p>
            </div>
            <div className="header-right flex gap-2 align-middle">
            <div className="">
                <form>   
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">     
                            <svg width="13" height="12" viewBox="0 0 13 12" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Search-s">
                            <path id="Vector" d="M11.2968 10.6348C11.2288 10.7018 11.1371 10.7394 11.0416 10.7396C10.9448 10.7392 10.8518 10.7017 10.7819 10.6348L8.81311 8.66146C7.98395 9.35791 6.91793 9.70736 5.83738 9.63694C4.75683 9.56652 3.74519 9.08166 3.01343 8.28349C2.28168 7.48532 1.88632 6.43546 1.9098 5.35287C1.93329 4.27028 2.37382 3.23856 3.1395 2.47287C3.90518 1.70719 4.93691 1.26667 6.0195 1.24318C7.10208 1.21969 8.15194 1.61505 8.95011 2.34681C9.74829 3.07856 10.2331 4.09021 10.3036 5.17076C10.374 6.2513 10.0245 7.31732 9.32808 8.14648L11.2968 10.1152C11.3313 10.1492 11.3586 10.1896 11.3773 10.2342C11.396 10.2788 11.4056 10.3267 11.4056 10.375C11.4056 10.4233 11.396 10.4712 11.3773 10.5158C11.3586 10.5604 11.3313 10.6008 11.2968 10.6348ZM6.11975 8.91667C6.80477 8.91667 7.47441 8.71353 8.04399 8.33295C8.61357 7.95238 9.0575 7.41144 9.31965 6.77856C9.58179 6.14569 9.65038 5.44928 9.51674 4.77742C9.3831 4.10556 9.05323 3.48842 8.56884 3.00403C8.08446 2.51965 7.46731 2.18978 6.79545 2.05613C6.12359 1.92249 5.42719 1.99108 4.79431 2.25323C4.16143 2.51538 3.6205 2.95931 3.23992 3.52888C2.85934 4.09846 2.65621 4.7681 2.65621 5.45312C2.65741 6.37134 3.02271 7.25161 3.67199 7.90089C4.32127 8.55017 5.20153 8.91546 6.11975 8.91667Z" fill="#1C1C1C" fill-opacity="0.2"/>
                            </g>
                            </svg>
                        </div>
                        <input type="search" className="block  pl-6 py-1 w-full text-xs text-gray-300 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    </div>
                </form>
            </div>
                
            <div className="grid grid-cols-4 gap-2 items-center">
                <div className="w-4 cur">
                    <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Sun-d">
                        <path id="Vector" d="M10.8763 7.79169C10.8763 9.67936 9.34605 11.2097 7.45837 11.2097C5.5707 11.2097 4.04041 9.67936 4.04041 7.79169C4.04041 5.90402 5.5707 4.37372 7.45837 4.37372C9.34605 4.37372 10.8763 5.90402 10.8763 7.79169Z" fill="#1C1C1C" fill-opacity="0.1"/>
                        <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M7.45829 3.91797C7.45829 3.91797 8.24609 3.91797 8.96625 4.22257C8.96625 4.22257 9.6615 4.51663 10.1974 5.05255C10.1974 5.05255 10.7333 5.58846 11.0274 6.28371C11.0274 6.28371 11.332 7.00387 11.332 7.79167C11.332 7.79167 11.332 8.57947 11.0274 9.29962C11.0274 9.29962 10.7333 9.99487 10.1974 10.5308C10.1974 10.5308 9.6615 11.0667 8.96625 11.3608C8.96625 11.3608 8.24609 11.6654 7.45829 11.6654C7.45829 11.6654 6.67049 11.6654 5.95034 11.3608C5.95034 11.3608 5.25509 11.0667 4.71917 10.5308C4.71917 10.5308 4.18326 9.99487 3.8892 9.29962C3.8892 9.29962 3.58459 8.57947 3.58459 7.79167C3.58459 7.79167 3.58459 7.00387 3.8892 6.28371C3.8892 6.28371 4.18326 5.58846 4.71917 5.05255C4.71917 5.05255 5.25509 4.51663 5.95034 4.22257C5.95034 4.22257 6.67049 3.91797 7.45829 3.91797ZM7.45829 4.82943C7.45829 4.82943 6.23129 4.82943 5.36367 5.69705C5.36367 5.69705 4.49605 6.56467 4.49605 7.79167C4.49605 7.79167 4.49605 9.01867 5.36367 9.88629C5.36367 9.88629 6.23129 10.7539 7.45829 10.7539C7.45829 10.7539 8.68529 10.7539 9.55291 9.88629C9.55291 9.88629 10.4205 9.01867 10.4205 7.79167C10.4205 7.79167 10.4205 6.56467 9.55291 5.69705C9.55291 5.69705 8.68529 4.82943 7.45829 4.82943Z" fill="#1C1C1C"/>
                        <path id="Vector_3" d="M7.91402 2.5508V1.41148C7.91402 1.15979 7.70998 0.95575 7.45829 0.95575C7.2066 0.95575 7.00256 1.15979 7.00256 1.41148V2.5508C7.00256 2.80249 7.2066 3.00653 7.45829 3.00653C7.70998 3.00653 7.91402 2.80249 7.91402 2.5508Z" fill="#1C1C1C"/>
                        <path id="Vector_4" d="M3.26882 2.9577C3.18336 2.87223 3.06744 2.82422 2.94657 2.82422C2.82571 2.82422 2.70979 2.87223 2.62432 2.9577C2.53886 3.04316 2.49084 3.15908 2.49084 3.27995C2.49084 3.40081 2.53886 3.51673 2.62432 3.6022L3.42755 4.40542C3.51301 4.49089 3.62893 4.5389 3.7498 4.5389C3.87066 4.5389 3.98658 4.49089 4.07205 4.40542C4.15751 4.31995 4.20553 4.20404 4.20553 4.08317C4.20553 3.9623 4.15751 3.84639 4.07205 3.76092L3.26882 2.9577Z" fill="#1C1C1C"/>
                        <path id="Vector_5" d="M2.21749 7.33594H1.07817C0.826473 7.33594 0.622437 7.53997 0.622437 7.79167C0.622437 8.04336 0.826473 8.2474 1.07817 8.2474H2.21749C2.46918 8.2474 2.67322 8.04336 2.67322 7.79167C2.67322 7.53997 2.46918 7.33594 2.21749 7.33594Z" fill="#1C1C1C"/>
                        <path id="Vector_6" d="M2.62432 11.9811C2.53886 12.0666 2.49084 12.1825 2.49084 12.3034C2.49084 12.3112 2.49105 12.3191 2.49146 12.327C2.49729 12.4395 2.54462 12.5459 2.62432 12.6256C2.70979 12.7111 2.82571 12.7591 2.94657 12.7591C3.06744 12.7591 3.18336 12.7111 3.26882 12.6256L4.07205 11.8224C4.15751 11.7369 4.20553 11.621 4.20553 11.5002C4.20553 11.3793 4.15751 11.2634 4.07205 11.1779C3.98658 11.0924 3.87066 11.0444 3.7498 11.0444C3.74193 11.0444 3.73407 11.0446 3.72622 11.045C3.61365 11.0509 3.50725 11.0982 3.42755 11.1779L2.62432 11.9811Z" fill="#1C1C1C"/>
                        <path id="Vector_7" d="M7.00256 13.0326V14.1719C7.00256 14.4236 7.2066 14.6276 7.45829 14.6276C7.70998 14.6276 7.91402 14.4236 7.91402 14.1719V13.0326C7.91402 12.7809 7.70998 12.5768 7.45829 12.5768C7.2066 12.5768 7.00256 12.7809 7.00256 13.0326Z" fill="#1C1C1C"/>
                        <path id="Vector_8" d="M10.8447 11.8225L11.6479 12.6256C11.7333 12.7111 11.8493 12.7591 11.9701 12.7591C12.091 12.7591 12.2069 12.7111 12.2924 12.6256C12.3778 12.5402 12.4259 12.4243 12.4259 12.3034C12.4259 12.1825 12.3778 12.0666 12.2924 11.9811L11.4892 11.178C11.4037 11.0924 11.2878 11.0444 11.1669 11.0444C11.046 11.0444 10.9301 11.0924 10.8447 11.1779C10.7592 11.2634 10.7112 11.3793 10.7112 11.5002C10.7112 11.621 10.7592 11.7369 10.8447 11.8225Z" fill="#1C1C1C"/>
                        <path id="Vector_9" d="M12.6993 8.2474H13.8386C14.0903 8.2474 14.2943 8.04336 14.2943 7.79167C14.2943 7.53997 14.0903 7.33594 13.8386 7.33594H12.6993C12.4476 7.33594 12.2435 7.53997 12.2435 7.79167C12.2435 8.04336 12.4476 8.2474 12.6993 8.2474Z" fill="#1C1C1C"/>
                        <path id="Vector_10" d="M12.2924 3.6022C12.3778 3.51673 12.4259 3.40081 12.4259 3.27995C12.4259 3.15908 12.3778 3.04316 12.2924 2.9577C12.2069 2.87223 12.091 2.82422 11.9701 2.82422C11.8493 2.82422 11.7333 2.87223 11.6479 2.9577L10.8447 3.76087C10.7592 3.84639 10.7112 3.9623 10.7112 4.08317C10.7112 4.20404 10.7592 4.31995 10.8447 4.40542C10.9301 4.49089 11.046 4.5389 11.1669 4.5389C11.2878 4.5389 11.4037 4.49089 11.4892 4.40542L12.2924 3.6022Z" fill="#1C1C1C"/>
                        </g>
                    </svg>
                </div>
                <div className="w-4">
                    <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="ClockCounterClockwise-d">
                        <path id="Vector" d="M12.7214 7.79165C12.7214 10.5602 10.477 12.8047 7.70833 12.8047C4.93969 12.8047 2.69531 10.5602 2.69531 7.79165C2.69531 5.02306 4.93969 2.77863 7.70833 2.77863C10.477 2.77863 12.7214 5.02306 12.7214 7.79165Z" fill="#1C1C1C" fill-opacity="0.1"/>
                        <path id="Vector_2" d="M7.25269 5.05729V7.79167C7.25269 8.04336 7.45672 8.2474 7.70841 8.2474C7.96011 8.2474 8.16414 8.04336 8.16414 7.79167V5.05729C8.16414 4.8056 7.96011 4.60156 7.70841 4.60156C7.45672 4.60156 7.25269 4.8056 7.25269 5.05729Z" fill="#1C1C1C"/>
                        <path id="Vector_3" d="M7.93621 7.39696L10.3059 8.76411C10.4392 8.84098 10.5247 8.97988 10.5332 9.13346C10.5337 9.14192 10.5339 9.15038 10.5339 9.15885C10.5339 9.2388 10.5129 9.31734 10.473 9.38659C10.3961 9.51983 10.2572 9.6053 10.1036 9.61388C10.0951 9.61435 10.0867 9.61458 10.0782 9.61458C9.99826 9.61458 9.91972 9.59355 9.85047 9.5536L7.48074 8.18645C7.37826 8.12732 7.30281 8.03074 7.27028 7.91706L7.26825 7.90976C7.25792 7.87125 7.25269 7.83154 7.25269 7.79167C7.25269 7.71883 7.27014 7.64705 7.3036 7.58235C7.30681 7.57613 7.31017 7.56999 7.31367 7.56393C7.37276 7.46151 7.46934 7.38606 7.58302 7.35353L7.59032 7.3515C7.62884 7.34117 7.66854 7.33594 7.70841 7.33594C7.78125 7.33594 7.85303 7.3534 7.91773 7.38685C7.92395 7.39006 7.93009 7.39342 7.93621 7.39696Z" fill="#1C1C1C"/>
                        <path id="Vector_4" d="M2.68392 5.72378V3.90086C2.68392 3.64917 2.47988 3.44513 2.22819 3.44513C1.9765 3.44513 1.77246 3.64917 1.77246 3.90086V6.1795C1.77246 6.4312 1.9765 6.63523 2.22819 6.63523H4.50684C4.75853 6.63523 4.96257 6.4312 4.96257 6.1795C4.96257 5.92781 4.75853 5.72378 4.50684 5.72378H2.68392Z" fill="#1C1C1C"/>
                        <path id="Vector_5" d="M3.84327 3.92561L1.90642 5.85676C1.82066 5.94226 1.77246 6.05838 1.77246 6.17948C1.77246 6.18712 1.77265 6.19476 1.77304 6.20239C1.7787 6.31496 1.82588 6.42144 1.90547 6.50126C1.99097 6.58701 2.10709 6.63521 2.22819 6.63521C2.23583 6.63521 2.24347 6.63502 2.2511 6.63463C2.36367 6.62897 2.47015 6.58179 2.54996 6.5022L2.55022 6.50195L4.48681 4.57105C5.46473 3.59234 6.82078 3.32217 6.82078 3.32217C8.17682 3.05201 9.45437 3.58088 9.45437 3.58088C10.7319 4.10975 11.5002 5.25934 11.5002 5.25934C12.2685 6.40893 12.2685 7.79162 12.2685 7.79162C12.2685 9.17431 11.5002 10.3239 11.5002 10.3239C10.7319 11.4735 9.45437 12.0024 9.45437 12.0024C8.17682 12.5312 6.82077 12.2611 6.82077 12.2611C5.46473 11.9909 4.48742 11.0128 4.48742 11.0128C4.40194 10.9273 4.28597 10.8792 4.16504 10.8792C4.15724 10.8792 4.14944 10.8794 4.14164 10.8798C4.02908 10.8856 3.92265 10.9329 3.84292 11.0125C3.75742 11.098 3.70936 11.2139 3.70931 11.3347L3.70931 11.3349C3.70931 11.3422 3.70948 11.3494 3.70983 11.3566C3.71522 11.4698 3.76258 11.5769 3.84266 11.657L3.84279 11.6572C5.01552 12.8308 6.64268 13.155 6.64268 13.155C8.26994 13.4792 9.803 12.8445 9.803 12.8445C11.3361 12.2099 12.258 10.8304 12.258 10.8304C13.18 9.45085 13.18 7.79162 13.18 7.79162C13.18 6.13239 12.258 4.75288 12.258 4.75288C11.3361 3.37338 9.803 2.73873 9.803 2.73873C8.26993 2.10408 6.64268 2.42828 6.64268 2.42828C5.01543 2.75248 3.84327 3.92561 3.84327 3.92561Z" fill="#1C1C1C"/>
                        </g>
                    </svg>
                </div>
                <div className="w-4">                    
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Bell-d">
                    <path id="Vector" d="M3.86819 6.42449C3.86741 5.88423 3.97355 5.34912 4.1805 4.85005C4.38745 4.35096 4.69108 3.89776 5.07382 3.51652C5.45668 3.13528 5.91118 2.83354 6.41108 2.62868C6.91109 2.42385 7.4466 2.31993 7.98689 2.32293C10.2427 2.34004 12.0485 4.21422 12.0485 6.47576V6.88022C12.0485 8.91963 12.4758 10.1045 12.8517 10.7539C12.8916 10.8231 12.9128 10.9015 12.9128 10.9814C12.9129 11.0613 12.892 11.1397 12.8522 11.209C12.8123 11.2782 12.755 11.3358 12.686 11.3759C12.6169 11.416 12.5385 11.4372 12.4587 11.4375H3.45808C3.37819 11.4372 3.29975 11.416 3.23077 11.3759C3.16168 11.3358 3.10438 11.2782 3.06454 11.209C3.02471 11.1397 3.00379 11.0613 3.00391 10.9814C3.00402 10.9015 3.02505 10.8231 3.06499 10.7539C3.44094 10.1045 3.86819 8.91963 3.86819 6.88022V6.42449Z" fill="#1C1C1C" fill-opacity="0.1"/>
                    <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M3.4125 6.8802V6.42447C3.4125 6.42447 3.41122 5.51562 3.75955 4.67547C3.75955 4.67547 4.10788 3.83533 4.75232 3.19356C4.75232 3.19356 5.39677 2.55179 6.23835 2.20695C6.23835 2.20695 7.07994 1.86212 7.98942 1.86718C7.98942 1.86718 8.91419 1.87419 9.7563 2.24363C9.7563 2.24363 10.5665 2.59907 11.1902 3.23975C11.1902 3.23975 11.8115 3.87792 12.1522 4.70082C12.1522 4.70082 12.5043 5.55113 12.5043 6.47574V6.8802C12.5043 6.8802 12.5043 9.24411 13.2462 10.5256C13.2462 10.5256 13.3684 10.7372 13.3686 10.981C13.3686 10.981 13.3688 11.2248 13.2473 11.4361C13.2473 11.4361 13.1257 11.6474 12.9149 11.7699C12.9149 11.7699 12.7041 11.8924 12.4603 11.8932L3.45807 11.8932C3.45807 11.8932 3.21267 11.8924 3.00186 11.7699C3.00186 11.7699 2.79105 11.6474 2.66953 11.4361C2.66953 11.4361 2.548 11.2248 2.54822 10.981C2.54822 10.981 2.54843 10.7372 2.67033 10.526C2.67033 10.526 3.4125 9.2441 3.4125 6.8802ZM4.32396 6.8802C4.32396 6.8802 4.32396 9.48891 3.45968 10.9818L12.4571 10.9818C12.4571 10.9818 11.5928 9.48851 11.5928 6.8802V6.47574C11.5928 6.47574 11.5928 4.95995 10.5371 3.87554C10.5371 3.87554 9.48028 2.78996 7.98434 2.77863C7.98434 2.77863 7.25699 2.77458 6.58393 3.05036C6.58393 3.05036 5.91087 3.32614 5.39548 3.83939C5.39548 3.83939 4.88009 4.35265 4.60151 5.02456C4.60151 5.02456 4.32293 5.69646 4.32396 6.42447V6.8802Z" fill="#1C1C1C"/>
                    <path id="Vector_3" d="M10.237 11.8932V11.4375C10.237 11.1858 10.0329 10.9818 9.78125 10.9818C9.52956 10.9818 9.32552 11.1858 9.32552 11.4375V11.8932C9.32552 12.4595 8.92508 12.86 8.92508 12.86C8.52464 13.2604 7.95833 13.2604 7.95833 13.2604C7.39203 13.2604 6.99159 12.86 6.99159 12.86C6.59115 12.4595 6.59115 11.8932 6.59115 11.8932V11.4375C6.59115 11.1858 6.38711 10.9818 6.13542 10.9818C5.88372 10.9818 5.67969 11.1858 5.67969 11.4375L5.67969 11.8932C5.67969 12.8371 6.34709 13.5045 6.34709 13.5045C7.01449 14.1719 7.95833 14.1719 7.95833 14.1719C8.90218 14.1719 9.56958 13.5045 9.56958 13.5045C10.237 12.8371 10.237 11.8932 10.237 11.8932Z" fill="#1C1C1C"/>
                    </g>
                    </svg>

                </div>
                <div className="w-4 cursor-pointer" onClick={()=>toggleSidebar(2)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Sidebar-d">
                        <path id="Vector" d="M3.19535 12.349C3.07447 12.349 2.95859 12.3009 2.87308 12.2155C2.78763 12.13 2.73962 12.0141 2.73962 11.8932V3.6901C2.73962 3.56922 2.78763 3.45334 2.87308 3.36783C2.95859 3.28238 3.07447 3.23438 3.19535 3.23438H5.92973V12.349H3.19535Z" fill="#1C1C1C" fill-opacity="0.1"/>
                        <path id="Vector_2" d="M5.474 3.23435V12.3489C5.474 12.6006 5.67804 12.8047 5.92973 12.8047C6.18142 12.8047 6.38546 12.6006 6.38546 12.3489V3.23435C6.38546 2.98266 6.18142 2.77863 5.92973 2.77863C5.67804 2.77863 5.474 2.98266 5.474 3.23435Z" fill="#1C1C1C"/>
                        <path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M2.28394 3.69008C2.28394 3.69008 2.28394 3.31255 2.5509 3.04559C2.5509 3.04559 2.81786 2.77863 3.19539 2.77863H13.2214C13.2214 2.77863 13.599 2.77863 13.8659 3.04559C13.8659 3.04559 14.1329 3.31254 14.1329 3.69008V11.8932C14.1329 11.8932 14.1329 12.2707 13.8659 12.5377C13.8659 12.5377 13.599 12.8047 13.2214 12.8047H3.19539C3.19539 12.8047 2.81785 12.8047 2.5509 12.5377C2.5509 12.5377 2.28394 12.2707 2.28394 11.8932V3.69008ZM3.19539 3.69008V11.8932H13.2214V3.69008H3.19539Z" fill="#1C1C1C"/>
                        <path id="Vector_4" d="M2.73966 5.51302H4.10685C4.35854 5.51302 4.56258 5.30898 4.56258 5.05729C4.56258 4.8056 4.35854 4.60156 4.10685 4.60156H2.73966C2.48797 4.60156 2.28394 4.8056 2.28394 5.05729C2.28394 5.30898 2.48797 5.51302 2.73966 5.51302Z" fill="#1C1C1C"/>
                        <path id="Vector_5" d="M2.73966 7.33596H4.10685C4.35854 7.33596 4.56258 7.13192 4.56258 6.88023C4.56258 6.62854 4.35854 6.4245 4.10685 6.4245H2.73966C2.48797 6.4245 2.28394 6.62854 2.28394 6.88023C2.28394 7.13192 2.48797 7.33596 2.73966 7.33596Z" fill="#1C1C1C"/>
                        <path id="Vector_6" d="M2.73966 9.15883H4.10685C4.35854 9.15883 4.56258 8.9548 4.56258 8.7031C4.56258 8.45141 4.35854 8.24738 4.10685 8.24738H2.73966C2.48797 8.24738 2.28394 8.45141 2.28394 8.7031C2.28394 8.9548 2.48797 9.15883 2.73966 9.15883Z" fill="#1C1C1C"/>
                        </g>
                    </svg>
                </div>
            </div>


            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <SidebarRight isOpen={isOpenRight}/>
      </div>
    </div>
  );
};

export default App;

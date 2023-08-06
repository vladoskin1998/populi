import { useEffect } from "react";
import "../../style/main/letter.scss"

export const Letter = ({ isAnimation }: { isAnimation: boolean }) => {

    useEffect(() => {
        const letterElement = document.querySelector('.letter');
   
        if (isAnimation) {
          setTimeout(() => {
            letterElement?.classList.add('hidden');
          }, 3000);
        }
        else{
          letterElement?.classList.add('hidden--withot-animation');
        }
      }, []);

    return (
        <div className='letter' style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0 }}>
                <svg style={{ width: '70px', height: '70px' }} xmlns="http://www.w3.org/2000/svg" width="100" height="86" viewBox="0 0 100 86" fill="none">
                    <mask id="mask0_594_6588" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="86">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5246 0H19.6721V19.6721H38.5246H54.918H57.377C70.0524 19.6721 80.3279 29.9476 80.3279 42.6229C80.3279 55.2983 70.0524 65.5738 57.377 65.5738H38.5246V85.2459H57.377H58.1967C81.284 85.2459 100 66.5299 100 43.4426V41.8033C100 18.716 81.284 0 58.1967 0H54.918H38.5246ZM0 32.7869H57.377C62.8094 32.7869 67.2131 37.1906 67.2131 42.6229C67.2131 48.0553 62.8094 52.459 57.377 52.459H19.6721V65.5738H0V52.459V32.7869Z" fill="url(#paint0_linear_594_6588)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5246 0H19.6721V19.6721H38.5246H54.918H57.377C70.0524 19.6721 80.3279 29.9476 80.3279 42.6229C80.3279 55.2983 70.0524 65.5738 57.377 65.5738H38.5246V85.2459H57.377H58.1967C81.284 85.2459 100 66.5299 100 43.4426V41.8033C100 18.716 81.284 0 58.1967 0H54.918H38.5246ZM0 32.7869H57.377C62.8094 32.7869 67.2131 37.1906 67.2131 42.6229C67.2131 48.0553 62.8094 52.459 57.377 52.459H19.6721V65.5738H0V52.459V32.7869Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_594_6588)">
                        <path d="M0 -13.3543L83 -13.3543L134 105.646L0 105.646L0 -13.3543Z" fill="url(#paint1_linear_594_6588)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_594_6588" x1="-31.6783" y1="23.3291" x2="24.8689" y2="102.063" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#12CCFC" />
                            <stop offset="0.277319" stop-color="#1BAEF3" />
                            <stop offset="0.570854" stop-color="#535FF8" />
                            <stop offset="0.741801" stop-color="#4B4CFE" />
                            <stop offset="0.895392" stop-color="#1718EB" />
                        </linearGradient>

                        <linearGradient id="paint1_linear_594_6588" x1="0" y1="-13.3543" x2="137.445" y2="101.524" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0014FF" />
                            <stop offset="1" stop-color="#FF2CDF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='letter--rect' />
            <div style={{ position: 'absolute', left: 0, top: 0 }}>
                <svg style={{ width: '70px', height: '70px' }} xmlns="http://www.w3.org/2000/svg" width="100" height="86" viewBox="0 0 100 86" fill="none">
                    <mask id="path-1-inside-1_594_6596" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5246 0H19.6721V19.6721H38.5246H54.918H57.377C70.0524 19.6721 80.3279 29.9476 80.3279 42.6229C80.3279 55.2983 70.0524 65.5738 57.377 65.5738H38.5246V85.2459H57.377H58.1967C81.284 85.2459 100 66.5299 100 43.4426V41.8033C100 18.716 81.284 0 58.1967 0H54.918H38.5246ZM0 32.7869H57.377C62.8094 32.7869 67.2131 37.1906 67.2131 42.6229C67.2131 48.0553 62.8094 52.459 57.377 52.459H19.6721V65.5738H0V52.459V32.7869Z" />
                    </mask>
                    <path d="M19.6721 0V-1H18.6721V0H19.6721ZM19.6721 19.6721H18.6721V20.6721H19.6721V19.6721ZM38.5246 65.5738V64.5738H37.5246V65.5738H38.5246ZM38.5246 85.2459H37.5246V86.2459H38.5246V85.2459ZM0 32.7869V31.7869H-1V32.7869H0ZM19.6721 52.459V51.459H18.6721V52.459H19.6721ZM19.6721 65.5738V66.5738H20.6721V65.5738H19.6721ZM0 65.5738H-1V66.5738H0V65.5738ZM19.6721 1H38.5246V-1H19.6721V1ZM20.6721 19.6721V0H18.6721V19.6721H20.6721ZM38.5246 18.6721H19.6721V20.6721H38.5246V18.6721ZM54.918 18.6721H38.5246V20.6721H54.918V18.6721ZM57.377 18.6721H54.918V20.6721H57.377V18.6721ZM81.3279 42.6229C81.3279 29.3953 70.6047 18.6721 57.377 18.6721V20.6721C69.5001 20.6721 79.3279 30.4998 79.3279 42.6229H81.3279ZM57.377 66.5738C70.6047 66.5738 81.3279 55.8506 81.3279 42.6229H79.3279C79.3279 54.746 69.5001 64.5738 57.377 64.5738V66.5738ZM38.5246 66.5738H57.377V64.5738H38.5246V66.5738ZM39.5246 85.2459V65.5738H37.5246V85.2459H39.5246ZM57.377 84.2459H38.5246V86.2459H57.377V84.2459ZM58.1967 84.2459H57.377V86.2459H58.1967V84.2459ZM99 43.4426C99 65.9776 80.7317 84.2459 58.1967 84.2459V86.2459C81.8363 86.2459 101 67.0822 101 43.4426H99ZM99 41.8033V43.4426H101V41.8033H99ZM58.1967 1C80.7317 1 99 19.2682 99 41.8033H101C101 18.1637 81.8363 -1 58.1967 -1V1ZM54.918 1H58.1967V-1H54.918V1ZM38.5246 1H54.918V-1H38.5246V1ZM57.377 31.7869H0V33.7869H57.377V31.7869ZM68.2131 42.6229C68.2131 36.6384 63.3616 31.7869 57.377 31.7869V33.7869C62.2571 33.7869 66.2131 37.7429 66.2131 42.6229H68.2131ZM57.377 53.459C63.3616 53.459 68.2131 48.6075 68.2131 42.6229H66.2131C66.2131 47.503 62.2571 51.459 57.377 51.459V53.459ZM19.6721 53.459H57.377V51.459H19.6721V53.459ZM20.6721 65.5738V52.459H18.6721V65.5738H20.6721ZM0 66.5738H19.6721V64.5738H0V66.5738ZM-1 52.459V65.5738H1V52.459H-1ZM-1 32.7869V52.459H1V32.7869H-1Z" fill="url(#paint0_linear_594_6596)" mask="url(#path-1-inside-1_594_6596)" />
                    <defs>
                        <linearGradient id="paint0_linear_594_6596" x1="0" y1="0" x2="99.0959" y2="86.2842" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0014FF" />
                            <stop offset="1" stop-color="#FF2CDF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

        </div>
    )
}

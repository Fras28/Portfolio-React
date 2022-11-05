import React from "react";
import "./credentials.css";
// import Linkdin from "../assets/LinkedIn_Logo.svg.png"
// import Henry from "../assets/Henry.png"
// import EFSET from "../assets/EFSET.png"
// import separador from "../assets/separador.png"

export const Certificates = () => {
  return (
    <div className="certCont">
      <div className="divSep">
        <svg
          width="671"
          height="50"
          viewBox="0 0 671 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M670.24 23.6267C670.172 23.4704 670.047 23.3559 669.959 23.21C669.745 22.8559 669.511 22.5277 669.204 22.2569C669.151 22.21 669.131 22.1423 669.079 22.0954L650.412 7.10609C649.672 6.51234 648.761 6.18942 647.813 6.18942H610.48C608.188 6.18942 606.334 8.04356 606.334 10.3353C606.334 12.627 608.188 14.4812 610.48 14.4812H646.354L654.682 21.1843H513.082C511.103 9.72586 501.155 0.970917 489.14 0.970917C477.129 0.970917 467.181 9.72612 465.197 21.1843H448.9L378.009 11.7936C376.358 11.58 374.712 12.3769 373.879 13.83L369.629 21.1841H352.202L338.593 7.56943C337.035 6.01209 334.28 6.01209 332.728 7.56943L319.114 21.1841H301.687L297.442 13.83C296.609 12.3769 294.937 11.5748 293.312 11.7936L222.421 21.1843H206.124C204.139 9.72586 194.192 0.970917 182.181 0.970917C170.166 0.970917 160.217 9.72612 158.239 21.1843H16.6385L24.9719 14.4916H60.8465C63.1383 14.4916 64.9924 12.6374 64.9924 10.3457C64.9924 8.05398 63.1383 6.19984 60.8465 6.19984H23.5132C22.5653 6.19984 21.6487 6.52276 20.9143 7.11651L2.24759 22.1058C2.19551 22.1475 2.17467 22.2204 2.12259 22.2673C1.8153 22.5381 1.58093 22.8663 1.36738 23.2204C1.27884 23.3663 1.15904 23.4808 1.08612 23.6371C0.846534 24.1475 0.695496 24.7152 0.695496 25.3298C0.695496 25.9443 0.841339 26.512 1.08091 27.0328C1.14862 27.1891 1.27362 27.3036 1.36216 27.4495C1.57571 27.8036 1.81009 28.1318 2.11738 28.4026C2.16946 28.4495 2.1903 28.5172 2.24238 28.5641L20.909 43.5534C21.6486 44.1419 22.5653 44.4649 23.5132 44.4649H60.8465C63.1382 44.4649 64.9924 42.6107 64.9924 40.319C64.9924 38.0272 63.1382 36.1731 60.8465 36.1731L24.9718 36.1679L16.6385 29.4752H158.239C160.218 40.9336 170.166 49.6886 182.181 49.6886C194.192 49.6886 204.14 40.9334 206.124 29.4752H222.421L293.312 38.8659C293.489 38.8919 293.676 38.9024 293.854 38.9024C295.322 38.9024 296.697 38.1263 297.442 36.8294L301.692 29.4753H319.119L332.728 43.0899C333.504 43.866 334.561 44.3035 335.66 44.3035C336.764 44.3035 337.817 43.866 338.593 43.0899L352.207 29.4753H369.634L373.879 36.8294C374.623 38.1263 376.004 38.9024 377.467 38.9024C377.644 38.9024 377.832 38.8919 378.009 38.8659L448.9 29.4752H465.197C467.181 40.9336 477.129 49.6886 489.14 49.6886C501.155 49.6886 511.104 40.9334 513.082 29.4752H654.682L646.349 36.1679H610.474C608.183 36.1679 606.328 38.022 606.328 40.3138C606.328 42.6055 608.183 44.4596 610.474 44.4596H647.808C648.756 44.4596 649.672 44.1367 650.406 43.543L669.073 28.5536C669.125 28.512 669.146 28.4391 669.198 28.3922C669.505 28.1214 669.74 27.7932 669.953 27.4391C670.042 27.2932 670.162 27.1786 670.235 27.0224C670.474 26.512 670.625 25.9443 670.625 25.3297C670.625 24.7152 670.474 24.1474 670.24 23.6266L670.24 23.6267ZM182.187 41.392C173.333 41.392 166.119 34.1838 166.119 25.3294C166.119 16.475 173.327 9.26669 182.187 9.26669C191.041 9.26669 198.249 16.475 198.249 25.3294C198.249 34.1838 191.041 41.392 182.187 41.392ZM291.656 30.2775L254.281 25.3296L291.656 20.3817L294.515 25.3296L291.656 30.2775ZM335.667 34.2931L326.708 25.3295L335.667 16.3659L344.625 25.3295L335.667 34.2931ZM379.677 30.2775L376.818 25.3296L379.677 20.3817L417.052 25.3296L379.677 30.2775ZM489.147 41.392C480.293 41.392 473.079 34.1838 473.079 25.3294C473.084 16.4752 480.292 9.26669 489.147 9.26669C498.006 9.26669 505.215 16.475 505.215 25.3294C505.215 34.1838 498.006 41.392 489.147 41.392Z"
            fill="#727272"
          />
        </svg>
      </div>
      <p className="titleCertf" id="credentials">
        Credentials
      </p>
      <div className="contCertf">
        <div className="cardCert">
          <div className="card-details">
            <p className="text-title">Full Stack Developer</p>
            <svg
              className="sepC"
              width="150"
              height="65"
              viewBox="0 0 681 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M678.277 28.7443L636.698 5.479C635.422 4.76546 633.849 4.77588 632.573 5.52588C631.307 6.26547 630.521 7.63 630.521 9.104V21.3176L366.148 13.2083C360.247 5.23949 350.856 0 340.205 0C329.554 0 320.164 5.23963 314.262 13.2083L49.8756 21.3124V9.0988C49.8756 7.63 49.0944 6.26547 47.8235 5.52067C46.5527 4.77067 44.9797 4.76026 43.6984 5.4738L2.12507 28.7445C0.812578 29.4736 0 30.859 0 32.3642C0 33.8694 0.812511 35.2549 2.12507 35.9839L43.7037 59.2493C44.334 59.6034 45.0318 59.7753 45.7297 59.7753C46.4537 59.7753 47.1776 59.5826 47.8287 59.2024C49.0943 58.4628 49.8808 57.0983 49.8808 55.6243V43.4106L314.254 51.52C320.155 59.4888 329.541 64.7283 340.197 64.7283C350.848 64.7283 360.238 59.4886 366.139 51.52L630.526 43.4159V55.6294C630.526 57.0982 631.307 58.4628 632.578 59.2076C633.224 59.5878 633.953 59.7805 634.677 59.7805C635.375 59.7805 636.073 59.6086 636.703 59.2545L678.277 35.9838C679.589 35.2546 680.402 33.8693 680.402 32.3641C680.402 30.8589 679.589 29.4734 678.277 28.7443H678.277ZM41.5835 48.5563L12.6515 32.363L41.5888 16.1697L41.5835 48.5563ZM95.5475 36.5094H308.267C308.564 38.7854 309.07 40.973 309.814 43.0771L95.5475 36.5094ZM308.267 28.2177H95.5475L309.814 21.6499C309.069 23.7489 308.564 25.9417 308.267 28.2177H308.267ZM340.21 56.431C326.939 56.431 316.142 45.6341 316.142 32.363C316.142 19.0919 326.939 8.295 340.21 8.295C353.481 8.295 364.278 19.0919 364.278 32.363C364.278 45.6341 353.481 56.431 340.21 56.431ZM584.863 28.2177H372.143C371.847 25.9417 371.341 23.7541 370.597 21.6499L584.863 28.2177ZM370.597 43.0817C371.342 40.9775 371.847 38.7899 372.144 36.5139H584.864L370.597 43.0817ZM638.824 48.5557V16.1703L667.755 32.3636L638.824 48.5557Z"
                fill="#727272"
              />
            </svg>
            <p className="sponsor">Soy Henry</p>
          </div>
          <a
            href="https://certificates.soyhenry.com/cert?id=98a42830-8ee6-492d-9b6a-55d092249020"
            target="_blank"
            rel="noreferrer"
          >
            <button className="card-button">More info</button>
          </a>
        </div>
        <div className="cardCert">
          <div className="card-details">
            <p className="text-title">Front End </p>
            <svg
              className="sepC"
              width="150"
              height="65"
              viewBox="0 0 681 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M678.277 28.7443L636.698 5.479C635.422 4.76546 633.849 4.77588 632.573 5.52588C631.307 6.26547 630.521 7.63 630.521 9.104V21.3176L366.148 13.2083C360.247 5.23949 350.856 0 340.205 0C329.554 0 320.164 5.23963 314.262 13.2083L49.8756 21.3124V9.0988C49.8756 7.63 49.0944 6.26547 47.8235 5.52067C46.5527 4.77067 44.9797 4.76026 43.6984 5.4738L2.12507 28.7445C0.812578 29.4736 0 30.859 0 32.3642C0 33.8694 0.812511 35.2549 2.12507 35.9839L43.7037 59.2493C44.334 59.6034 45.0318 59.7753 45.7297 59.7753C46.4537 59.7753 47.1776 59.5826 47.8287 59.2024C49.0943 58.4628 49.8808 57.0983 49.8808 55.6243V43.4106L314.254 51.52C320.155 59.4888 329.541 64.7283 340.197 64.7283C350.848 64.7283 360.238 59.4886 366.139 51.52L630.526 43.4159V55.6294C630.526 57.0982 631.307 58.4628 632.578 59.2076C633.224 59.5878 633.953 59.7805 634.677 59.7805C635.375 59.7805 636.073 59.6086 636.703 59.2545L678.277 35.9838C679.589 35.2546 680.402 33.8693 680.402 32.3641C680.402 30.8589 679.589 29.4734 678.277 28.7443H678.277ZM41.5835 48.5563L12.6515 32.363L41.5888 16.1697L41.5835 48.5563ZM95.5475 36.5094H308.267C308.564 38.7854 309.07 40.973 309.814 43.0771L95.5475 36.5094ZM308.267 28.2177H95.5475L309.814 21.6499C309.069 23.7489 308.564 25.9417 308.267 28.2177H308.267ZM340.21 56.431C326.939 56.431 316.142 45.6341 316.142 32.363C316.142 19.0919 326.939 8.295 340.21 8.295C353.481 8.295 364.278 19.0919 364.278 32.363C364.278 45.6341 353.481 56.431 340.21 56.431ZM584.863 28.2177H372.143C371.847 25.9417 371.341 23.7541 370.597 21.6499L584.863 28.2177ZM370.597 43.0817C371.342 40.9775 371.847 38.7899 372.144 36.5139H584.864L370.597 43.0817ZM638.824 48.5557V16.1703L667.755 32.3636L638.824 48.5557Z"
                fill="#727272"
              />
            </svg>
            <p className="sponsor">Linkedin</p>
          </div>
          <a
            href="https://www.linkedin.com/skill-assessments/Desarrollo%20front%20end/report/?channel=FEED_SHOWCASE&practiceMode=&vanityNameContext=francoselvarolo"
            target="_blank"
            rel="noreferrer"
          >
            <button className="card-button">More info</button>
          </a>
        </div>
        <div className="cardCert">
          <div className="card-details">
            <p className="text-title">React.js Evaluation</p>
            <svg
              className="sepC"
              width="150"
              height="65"
              viewBox="0 0 681 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M678.277 28.7443L636.698 5.479C635.422 4.76546 633.849 4.77588 632.573 5.52588C631.307 6.26547 630.521 7.63 630.521 9.104V21.3176L366.148 13.2083C360.247 5.23949 350.856 0 340.205 0C329.554 0 320.164 5.23963 314.262 13.2083L49.8756 21.3124V9.0988C49.8756 7.63 49.0944 6.26547 47.8235 5.52067C46.5527 4.77067 44.9797 4.76026 43.6984 5.4738L2.12507 28.7445C0.812578 29.4736 0 30.859 0 32.3642C0 33.8694 0.812511 35.2549 2.12507 35.9839L43.7037 59.2493C44.334 59.6034 45.0318 59.7753 45.7297 59.7753C46.4537 59.7753 47.1776 59.5826 47.8287 59.2024C49.0943 58.4628 49.8808 57.0983 49.8808 55.6243V43.4106L314.254 51.52C320.155 59.4888 329.541 64.7283 340.197 64.7283C350.848 64.7283 360.238 59.4886 366.139 51.52L630.526 43.4159V55.6294C630.526 57.0982 631.307 58.4628 632.578 59.2076C633.224 59.5878 633.953 59.7805 634.677 59.7805C635.375 59.7805 636.073 59.6086 636.703 59.2545L678.277 35.9838C679.589 35.2546 680.402 33.8693 680.402 32.3641C680.402 30.8589 679.589 29.4734 678.277 28.7443H678.277ZM41.5835 48.5563L12.6515 32.363L41.5888 16.1697L41.5835 48.5563ZM95.5475 36.5094H308.267C308.564 38.7854 309.07 40.973 309.814 43.0771L95.5475 36.5094ZM308.267 28.2177H95.5475L309.814 21.6499C309.069 23.7489 308.564 25.9417 308.267 28.2177H308.267ZM340.21 56.431C326.939 56.431 316.142 45.6341 316.142 32.363C316.142 19.0919 326.939 8.295 340.21 8.295C353.481 8.295 364.278 19.0919 364.278 32.363C364.278 45.6341 353.481 56.431 340.21 56.431ZM584.863 28.2177H372.143C371.847 25.9417 371.341 23.7541 370.597 21.6499L584.863 28.2177ZM370.597 43.0817C371.342 40.9775 371.847 38.7899 372.144 36.5139H584.864L370.597 43.0817ZM638.824 48.5557V16.1703L667.755 32.3636L638.824 48.5557Z"
                fill="#727272"
              />
            </svg>
            <p className="sponsor">Linkedin</p>
          </div>
          <a
            href="https://www.linkedin.com/skill-assessments/React.js/report/?practiceModal=&practiceMode="
            target="_blank"
            rel="noreferrer"
          >
            <button className="card-button">More info</button>
          </a>
        </div>
        <div className="cardCert">
          <div className="card-details">
            <p className="text-title">CSS Evaluation</p>
            <svg
              className="sepC"
              width="150"
              height="65"
              viewBox="0 0 681 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M678.277 28.7443L636.698 5.479C635.422 4.76546 633.849 4.77588 632.573 5.52588C631.307 6.26547 630.521 7.63 630.521 9.104V21.3176L366.148 13.2083C360.247 5.23949 350.856 0 340.205 0C329.554 0 320.164 5.23963 314.262 13.2083L49.8756 21.3124V9.0988C49.8756 7.63 49.0944 6.26547 47.8235 5.52067C46.5527 4.77067 44.9797 4.76026 43.6984 5.4738L2.12507 28.7445C0.812578 29.4736 0 30.859 0 32.3642C0 33.8694 0.812511 35.2549 2.12507 35.9839L43.7037 59.2493C44.334 59.6034 45.0318 59.7753 45.7297 59.7753C46.4537 59.7753 47.1776 59.5826 47.8287 59.2024C49.0943 58.4628 49.8808 57.0983 49.8808 55.6243V43.4106L314.254 51.52C320.155 59.4888 329.541 64.7283 340.197 64.7283C350.848 64.7283 360.238 59.4886 366.139 51.52L630.526 43.4159V55.6294C630.526 57.0982 631.307 58.4628 632.578 59.2076C633.224 59.5878 633.953 59.7805 634.677 59.7805C635.375 59.7805 636.073 59.6086 636.703 59.2545L678.277 35.9838C679.589 35.2546 680.402 33.8693 680.402 32.3641C680.402 30.8589 679.589 29.4734 678.277 28.7443H678.277ZM41.5835 48.5563L12.6515 32.363L41.5888 16.1697L41.5835 48.5563ZM95.5475 36.5094H308.267C308.564 38.7854 309.07 40.973 309.814 43.0771L95.5475 36.5094ZM308.267 28.2177H95.5475L309.814 21.6499C309.069 23.7489 308.564 25.9417 308.267 28.2177H308.267ZM340.21 56.431C326.939 56.431 316.142 45.6341 316.142 32.363C316.142 19.0919 326.939 8.295 340.21 8.295C353.481 8.295 364.278 19.0919 364.278 32.363C364.278 45.6341 353.481 56.431 340.21 56.431ZM584.863 28.2177H372.143C371.847 25.9417 371.341 23.7541 370.597 21.6499L584.863 28.2177ZM370.597 43.0817C371.342 40.9775 371.847 38.7899 372.144 36.5139H584.864L370.597 43.0817ZM638.824 48.5557V16.1703L667.755 32.3636L638.824 48.5557Z"
                fill="#727272"
              />
            </svg>
            <p className="sponsor">Linkedin</p>
          </div>
          <a
            href="https://www.linkedin.com/skill-assessments/Hojas%20de%20estilos%20en%20cascada%20(CSS)/report/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="card-button">More info</button>
          </a>
        </div>
        <div className="cardCert">
          <div className="card-details">
            <div className="noScroll"></div>
            <p className="text-title">Agile methodologies</p>
            <svg
              className="sepC"
              width="150"
              height="65"
              viewBox="0 0 681 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M678.277 28.7443L636.698 5.479C635.422 4.76546 633.849 4.77588 632.573 5.52588C631.307 6.26547 630.521 7.63 630.521 9.104V21.3176L366.148 13.2083C360.247 5.23949 350.856 0 340.205 0C329.554 0 320.164 5.23963 314.262 13.2083L49.8756 21.3124V9.0988C49.8756 7.63 49.0944 6.26547 47.8235 5.52067C46.5527 4.77067 44.9797 4.76026 43.6984 5.4738L2.12507 28.7445C0.812578 29.4736 0 30.859 0 32.3642C0 33.8694 0.812511 35.2549 2.12507 35.9839L43.7037 59.2493C44.334 59.6034 45.0318 59.7753 45.7297 59.7753C46.4537 59.7753 47.1776 59.5826 47.8287 59.2024C49.0943 58.4628 49.8808 57.0983 49.8808 55.6243V43.4106L314.254 51.52C320.155 59.4888 329.541 64.7283 340.197 64.7283C350.848 64.7283 360.238 59.4886 366.139 51.52L630.526 43.4159V55.6294C630.526 57.0982 631.307 58.4628 632.578 59.2076C633.224 59.5878 633.953 59.7805 634.677 59.7805C635.375 59.7805 636.073 59.6086 636.703 59.2545L678.277 35.9838C679.589 35.2546 680.402 33.8693 680.402 32.3641C680.402 30.8589 679.589 29.4734 678.277 28.7443H678.277ZM41.5835 48.5563L12.6515 32.363L41.5888 16.1697L41.5835 48.5563ZM95.5475 36.5094H308.267C308.564 38.7854 309.07 40.973 309.814 43.0771L95.5475 36.5094ZM308.267 28.2177H95.5475L309.814 21.6499C309.069 23.7489 308.564 25.9417 308.267 28.2177H308.267ZM340.21 56.431C326.939 56.431 316.142 45.6341 316.142 32.363C316.142 19.0919 326.939 8.295 340.21 8.295C353.481 8.295 364.278 19.0919 364.278 32.363C364.278 45.6341 353.481 56.431 340.21 56.431ZM584.863 28.2177H372.143C371.847 25.9417 371.341 23.7541 370.597 21.6499L584.863 28.2177ZM370.597 43.0817C371.342 40.9775 371.847 38.7899 372.144 36.5139H584.864L370.597 43.0817ZM638.824 48.5557V16.1703L667.755 32.3636L638.824 48.5557Z"
                fill="#727272"
              />
            </svg>
            <p className="sponsor">Linkedin</p>
          </div>
          <a
            href="https://www.linkedin.com/skill-assessments/Metodolog%C3%ADas%20%C3%A1giles/report/?practiceModal=&practiceMode="
            target="_blank"
            rel="noreferrer"
          >
            <button className="card-button">More info</button>
          </a>
        </div>
        <div className="cardCert">
          <div className="card-details">
            <p className="text-title">English</p>
            <p className="califCert">B2 Upper intermediate</p>
            <svg
              className="sepC"
              width="150"
              height="65"
              viewBox="0 0 681 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M678.277 28.7443L636.698 5.479C635.422 4.76546 633.849 4.77588 632.573 5.52588C631.307 6.26547 630.521 7.63 630.521 9.104V21.3176L366.148 13.2083C360.247 5.23949 350.856 0 340.205 0C329.554 0 320.164 5.23963 314.262 13.2083L49.8756 21.3124V9.0988C49.8756 7.63 49.0944 6.26547 47.8235 5.52067C46.5527 4.77067 44.9797 4.76026 43.6984 5.4738L2.12507 28.7445C0.812578 29.4736 0 30.859 0 32.3642C0 33.8694 0.812511 35.2549 2.12507 35.9839L43.7037 59.2493C44.334 59.6034 45.0318 59.7753 45.7297 59.7753C46.4537 59.7753 47.1776 59.5826 47.8287 59.2024C49.0943 58.4628 49.8808 57.0983 49.8808 55.6243V43.4106L314.254 51.52C320.155 59.4888 329.541 64.7283 340.197 64.7283C350.848 64.7283 360.238 59.4886 366.139 51.52L630.526 43.4159V55.6294C630.526 57.0982 631.307 58.4628 632.578 59.2076C633.224 59.5878 633.953 59.7805 634.677 59.7805C635.375 59.7805 636.073 59.6086 636.703 59.2545L678.277 35.9838C679.589 35.2546 680.402 33.8693 680.402 32.3641C680.402 30.8589 679.589 29.4734 678.277 28.7443H678.277ZM41.5835 48.5563L12.6515 32.363L41.5888 16.1697L41.5835 48.5563ZM95.5475 36.5094H308.267C308.564 38.7854 309.07 40.973 309.814 43.0771L95.5475 36.5094ZM308.267 28.2177H95.5475L309.814 21.6499C309.069 23.7489 308.564 25.9417 308.267 28.2177H308.267ZM340.21 56.431C326.939 56.431 316.142 45.6341 316.142 32.363C316.142 19.0919 326.939 8.295 340.21 8.295C353.481 8.295 364.278 19.0919 364.278 32.363C364.278 45.6341 353.481 56.431 340.21 56.431ZM584.863 28.2177H372.143C371.847 25.9417 371.341 23.7541 370.597 21.6499L584.863 28.2177ZM370.597 43.0817C371.342 40.9775 371.847 38.7899 372.144 36.5139H584.864L370.597 43.0817ZM638.824 48.5557V16.1703L667.755 32.3636L638.824 48.5557Z"
                fill="#727272"
              />
            </svg>

            <p className="sponsor">EFSET</p>
          </div>
          <a
            href="https://www.efset.org/cert/fubXwi"
            target="_blank"
            rel="noreferrer"
          >
            <button className="card-button">More info</button>
          </a>
        </div>
      </div>
      <div className="myLinkss">
        <p className="contact">
          Contact
          <br />
          <a className="links" href="https://github.com/Fras28" Target="_blank">
            <svg
              className="linkC"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.791 44.836C16.502 44.53 17 43.823 17 43V37.6C17 37.403 17.016 37.198 17.041 36.99C17.027 36.994 17.014 36.997 17 37C17 37 14 37 13.4 37C11.9 37 10.6 36.4 10 35.2C9.3 33.9 9 31.7 7.2 30.5C6.9 30.3 7.1 30 7.7 30C8.3 30.1 9.6 30.9 10.4 32C11.3 33.1 12.2 34 13.8 34C16.287 34 17.62 33.875 18.422 33.445C19.356 32.056 20.649 31 22 31V30.975C16.332 30.793 12.711 28.909 11.025 26C7.36 26.042 4.169 26.405 2.348 26.707C2.29 26.38 2.24 26.051 2.197 25.72C3.994 25.424 7.04 25.073 10.542 25.006C10.43 24.73 10.333 24.447 10.251 24.157C6.74 23.979 3.71 24.118 2.064 24.254C2.044 23.922 2.017 23.591 2.013 23.255C3.662 23.12 6.61 22.985 10.031 23.144C9.952 22.644 9.901 22.133 9.901 21.601C9.901 19.901 10.501 18.101 11.601 16.601C11.101 14.901 10.401 11.301 11.801 10.001C14.501 10.001 16.401 11.301 17.301 12.101C19 11.4 20.9 11 23 11C25.1 11 27 11.4 28.6 12.1C29.5 11.3 31.4 10 34.1 10C35.6 11.4 34.8 15 34.3 16.6C35.4 18.1 36 19.8 35.9 21.6C35.9 22.084 35.855 22.551 35.79 23.009C39.289 22.837 42.317 22.975 43.994 23.111C43.992 23.448 43.961 23.777 43.943 24.11C42.272 23.972 39.168 23.83 35.584 24.021C35.495 24.357 35.387 24.684 35.259 25.001C38.805 25.047 41.924 25.39 43.807 25.69C43.764 26.022 43.714 26.351 43.656 26.677C41.744 26.371 38.485 26.013 34.777 25.995C33.112 28.873 29.557 30.75 24 30.969V31C26.6 31 29 34.9 29 37.6V43C29 43.823 29.498 44.53 30.209 44.836C39.37 41.804 46 33.164 46 23C46 10.318 35.683 0 23 0C10.317 0 0 10.318 0 23C0 33.164 6.63 41.804 15.791 44.836Z"
                fill="#727272"
              />
            </svg>
          </a>
          <a
            className="links"
            href="https://www.linkedin.com/in/francoselvarolo/"
            Target="_blank"
          >
            <svg
              className="linkC"
              width="45"
              height="45"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 0C10.318 0 0 10.317 0 23C0 35.683 10.318 46 23 46C35.682 46 46 35.683 46 23C46 10.317 35.682 0 23 0ZM16 33H12V18H16V33ZM14 15C12.895 15 12 14.105 12 13C12 11.895 12.895 11 14 11C15.105 11 16 11.895 16 13C16 14.105 15.105 15 14 15ZM35 33H31V28V25.5C31 23.575 29.425 22 27.5 22C25.575 22 24 23.575 24 25.5V33H20V18H24V19.816C25.168 18.694 26.752 18 28.5 18C32.09 18 35 20.91 35 24.5V33Z"
                fill="#727272"
              />
            </svg>
          </a>
          <a
            className="links"
            href="https://www.instagram.com/frans_selvarolo/"
            Target="_blank"
          >
            <svg
              className="linkC"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0C5.83 0 0 5.83 0 13V31C0 38.17 5.83 44 13 44H31C38.17 44 44 38.17 44 31V13C44 5.83 38.17 0 31 0H13ZM34 8C35.1 8 36 8.9 36 10C36 11.1 35.1 12 34 12C32.9 12 32 11.1 32 10C32 8.9 32.9 8 34 8ZM22 11C28.07 11 33 15.93 33 22C33 28.07 28.07 33 22 33C15.93 33 11 28.07 11 22C11 15.93 15.93 11 22 11ZM22 13C17.04 13 13 17.04 13 22C13 26.96 17.04 31 22 31C26.96 31 31 26.96 31 22C31 17.04 26.96 13 22 13Z"
                fill="#727272"
              />
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
};

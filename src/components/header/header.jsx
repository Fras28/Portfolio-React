import React from "react";
import "./header.css";
import fotoPerfil from "../assets/perfil s-fondo.png";
import { useState } from "react";

const Header = () => {
  const [img, setImg] = useState({
    picShow: false,
  });

  const showPic = () => {
    img.picShow === false
      ? setImg({
          picShow: true,
        })
      : setImg({
          picShow: false,
        });
  };

  // let handleOnChange = showPic;

  return (
    <>
      <header id="inicio">
        <div className="contenedorCard">
          <div className="card">
            <div className="cardLeft">
              <p className="titleCard">Full Stack Developer</p>
              <p className="subtitle">
                {/* I always try to do my best and keep on learning in every project
                where I am involved. */}
                I am a dedicated and demanding person with myself, I like
                teamwork and cooperation. I love solving problems and teaching
                my colleagues what I have learned, just as I am also very
                attracted to listening to the logic that the rest of the team
                applies to solve the problems that are presented to them, I
                believe that every matter to be solved is a new experience that
                we nourishes
              </p>
            </div>
            <div className="borde">
              {img.picShow === true ? (
                <div class="cardPic">

                  <img
                    onClick={showPic}
                    className="imgInicio"
                    src={fotoPerfil}
                    alt="foto perfil"/>
                </div>
              ) : (
                <svg
                  onClick={showPic}
                  width="365"
                  height="419"
                  viewBox="0 0 420 419"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="210"
                    cy="209.5"
                    rx="210"
                    ry="209.5"
                    fill="#727272"
                  />
                  <path
                    d="M98.8864 199.25C98.6742 197.265 97.7803 195.72 96.2045 194.614C94.6439 193.508 92.6136 192.955 90.1136 192.955C88.3561 192.955 86.8485 193.22 85.5909 193.75C84.3333 194.28 83.3712 195 82.7045 195.909C82.0379 196.818 81.697 197.856 81.6818 199.023C81.6818 199.992 81.9015 200.833 82.3409 201.545C82.7955 202.258 83.4091 202.864 84.1818 203.364C84.9545 203.848 85.8106 204.258 86.75 204.591C87.6894 204.924 88.6364 205.205 89.5909 205.432L93.9545 206.523C95.7121 206.932 97.4015 207.485 99.0227 208.182C100.659 208.879 102.121 209.758 103.409 210.818C104.712 211.879 105.742 213.159 106.5 214.659C107.258 216.159 107.636 217.917 107.636 219.932C107.636 222.659 106.939 225.061 105.545 227.136C104.152 229.197 102.136 230.811 99.5 231.977C96.8788 233.129 93.7045 233.705 89.9773 233.705C86.3561 233.705 83.2121 233.144 80.5455 232.023C77.8939 230.902 75.8182 229.265 74.3182 227.114C72.8333 224.962 72.0303 222.341 71.9091 219.25H80.2045C80.3258 220.871 80.8258 222.22 81.7045 223.295C82.5833 224.371 83.7273 225.174 85.1364 225.705C86.5606 226.235 88.1515 226.5 89.9091 226.5C91.7424 226.5 93.3485 226.227 94.7273 225.682C96.1212 225.121 97.2121 224.348 98 223.364C98.7879 222.364 99.1894 221.197 99.2045 219.864C99.1894 218.652 98.8333 217.652 98.1364 216.864C97.4394 216.061 96.4621 215.394 95.2045 214.864C93.9621 214.318 92.5076 213.833 90.8409 213.409L85.5455 212.045C81.7121 211.061 78.6818 209.568 76.4545 207.568C74.2424 205.553 73.1364 202.879 73.1364 199.545C73.1364 196.803 73.8788 194.402 75.3636 192.341C76.8636 190.28 78.9015 188.682 81.4773 187.545C84.053 186.394 86.9697 185.818 90.2273 185.818C93.5303 185.818 96.4242 186.394 98.9091 187.545C101.409 188.682 103.371 190.265 104.795 192.295C106.22 194.311 106.955 196.629 107 199.25H98.8864ZM123.017 212.545V233H114.79V186.455H122.835V204.023H123.244C124.063 202.053 125.328 200.5 127.04 199.364C128.767 198.212 130.964 197.636 133.631 197.636C136.055 197.636 138.169 198.144 139.972 199.159C141.775 200.174 143.169 201.659 144.153 203.614C145.153 205.568 145.653 207.955 145.653 210.773V233H137.426V212.045C137.426 209.697 136.82 207.871 135.608 206.568C134.411 205.25 132.729 204.591 130.562 204.591C129.108 204.591 127.805 204.909 126.653 205.545C125.517 206.167 124.623 207.068 123.972 208.25C123.335 209.432 123.017 210.864 123.017 212.545ZM169.267 233.682C165.858 233.682 162.903 232.932 160.403 231.432C157.903 229.932 155.964 227.833 154.585 225.136C153.222 222.439 152.54 219.288 152.54 215.682C152.54 212.076 153.222 208.917 154.585 206.205C155.964 203.492 157.903 201.386 160.403 199.886C162.903 198.386 165.858 197.636 169.267 197.636C172.676 197.636 175.631 198.386 178.131 199.886C180.631 201.386 182.563 203.492 183.926 206.205C185.305 208.917 185.994 212.076 185.994 215.682C185.994 219.288 185.305 222.439 183.926 225.136C182.563 227.833 180.631 229.932 178.131 231.432C175.631 232.932 172.676 233.682 169.267 233.682ZM169.312 227.091C171.161 227.091 172.706 226.583 173.949 225.568C175.191 224.538 176.116 223.159 176.722 221.432C177.343 219.705 177.653 217.78 177.653 215.659C177.653 213.523 177.343 211.591 176.722 209.864C176.116 208.121 175.191 206.735 173.949 205.705C172.706 204.674 171.161 204.159 169.312 204.159C167.419 204.159 165.843 204.674 164.585 205.705C163.343 206.735 162.411 208.121 161.79 209.864C161.184 211.591 160.881 213.523 160.881 215.659C160.881 217.78 161.184 219.705 161.79 221.432C162.411 223.159 163.343 224.538 164.585 225.568C165.843 226.583 167.419 227.091 169.312 227.091ZM199.182 233L189.318 198.091H197.705L203.841 222.636H204.159L210.432 198.091H218.727L225 222.5H225.341L231.386 198.091H239.795L229.909 233H221.341L214.795 209.409H214.318L207.773 233H199.182ZM261.778 233V186.455H279.233C282.809 186.455 285.809 187.121 288.233 188.455C290.672 189.788 292.513 191.621 293.756 193.955C295.013 196.273 295.642 198.909 295.642 201.864C295.642 204.848 295.013 207.5 293.756 209.818C292.498 212.136 290.642 213.962 288.188 215.295C285.733 216.614 282.71 217.273 279.119 217.273H267.551V210.341H277.983C280.074 210.341 281.786 209.977 283.119 209.25C284.453 208.523 285.438 207.523 286.074 206.25C286.725 204.977 287.051 203.515 287.051 201.864C287.051 200.212 286.725 198.758 286.074 197.5C285.438 196.242 284.445 195.265 283.097 194.568C281.763 193.856 280.044 193.5 277.938 193.5H270.21V233H261.778ZM302.602 233V198.091H310.83V233H302.602ZM306.739 193.136C305.436 193.136 304.314 192.705 303.375 191.841C302.436 190.962 301.966 189.909 301.966 188.682C301.966 187.439 302.436 186.386 303.375 185.523C304.314 184.644 305.436 184.205 306.739 184.205C308.057 184.205 309.178 184.644 310.102 185.523C311.042 186.386 311.511 187.439 311.511 188.682C311.511 189.909 311.042 190.962 310.102 191.841C309.178 192.705 308.057 193.136 306.739 193.136ZM334.517 233.682C331.032 233.682 328.04 232.917 325.54 231.386C323.055 229.856 321.138 227.742 319.79 225.045C318.456 222.333 317.79 219.212 317.79 215.682C317.79 212.136 318.472 209.008 319.835 206.295C321.199 203.568 323.123 201.447 325.608 199.932C328.108 198.402 331.063 197.636 334.472 197.636C337.305 197.636 339.813 198.159 341.994 199.205C344.191 200.235 345.941 201.697 347.244 203.591C348.547 205.47 349.29 207.667 349.472 210.182H341.608C341.29 208.5 340.532 207.098 339.335 205.977C338.153 204.841 336.57 204.273 334.585 204.273C332.903 204.273 331.426 204.727 330.153 205.636C328.881 206.53 327.888 207.818 327.176 209.5C326.479 211.182 326.131 213.197 326.131 215.545C326.131 217.924 326.479 219.97 327.176 221.682C327.873 223.379 328.85 224.689 330.108 225.614C331.381 226.523 332.873 226.977 334.585 226.977C335.797 226.977 336.881 226.75 337.835 226.295C338.805 225.826 339.616 225.152 340.267 224.273C340.919 223.394 341.366 222.326 341.608 221.068H349.472C349.275 223.538 348.547 225.727 347.29 227.636C346.032 229.53 344.32 231.015 342.153 232.091C339.987 233.152 337.441 233.682 334.517 233.682Z"
                    fill="white"
                  />
                  <path
                    d="M159.662 259.435H156.474C156.384 258.912 156.216 258.449 155.972 258.045C155.727 257.636 155.423 257.29 155.06 257.006C154.696 256.722 154.281 256.509 153.815 256.366C153.355 256.219 152.858 256.145 152.324 256.145C151.375 256.145 150.534 256.384 149.801 256.861C149.068 257.332 148.494 258.026 148.08 258.94C147.665 259.849 147.457 260.96 147.457 262.273C147.457 263.608 147.665 264.733 148.08 265.648C148.5 266.557 149.074 267.244 149.801 267.71C150.534 268.17 151.372 268.401 152.315 268.401C152.838 268.401 153.327 268.332 153.781 268.196C154.241 268.054 154.653 267.847 155.017 267.574C155.386 267.301 155.696 266.966 155.946 266.568C156.202 266.17 156.378 265.716 156.474 265.205L159.662 265.222C159.543 266.051 159.284 266.83 158.886 267.557C158.494 268.284 157.98 268.926 157.344 269.483C156.707 270.034 155.963 270.466 155.111 270.778C154.259 271.085 153.313 271.239 152.273 271.239C150.739 271.239 149.369 270.884 148.165 270.173C146.96 269.463 146.011 268.438 145.318 267.097C144.625 265.756 144.278 264.148 144.278 262.273C144.278 260.392 144.628 258.784 145.327 257.449C146.026 256.108 146.977 255.082 148.182 254.372C149.386 253.662 150.75 253.307 152.273 253.307C153.244 253.307 154.148 253.443 154.983 253.716C155.818 253.989 156.563 254.389 157.216 254.918C157.869 255.44 158.406 256.082 158.827 256.844C159.253 257.599 159.531 258.463 159.662 259.435ZM165.506 253.545V271H162.421V253.545H165.506ZM168.679 271V257.909H171.764V271H168.679ZM170.23 256.051C169.741 256.051 169.321 255.889 168.969 255.565C168.616 255.236 168.44 254.841 168.44 254.381C168.44 253.915 168.616 253.52 168.969 253.196C169.321 252.866 169.741 252.702 170.23 252.702C170.724 252.702 171.145 252.866 171.491 253.196C171.844 253.52 172.02 253.915 172.02 254.381C172.02 254.841 171.844 255.236 171.491 255.565C171.145 255.889 170.724 256.051 170.23 256.051ZM180.647 271.256C179.34 271.256 178.218 270.969 177.281 270.395C176.349 269.821 175.63 269.028 175.124 268.017C174.624 267 174.374 265.83 174.374 264.506C174.374 263.176 174.63 262.003 175.141 260.986C175.653 259.963 176.374 259.168 177.306 258.599C178.244 258.026 179.352 257.739 180.63 257.739C181.692 257.739 182.633 257.935 183.451 258.327C184.275 258.713 184.931 259.261 185.42 259.972C185.908 260.676 186.187 261.5 186.255 262.443H183.306C183.187 261.812 182.903 261.287 182.454 260.866C182.011 260.44 181.417 260.227 180.673 260.227C180.042 260.227 179.488 260.398 179.011 260.739C178.533 261.074 178.161 261.557 177.894 262.188C177.633 262.818 177.502 263.574 177.502 264.455C177.502 265.347 177.633 266.114 177.894 266.756C178.156 267.392 178.522 267.884 178.994 268.23C179.471 268.571 180.031 268.741 180.673 268.741C181.127 268.741 181.533 268.656 181.891 268.486C182.255 268.31 182.559 268.057 182.803 267.727C183.048 267.398 183.215 266.997 183.306 266.526H186.255C186.181 267.452 185.908 268.273 185.437 268.989C184.965 269.699 184.323 270.256 183.511 270.659C182.698 271.057 181.744 271.256 180.647 271.256ZM191.601 266.892L191.592 263.168H192.087L196.791 257.909H200.396L194.609 264.352H193.97L191.601 266.892ZM188.788 271V253.545H191.874V271H188.788ZM197.004 271L192.743 265.043L194.822 262.869L200.695 271H197.004ZM208.406 271V257.909H211.354V260.134H211.508C211.781 259.384 212.232 258.798 212.863 258.378C213.494 257.952 214.246 257.739 215.121 257.739C216.008 257.739 216.755 257.955 217.363 258.386C217.977 258.812 218.408 259.395 218.658 260.134H218.795C219.085 259.406 219.573 258.827 220.261 258.395C220.954 257.957 221.775 257.739 222.724 257.739C223.928 257.739 224.911 258.119 225.673 258.881C226.434 259.642 226.815 260.753 226.815 262.213V271H223.721V262.69C223.721 261.878 223.505 261.284 223.073 260.909C222.641 260.528 222.113 260.338 221.488 260.338C220.744 260.338 220.161 260.571 219.741 261.037C219.326 261.497 219.119 262.097 219.119 262.835V271H216.093V262.562C216.093 261.886 215.888 261.347 215.479 260.943C215.076 260.54 214.548 260.338 213.894 260.338C213.451 260.338 213.048 260.452 212.684 260.679C212.32 260.901 212.031 261.216 211.815 261.625C211.599 262.028 211.491 262.5 211.491 263.04V271H208.406ZM235.74 271.256C234.428 271.256 233.294 270.983 232.339 270.438C231.391 269.886 230.661 269.108 230.149 268.102C229.638 267.091 229.382 265.901 229.382 264.531C229.382 263.185 229.638 262.003 230.149 260.986C230.666 259.963 231.388 259.168 232.314 258.599C233.24 258.026 234.328 257.739 235.578 257.739C236.385 257.739 237.146 257.869 237.862 258.131C238.584 258.386 239.22 258.784 239.771 259.324C240.328 259.864 240.766 260.551 241.084 261.386C241.402 262.216 241.561 263.205 241.561 264.352V265.298H230.831V263.219H238.604C238.598 262.628 238.47 262.102 238.22 261.642C237.97 261.176 237.621 260.81 237.172 260.543C236.729 260.276 236.212 260.142 235.621 260.142C234.99 260.142 234.436 260.295 233.959 260.602C233.482 260.903 233.109 261.301 232.842 261.795C232.581 262.284 232.447 262.821 232.442 263.406V265.222C232.442 265.983 232.581 266.636 232.859 267.182C233.138 267.722 233.527 268.136 234.027 268.426C234.527 268.71 235.112 268.852 235.783 268.852C236.232 268.852 236.638 268.79 237.001 268.665C237.365 268.534 237.68 268.344 237.947 268.094C238.214 267.844 238.416 267.534 238.553 267.165L241.433 267.489C241.251 268.25 240.905 268.915 240.393 269.483C239.888 270.045 239.24 270.483 238.45 270.795C237.661 271.102 236.757 271.256 235.74 271.256ZM253.9 253.545L253.619 265.869H250.874L250.602 253.545H253.9ZM252.246 271.188C251.729 271.188 251.286 271.006 250.917 270.642C250.553 270.278 250.371 269.835 250.371 269.312C250.371 268.801 250.553 268.364 250.917 268C251.286 267.636 251.729 267.455 252.246 267.455C252.752 267.455 253.19 267.636 253.559 268C253.934 268.364 254.121 268.801 254.121 269.312C254.121 269.659 254.033 269.974 253.857 270.259C253.687 270.543 253.46 270.77 253.175 270.94C252.897 271.105 252.587 271.188 252.246 271.188Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

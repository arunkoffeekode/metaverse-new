import Footer from "./Component/Footer";
import Appsection from "./Component/Appsection";
import Massiveslider from "./Component/Massiveslider";
import SocialEslider from "./Component/SocialEslider";
import Xrelight from "./Component/Xrelight";
import Itshare from "./Component/Itshare";

import gsap from "gsap";
import { useEffect } from "react";


function App() {

  // cursor start
  useEffect(() => {
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          }
        })
      }
    });

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    })

    cursorScale.forEach(link => {
      link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
        }
      });

      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
      });
    })
  }, [])

  return (
    <>
      <div class="cursor"></div>

      {/* <main class="c-main"> */}

      <Xrelight></Xrelight>
      <Itshare></Itshare>
      <SocialEslider></SocialEslider>
      <Massiveslider></Massiveslider>
      <Appsection></Appsection>
      <Footer></Footer>
      {/* </main> */}
    </>
  );
}

export default App;

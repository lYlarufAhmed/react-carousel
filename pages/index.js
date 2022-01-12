import ProductCarousel from "../components/ProductCarousel";

export default function Home() {
    return (
        <div>
            <ProductCarousel/>
            <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&display=swap');

              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              }

              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }

              .carousel.carousel-slider, li.slide {
                height: 80vh;
              }

              .control-arrow {
                height: 50px;
                width: 50px;
                top: 50% !important;
              }

              .legend-container {
                position: absolute;
                top: 0;
                height: 5rem;
                display: flex;
                padding-top: 2rem;
                flex-direction: column;
                justify-content: space-between;
                color: white;
                font-family: 'Libre Baskerville', serif;
              }

              .legend-container .title {
                align-self: flex-start;
                font-size: 32px;
                font-weight: bold;
                padding-left: 1rem;
              }

              .legend-container .body {
                letter-spacing: .01rem;
                font-size: small;
              }

              button.order-now {
                border: none;
                background-color: darkslateblue;
                color: white;
                width: 20rem;
                padding: .7rem 3rem;
                margin-top: 2rem;
                font-weight: bold;
                letter-spacing: .1rem;
              }

              button.order-now:hover {
                background-color: blueviolet;
                cursor: pointer;
              }

              @media (max-width: 960px) {
                .control-arrow {
                  top: 20% !important;
                }

                .carousel.carousel-slider, li.slide {
                  height: 30vh;
                }
              }
            `}</style>
        </div>
    )
}

import anime from "animejs";

export default function App() {
  // anime({
  //   targets: ".shape",
  //   points: [
  //     {value: "175 5, 225 60, 200 145, 100 145, 75 60"}
  //   ],
  //   easing: 'easeInOutQuad',
  //   duration: 1000,
  //   loop: false,
  //   direction: 'alternate'
  // })

  return (
      <svg >
        <polygon className="shape" points="150 5, 225 60, 200 145, 100 145, 75 60" 
        stroke="black" fill="none" stroke-width="2" />
      </svg>
  );
}

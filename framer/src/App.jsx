import "./App.css";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragState, setDragState] = useState("x");

  useEffect(() => {
    if (position.x > 890) {
      setDragState("y");
    }
  }, [position]);
  return (
    <>
      <div className="main">
        {/* <motion.div
        animate={{
          x:[0,600,600,0,0],
          y:[0,0,300,300,0],
          rotate:320
        }}
        transition={{
          duration:2,
          delay:1
        }}
          className="box"
        >

        </motion.div> */}

        <div className="container">
          <div>
            <h1>ToDo</h1>
          </div>

          <div>
            <h1>Completed</h1>
          </div>
        </div>

        <motion.div
          drag="x"
          whileDrag={{ scale: 0.4 }}
          className="box"
          onDrag={(event, info) => {
            setPosition({ x: info.point.x, y: info.point.y });
          }}
        />

        <motion.div
          drag={dragState}
          whileDrag={{ scale: 0.4 }}
          className="box"
          onDrag={(event, info) => {
            setPosition({ x: info.point.x, y: info.point.y });
          }}
        />
        <motion.div
          drag="x"
          whileDrag={{ scale: 0.4 }}
          className="box"
          onDrag={(event, info) => {
            setPosition({ x: info.point.x, y: info.point.y });
          }}
        />
        <p>
          X: {position.x.toFixed(2)}, Y: {position.y.toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Symbol from "./Symbol";
import { useState } from "react";
import Swal from "sweetalert2";

const Container = () => {
  const [player, setPlayer] = useState(1);
  const [move, setMove] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleClick = (e) => {
    let moveRef = move;
    if (moveRef[e.target.id] === 0) {
      moveRef[e.target.id] = player;
    } else {
      return;
    }
    setMove(moveRef);
    player === 1 ? setPlayer(2) : setPlayer(1);
    switch (true) {
      case move[0] === move[1] && move[0] === move[2]:
        if (move[0] * move[1] * move[2] === 0) {
          return;
        }
        if (move[0] * move[1] * move[2] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
      case move[3] === move[4] && move[3] === move[5]:
        if (move[3] * move[4] * move[5] === 0) {
          return;
        }
        if (move[3] * move[4] * move[5] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
      case move[6] === move[7] && move[6] === move[8]:
        if (move[6] * move[7] * move[8] === 0) {
          return;
        }
        if (move[6] * move[7] * move[8] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
      case move[0] === move[3] && move[0] === move[6]:
        if (move[0] * move[3] * move[6] === 0) {
          return;
        }
        if (move[0] * move[3] * move[6] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
      case move[1] === move[4] && move[1] === move[7]:
        if (move[1] * move[4] * move[7] === 0) {
          return;
        }
        if (move[1] * move[4] * move[7] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
      case move[2] === move[5] && move[2] === move[8]:
        if (move[2] * move[5] * move[8] === 0) {
          return;
        }
        if (move[2] * move[5] * move[8] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
      case move[0] === move[4] && move[0] === move[8]:
        if (move[0] * move[4] * move[8] === 0) {
          return;
        }
        if (move[0] * move[4] * move[8] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
      case move[2] === move[4] && move[2] === move[6]:
        if (move[2] * move[4] * move[6] === 0) {
          return;
        }
        if (move[2] * move[4] * move[6] === 1) {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 1", "success");
        } else {
          Swal.fire("Partida Finalizada", "GANÓ PLAYER 2", "success");
        }
        setMove([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setPlayer(1);
        return;
    }
  };

  const resetMoves = () => {
    setMove([0,0,0,0,0,0,0,0,0])
    setPlayer(1)
  }

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <span className="me-3 display-6">Juega: </span>
        <Symbol size="fa-3x" player={player} />
      </div>
      <div className="tateti">
        <div className="container-fluid ">
          <div className="row border-bottom border-dark">
            <div
              className="col-4 border-end border-dark p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="0"
            >
              {move[0] === 1 ? <Symbol player={move[0]} size="fa-8x" /> : null}
              {move[0] === 2 ? <Symbol player={move[0]} size="fa-6x" /> : null}
            </div>
            <div
              className="col-4 border-end border-dark p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="1"
            >
              {move[1] === 1 ? <Symbol player={move[1]} size="fa-8x" /> : null}
              {move[1] === 2 ? <Symbol player={move[1]} size="fa-6x" /> : null}
            </div>
            <div
              className="col-4 p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="2"
            >
              {move[2] === 1 ? <Symbol player={move[2]} size="fa-8x" /> : null}
              {move[2] === 2 ? <Symbol player={move[2]} size="fa-6x" /> : null}
            </div>
          </div>
          <div className="row border-bottom border-dark">
            <div
              className="col-4 border-end border-dark p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="3"
            >
              {move[3] === 1 ? <Symbol player={move[3]} size="fa-8x" /> : null}
              {move[3] === 2 ? <Symbol player={move[3]} size="fa-6x" /> : null}
            </div>
            <div
              className="col-4 border-end border-dark p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="4"
            >
              {move[4] === 1 ? <Symbol player={move[4]} size="fa-8x" /> : null}
              {move[4] === 2 ? <Symbol player={move[4]} size="fa-6x" /> : null}
            </div>
            <div
              className="col-4 p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="5"
            >
              {move[5] === 1 ? <Symbol player={move[5]} size="fa-8x" /> : null}
              {move[5] === 2 ? <Symbol player={move[5]} size="fa-6x" /> : null}
            </div>
          </div>
          <div className="row">
            <div
              className="col-4 border-end border-dark p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="6"
            >
              {move[6] === 1 ? <Symbol player={move[6]} size="fa-8x" /> : null}
              {move[6] === 2 ? <Symbol player={move[6]} size="fa-6x" /> : null}
            </div>
            <div
              className="col-4 border-end border-dark p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="7"
            >
              {move[7] === 1 ? <Symbol player={move[7]} size="fa-8x" /> : null}
              {move[7] === 2 ? <Symbol player={move[7]} size="fa-6x" /> : null}
            </div>
            <div
              className="col-4 p-0 d-flex justify-content-center align-items-center"
              onClick={handleClick}
              id="8"
            >
              {move[8] === 1 ? <Symbol player={move[8]} size="fa-8x" /> : null}
              {move[8] === 2 ? <Symbol player={move[8]} size="fa-6x" /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 mt-5">
        <button className="btn btn-warning w-100" onClick={resetMoves}>Limpiar</button>
      </div>
    </>
  );
};

export default Container;

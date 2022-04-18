import React, { Component } from "react";
import api from "../data/game.json";


export class Game extends Component {
  state = {};

  //RENDERS MAIN SCREEN IF GAME IS STARTED

  componentDidMount() {
    const textElement: any = document.getElementById("text");
    const optionButtonsElement: any = document.getElementById("option-buttons");
    // const imgSrc = document.getElementById("image-switch");

    let theState = {};

    function startGame() {
      //console.log(imgSrc);
      theState = {};
      showTextNode(1);
      //youWin();
    }

    function showTextNode(textNodeIndex: any) {
      const textNode: any = textNodes.find(
        (textNode) => textNode.id === textNodeIndex
      );
      textElement.innerText = textNode.text;
      // imgSrc.innerHTML = textNode.img;

      //const textImg = textNodes.find(textNode => textNode.img === textNodeIndex)
      //imgSrc.innerHTML = textImg.img

      while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
      }

      textNode.options.forEach((option: any) => {
        if (showOption(option)) {
          const button = document.createElement("button");
          button.innerText = option.text;
          button.classList.add("btn");
          button.addEventListener("click", () => selectOption(option));
          optionButtonsElement.appendChild(button);
        }
      });
    }

    function showOption(option: any) {
      return option.requiredState == null || option.requiredState(theState);
    }

    function selectOption(option: any) {
      const nextTextNodeId = option.nextText;
      if (nextTextNodeId <= 0) {
        return startGame();
      } else if (nextTextNodeId === 11) {
        console.log("this should be finished");
        callReel();
      }

      theState = Object.assign(theState, option.setState);
      showTextNode(nextTextNodeId);
    }

    const textNodes = api;

    function callReel() {
      window.open(
        "https://www.youtube.com/watch?v=TTFuYXyfMZM&ab_channel=JackTransuePortfolio"
      );
    }

    startGame();
  }

  render() {
    return (
      <>
        <div
          id="game-level"
          className="flex flex-col justify-center items-center game-box"
        >
          {/* <div id="image-switch"></div> */}
          <div className="my-14 lg:text-2xl md:text-lg sm:text-2xl">
            <div className="my-2 text-4xl uppercase font-black">
              Have a question? Ask the robot me with these quirky pre-defined
              RPG style questions.
            </div>
            <div id="text" className="my-10">
              Text
            </div>
            <div
              id="option-buttons"
              className="grid lg:grid-cols-2 grid-cols-1 gap-4"
            >
              <button className="">Option 1</button>
              <button className="">Option 2</button>
              <button className="">Option 3</button>
              <button className="">Option 4</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Game;

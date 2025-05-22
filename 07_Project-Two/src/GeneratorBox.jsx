import { useCallback, useEffect, useRef, useState } from "react";

function GeneratorBox() {
  let inputRef = useRef(null);
  let [copied, setCopied] = useState(false);
  let [password, setPassword] = useState("");
  let [length, setlength] = useState(8);
  let [characterCheck, setCharacterCheck] = useState(false);
  let [numberCheck, setNumberCheck] = useState(false);
  const generatePassword = useCallback(
    function () {
      let innerPassword = "";
      const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const specialCharacterArray = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "+",
        "-",
      ];
      while (innerPassword.length < length) {
        if (numberCheck && innerPassword.length < length) {
          innerPassword +=
            numberArray[Math.floor(Math.random() * numberArray.length)];
        }
        if (characterCheck && innerPassword.length < length) {
          innerPassword +=
            specialCharacterArray[
              Math.floor(Math.random() * specialCharacterArray.length)
            ];
        }
        if (innerPassword.length < length) {
          Math.random() < 0.5
            ? (innerPassword += String.fromCharCode(
                Math.floor(Math.random() * (122 - 97 + 1) + 97)
              ))
            : (innerPassword += String.fromCharCode(
                Math.floor(Math.random() * (90 - 65 + 1) + 65)
              ));
        }
      }
      console.log(innerPassword);
      setPassword(innerPassword);
    },
    [length, characterCheck, numberCheck, setPassword]
  );
  useEffect(generatePassword, [length, characterCheck, numberCheck]);

   function copyToClipBoard() {
    const text = inputRef.current?.value;

    try {
      if (navigator.clipboard) {
         navigator.clipboard.writeText(text);
         alert(`Copied ${password}`)
      } else {
        inputRef.current.select();
        document.execCommand("copy");
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", err);
      alert("Failed to copy. Please try manually.");
    }
  }
  return (
    <>
      <div id="generatorBox" className="w-auto m-10 flex flex-col  ">
        <div
          id="mainFieldBox"
          className=" flex justify-center items-center my-3 "
        >
          <input
            id="passField"
            ref={inputRef}
            value={password}
            readOnly
            type="text"
            className="bg-white text-2xl text-black h-10 rounded-2xl p-5 rounded-r-none w-full"
          />
          <button
            id="copyBtn"
            style={{ cursor: "pointer" }}
            onClick={copyToClipBoard}
            className=" rounded-l-none rounded-2xl text-white w-18 bg-blue-800 h-10"
          >
            Copy
          </button>
        </div>
        <div id="buttonBox" className=" flex justify-center items-center">
          <div id="rangeBox" className="flex items-center">
            <input
              style={{ cursor: "pointer" }}
              min={4}
              max={16}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
              id="slider"
              type="range"
              name="range"
              className=""
            />
            <span id="sliderValue" className="px-3  text-white">
              Length({length})
            </span>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="checkBox   px-2 flex items-center justify-around"
          >
            <input
              value={numberCheck}
              onChange={(e) => {
                setNumberCheck(function (prev) {
                  return !prev;
                });
                e.bubbles;
              }}
              type="checkbox"
              name=""
              id="checkNumber"
            />
            <label htmlFor="checkNumber" id="" className="mx-2 text-white">
              Numbers
            </label>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="checkBox   px-2 flex items-center justify-around"
          >
            <input
              value={characterCheck}
              onChange={() => {
                setCharacterCheck(function (prev) {
                  return !prev;
                });
              }}
              type="checkbox"
              name=""
              id="checkCharacter"
            />
            <label htmlFor="checkCharacter" id="" className="mx-2 text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default GeneratorBox;

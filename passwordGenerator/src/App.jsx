import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useref Hook 
  const passwordRef =useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    numberAllowed
      ? (str += "1234567890")
      : str ;
      character
      ? (str += "!@#$%^&*(_{}][<>")
      : str;

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, character, setPassword]);

const copypasswordtoclipboard = useCallback(()=>{

  passwordRef.current?.select()  
  // above is used for taking refernce of inputtag and higglight the copy item so user can see that copy has been done 
  // and the down line is used for range when the copy button click how many characters have to copy 

  passwordRef.current?.setSelectionRange(0,20)

  window.navigator.clipboard.writeText(password)

},[password])

  useEffect (()=>{
    passwordGenerator();
  },[length,numberAllowed,character,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center my-8">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypasswordtoclipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Lenght : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterinput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="characterinput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import useCurrencyInformation from "./Hooks/customHook";
import InputBox from "./components/inputLayout";
import Heading from "./components/Heading";
function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("INR");
  const [from, setFrom] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInformation(from);
  const options = Object.keys(currencyInfo || {});

  const convert = () => {
    const rate = currencyInfo[to];
    if (!rate || isNaN(amount) || amount < 0) {
      alert("Invalid input or conversion rate.");
      return;
    }

    const result = amount * rate;
    setConvertedAmount(result);
  };
  function swap() {
    setFrom((previous) => {
      setTo(previous);
      return to;
    });
    setAmount((prev) => {
      setConvertedAmount(prev);
      return convertedAmount;
    });
  }
  return (
    <>
    
    <div
      className="w-full h-screen bg-gray-300 flex flex-col flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://iages.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
    <Heading className=" max-w-screen py-5 w-screen mx-auto   rounded-lg  backdrop-blur-sm "/>
      <div className="w-full max-w-md mx-auto   rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              currencyChange={setFrom}
              currencySelect={from}
              currencyList={options}
              amountDisable={false}
              currencyDisable={false}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="hover:bg-blue-700 cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2  border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              onAmountChange={setConvertedAmount}
              currencyChange={setTo}
              currencySelect={to}
              currencyList={options}
              amountDisable
              currencyDisable={false}
            />
          </div>

          <button
            type="submit"
            className="w-full border border-transparent cursor-pointer hover:bg-blue-700 hover:border-white hover:border bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
}

export default App;

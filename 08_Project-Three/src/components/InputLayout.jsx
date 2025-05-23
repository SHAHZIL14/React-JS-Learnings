import { memo } from "react";

const InputBox = memo(function InputBox({
  label,
  amount,
  onAmountChange,
  currencyChange,
  currencySelect = "usd",
  currencyList = [],
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/75 mb-2 inline-block">{label}</label>
        <input
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          inputMode="decimal"
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/75 mb-2 w-full">Currency Type</p>
        <select
          value={currencySelect}
          onChange={(e) => currencyChange(e.target.value)}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full sm:w-auto"
        >
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});

export default InputBox;

import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label  htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">{label} </label>
          <input
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="amount"
            id={amountInputId}
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            // above in line code we write && operator means if first function return undefined then second will be used
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency type</p>

          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisable}
          > 
            {currencyOptions.map((currency ) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;

import React, { useState } from 'react';

function App() {
  return (
    <>
      <h1>App</h1>
      <TipCalculator />
    </>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  const handleReset = function () {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <Satisfication percentage={percentage1} setPercentage={setPercentage1}>
        how much you like the service?{' '}
      </Satisfication>
      <Satisfication percentage={percentage2} setPercentage={setPercentage2}>
        how much like your friend our service?{' '}
      </Satisfication>
      <Output bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>Bill Amount: </label>
      <input
        type="text"
        placeholder="Enter bill Amount"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Satisfication({ children, percentage, setPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatified (0%)</option>
        <option value="5">It is Okay (5%)</option>
        <option value="10">It is good (10%)</option>
        <option value="15">Amazing !! service (15%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You Pay {bill + tip} : ({bill} + {tip}) tip
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
export default App;

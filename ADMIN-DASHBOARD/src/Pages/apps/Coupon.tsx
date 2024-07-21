import { FormEvent, useState } from "react";
import Sidebar from "../../Components/Sidebar";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [isCharInclude, setisCharInclude] = useState<boolean>(false);
  const [isNumInclude, setisNumInclude] = useState<boolean>(false);
  const [isSymbollInclude, setIsSymbollInclude] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [coupon, setIsCoupon] = useState<string>("");

  const copyText = (coupon: string) => {};

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <div className="admin-container">
      <Sidebar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={submitHandler}>
            <input
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={25}
              placeholder="Text to include "
            />
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              maxLength={25}
              minLength={8}
              placeholder="Code Size "
            />
            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={isNumInclude}
                onChange={() => setisNumInclude((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={isCharInclude}
                onChange={() => setisCharInclude((prev) => !prev)}
              />
              <span>Charecters</span>
              <input
                type="checkbox"
                checked={isSymbollInclude}
                onChange={() => setIsSymbollInclude((prev) => !prev)}
              />
              <span>Symboll</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon} <span>{isCopied ? "Copied" : "Copy"}</span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;

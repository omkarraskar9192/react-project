import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import useCurrencyFullForm from './hooks/useCurrencyFullForm'
function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)
  
  const currecyFullForm = useCurrencyFullForm()
  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)
  const sawp = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const conveter=()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }




    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://thumbs.dreamstime.com/b/global-currency-technology-background-money-transfer-stock-market-concept-money-transfer-global-currency-stock-exchange-153251024.jpg?w=992')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            conveter()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                selectCurrency={from}
                                amount={amount}
                                onAmountChange={(amount) => setAmount(amount)}
                                currencyOptions={currencyOptions}
                                onCurrencyChange={(from) => setFrom(from)}


                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={sawp}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={currencyOptions}
                                onAmountChange={(convertedAmount)=>setConvertedAmount(convertedAmount)}
                                onCurrencyChange={(to) => setTo(to)}
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={conveter}>
                            Convert {(currecyFullForm[from])} TO {(currecyFullForm[to])}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App

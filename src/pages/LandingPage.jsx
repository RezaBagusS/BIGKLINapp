import { Link } from "react-router-dom";
import logo from "../assets/laundry.png"
import { useState } from "react";

const LandingPage = () => {

    const [beratCucian, setBeratCucian] = useState(0);

    return (
        <div className="w-full h-screen max-h-[640px] flex flex-col gap-5 justify-center items-center">
            <img src={logo} className="w-3/12 aspect-square object-cover object-center" alt="LaundryLogo" />
            <h1 className="font-bold text-5xl">
                BIGKLIN SMART APP SELF SERVICE MACHINE
            </h1>
            <div className="flex items-center text-lg font-medium gap-2">
                <label htmlFor="">
                    Berat Cucian :
                </label>
                <input type="text" onChange={(e) => setBeratCucian(e.target.value)} className="border-2 border-black px-2 py-1" />
                <p>Kg</p>
            </div>
            <p>Silahkan Timbang cucian Anda Otomatis</p>
            <Link to={`/service/${beratCucian}`} className="bg-white px-3 py-1 hover:bg-slate-200 ring-2 ring-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                Berikutnya
            </Link>
        </div>
    )
}

export default LandingPage;
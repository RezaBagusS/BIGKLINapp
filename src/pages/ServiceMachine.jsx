import { useParams, Link } from "react-router-dom";
import logo from "../assets/laundry.png"

const ServiceMachine = () => {
    const { beratCucian } = useParams();

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = {};
        Array.from(e.target.elements).forEach((element) => {
            if (element.name) {
                formData[element.name] = element.value;
            }
        });

        const url = 'http://localhost:3000/api/add/databigklin';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                data: formData
            }),
        };

        console.log(formData);

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log("res : ",data);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className="w-full h-screen max-h-[640px] flex flex-col gap-5 justify-center items-center">
            <img src={logo} className="w-1/12 aspect-square object-cover object-center" alt="LaundryLogo" />
            <h1 className="font-bold text-3xl text-center">
                BIGKLIN SMART APP SELF SERVICE MACHINE
            </h1>
            <form action="" method="POST" onSubmit={submitForm} className="w-8/12 flex flex-col gap-3 justify-start">
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Tgl Order
                    </label>
                    <div className="col-span-1">
                        <input type="date" name="tglOrder" className="w-full border-2 border-black px-2 py-1" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Nama Pelanggan
                    </label>
                    <div className="col-span-1">
                        <input type="text" placeholder="Abdul Arshad" name="namaPelanggan" className="w-full border-2 border-black px-2 py-1" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Telepon
                    </label>
                    <div className="col-span-1">
                        <input type="text" placeholder="081332738492" name="telepon" className="w-full border-2 border-black px-2 py-1" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Layanan
                    </label>
                    <div className="col-span-1 w-full flex gap-2">
                        <select name="jenisLayanan" placeholder="Pilih :" className="w-full border-2 border-black px-2 py-1">
                            <option value="" selected disabled>Pilih :</option>
                            <option value="CKS">CKS</option>
                            <option value="CKL">CKL</option>
                        </select>
                        <select name="metodeLayanan" className="w-full border-2 border-black px-2 py-1">
                            <option value="" selected disabled>Pilih :</option>
                            <option value="Self Service">Self Service</option>
                            <option value="Drop Off">Drop Off</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Berat Cucian
                    </label>
                    <div className="col-span-1 flex items-center gap-2">
                        <input type="text" disabled name="beratCucian" value={beratCucian} className="w-1/2 bg-slate-400 border-2 border-black px-2 py-1" />
                        <p className="w-1/2">Kg (Otomatis)</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Jumlah Pakaian
                    </label>
                    <div className="col-span-1">
                        <input type="text" placeholder="10" name="jumlahPakaian" className="w-full border-2 border-black px-2 py-1" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Aroma Parfum
                    </label>
                    <div className="col-span-1">
                        <input type="text" placeholder="Lemon" name="aromaParfum" className="w-full border-2 border-black px-2 py-1" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Harga Total
                    </label>
                    <div className="col-span-1">
                        <input type="text" placeholder="15000" name="hargaTotal" className="w-full border-2 border-black px-2 py-1" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full items-center text-lg font-medium gap-2">
                    <label htmlFor="" className="col-span-1">
                        Status
                    </label>
                    <div className="col-span-1 w-full flex gap-2 whitespace-nowrap">
                        <input type="radio" name="status" value="True" /> Lunas
                        <input type="radio" name="status" value="False" /> Belum Lunas
                    </div>
                </div>
                <div className="w-full mt-5 flex justify-between">
                    <button type="submit" className="bg-white px-3 py-1 hover:bg-slate-200 ring-2 ring-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Bayar
                    </button>
                    <Link to={`/`} className="bg-white px-3 py-1 hover:bg-slate-200 ring-2 ring-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Kembali ke Menu Sebelumnya
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ServiceMachine;
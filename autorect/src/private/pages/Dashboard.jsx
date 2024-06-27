import { ButtonsD } from "../../components/Private/ButtonsD"
import { CardD } from "../../components/Private/CardD"
import { Grafic } from "../../components/Private/Grafic"
import { Sidebar } from "../../components/Private/Sidebar"
import '../styles/dashboard.css'


export function Dashboard() {
    const data_card1 = <span className="text-gray-500 text-sm font-bold">/5</span>
    const data_card2 = <span className="text-gray-500 text-sm font-bold">usd</span>
    const first = <div className="flex mt-2">
        <box-icon type='solid' name='star' size='20px' color='white'></box-icon>
        <box-icon type='solid' name='star' size='20px' color='white'></box-icon>
        <box-icon type='solid' name='star' size='20px' color='white'></box-icon>
        <box-icon type='solid' name='star' size='20px' color='white'></box-icon>
        <box-icon name='star-half' type='solid' size='20px' color='white'></box-icon>
    </div>
    return (
        <div className="w-screen h-screen overflow-hidden flex">
            <div className="h-full w-20 sidebar flex justify-center bg-red-500">
                <Sidebar />
            </div>
            <div className="h-full w-full overflow-y-scroll main_data">
                <div className="w-full mt-8 px-8 flex justify-between ">
                    <div className="flex items-center">
                        <h1 className="text-red-900 font-semibold text-3xl">DASHBOARD</h1>
                    </div>
                    <div className="flex justify-end bt_top">
                        <ButtonsD>Daily</ButtonsD>
                        <ButtonsD>Weekly</ButtonsD>
                        <ButtonsD>Monthly</ButtonsD>
                    </div>
                </div>
                <div className="h-full w-full">
                    <div className="w-full container_cards px-8">
                        <CardD title='STORE RATING' quantity='4.5' rest={data_card1} values={first} />
                        <CardD title='TOTAL INCOME' quantity='4,540.98' rest={data_card2} colorv='text-green-500 font-bold mt-2' values='+5%' />
                        <CardD title='TOTAL ORDERS' quantity='4,120' colorv='text-green-500 font-bold mt-2' values='+3%' />
                        <CardD title='NEW CLIENTS' quantity='516' colorv='text-red-800 font-bold mt-2' values='-2%' />
                    </div>
                    <div className=" h-full w-full px-8 mt-10 flex-col">
                        <div className="flex justify-between grafics">
                            <Grafic />
                            <Grafic />
                        </div>
                        <div className="flex justify-between mt-10 pb-10 s">
                            <Grafic />
                            <Grafic />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
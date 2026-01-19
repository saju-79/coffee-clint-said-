 
import { TiCoffee } from 'react-icons/ti';
import Card from './Card';
import { Link } from 'react-router';
 

const Cards = ({datas}) => {
    
    return (
        <div>
             <div className=" text-center justify-center items-center flex flex-col my-10 space-y-4"> 
                 <p className='text-sm text-[#1B1A1A]'> --- Sip & Savor ---</p>
                 <h1 className='text-4xl text-[#331A15] font-bold'>Our Popular Products <span className='text-[#D2B48C]'>{datas.length}</span></h1>
                 <Link to='/addCard'><button className=' border-[#331A15]   hover:border-[#E3B577] text-white px-4 py-2 rounded-md bg-[#E3B577] flex gap-1 items-center '>Add Coffee <TiCoffee className='text-[#331A15]  ' size={18} /></button></Link>
             </div>
           
             <div className=" grid grid-cols-2 gap-5">
                {
                    datas.map(data => <Card key={data._id} 
                        data={data}
                        ></Card>)
                }
             </div>
        </div>
    );
};

export default Cards;
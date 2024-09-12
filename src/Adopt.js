import { Link } from 'react-router-dom';
import tiger from './tiger.jpg'
import leopard from './lion.jpg'
import hyena from './hyena2.jpg'
import crocodile from './crocodile.jpg'
import bear from './sloth bear.jpg'
const Adopt = () => {
    return ( 
        <div className="grid grid-cols-4 divide-x pl-12 h-1/5 p-8">
            <div className="h-full p-2">
                <Link to="/details/tiger">
                    <img src={tiger} alt="Tiger" />
                    <div className="bg-slate-800 text-center py-2 mt-2 rounded font-medium text-slate-200">
                        TIGER: Yearly Rs 2 Lakh
                    </div>

                </Link>
            </div>
            <div className="h-full p-2">
                <Link to="/details/leopard">
                    <img src={leopard} alt="Leopard" />
                    <div className="bg-slate-800 text-center py-2 mt-2 rounded font-medium text-slate-200">
                        LEOPARD: Yearly Rs 1 Lakh
                    </div>
                </Link>
            </div>
            <div className="h-full p-2">
                <Link to="/details/hyena">
                    <img src={hyena} alt="Hyena" />
                    <div className="bg-slate-800 text-center py-2 mt-2 rounded font-medium text-slate-200">
                        HYENA: Yearly Rs 36K
                    </div>
                </Link>
            </div>
            <div className="h-full p-2">
                <Link to="/details/bear">
                    <img src={bear} alt="Sloth Bear" />
                    <div className="bg-slate-800 text-center py-2 mt-2 rounded font-medium text-slate-200">
                        SLOTH BEAR: Yearly Rs 1 Lakh
                    </div>
                </Link>
            </div>
            <div className="h-full p-2">
                <Link to="/details/crocodile">
                    <img src={crocodile} alt="Crocodile" />
                    <div className="bg-slate-800 text-center py-2 mt-2 rounded font-medium text-slate-200">
                        CROCODILE: Yearly Rs 36K
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Adopt;

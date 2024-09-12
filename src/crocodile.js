import croc from './crocodile.jpg'
const crocodile = () => {
    return ( 
        <div className="grid grid-cols-2 divide-x pl-12 h-1/5 p-8">
        <img src={croc} alt="" />
        <div className='p-12'>
            <h1 className='text-4xl font-serif font-semibold text-[#013220]'>Adopt a Crocodile</h1>
            <p className='pt-5 font-serif text-xl'>Crocodiles are ancient, powerful reptiles with strong jaws and a keen sense of survival. Found in rivers and wetlands, they play a vital role in keeping aquatic ecosystems balanced. Unfortunately, they face threats from habitat destruction and pollution. By symbolically adopting a crocodile, you can help ensure their conservation and safeguard these incredible creatures!</p>
            <p  className='pt-5 font-serif text-xl'>Through symbolic adoption, you can show your love for wildlife by virtually adopting amazing animals like tigers or hyenas. While the animals stay in their natural homes, your support helps with their care and protection, making a real difference!</p>
        </div>
    </div>
     );
}
 
export default crocodile;


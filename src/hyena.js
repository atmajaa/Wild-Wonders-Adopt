import Hyena from './hyena2.jpg'
const hyena = () => {
    return ( 
        <div className="grid grid-cols-2 divide-x pl-12 h-1/5 p-8">
        <img src={Hyena} alt="" />
        <div className='p-12'>
            <h1 className='text-4xl font-serif font-semibold text-[#013220]'>Adopt a Hyena</h1>
            <p className='pt-5 font-serif text-xl'>Hyenas are intelligent and resourceful creatures, often misunderstood but vital to their ecosystems. Known for their strong social bonds and unique laughs, they play a crucial role as nature's cleanup crew. By symbolically adopting a hyena, you can support their conservation and help protect these fascinating animals!</p>
            <p  className='pt-5 font-serif text-xl'>Through symbolic adoption, you can show your love for wildlife by virtually adopting amazing animals like tigers or hyenas. While the animals stay in their natural homes, your support helps with their care and protection, making a real difference!</p>
        </div>
    </div>
     );
}
 
export default hyena;
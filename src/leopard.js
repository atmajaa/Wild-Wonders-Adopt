import leo from './lion.jpg'
const leopard = () => {
    return ( 
        <div className="grid grid-cols-2 divide-x pl-12 h-1/5 p-8">
        <img src={leo} alt="" />
        <div className='p-12'>
            <h1 className='text-4xl font-serif font-semibold text-[#013220]'>Adopt a Leopard</h1>
            <p className='pt-5 font-serif text-xl'>Leopards are graceful and stealthy predators, known for their beautiful spotted coats and incredible ability to adapt to various environments. Sadly, they are often threatened by habitat loss and human conflict. By symbolically adopting a leopard, you can help protect these magnificent animals and support their conservation efforts!</p>
            <p  className='pt-5 font-serif text-xl'>Through symbolic adoption, you can show your love for wildlife by virtually adopting amazing animals like tigers or hyenas. While the animals stay in their natural homes, your support helps with their care and protection, making a real difference!</p>
        </div>
    </div>
     );
}
 
export default leopard;


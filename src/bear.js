import Bear from './sloth bear.jpg'
const bear = () => {
    return ( 
        <div className="grid grid-cols-2 divide-x pl-12 h-1/5 p-8">
        <img src={Bear} alt="" />
        <div className='p-12'>
            <h1 className='text-4xl font-serif font-semibold text-[#013220]'>Adopt a Sloth Bear</h1>
            <p className='pt-5 font-serif text-xl'>Sloth bears are gentle, shaggy creatures with long snouts and a love for honey and termites. Found in the forests of India, they play a unique role in their ecosystem. Sadly, they face threats like habitat loss, but by symbolically adopting a sloth bear, you can help protect their future and support their care!</p>
            <p  className='pt-5 font-serif text-xl'>Through symbolic adoption, you can show your love for wildlife by virtually adopting amazing animals like tigers or hyenas. While the animals stay in their natural homes, your support helps with their care and protection, making a real difference!</p>
        </div>
    </div>
     );
}
 
export default bear;


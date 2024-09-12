import Tiger from './tiger.jpg'
const tiger = () => {
    return ( 
        <div className="grid grid-cols-2 divide-x pl-12 h-1/5 p-8">
            <img src={Tiger} alt="" />
            <div className='p-12'>
                <h1 className='text-4xl font-serif font-semibold text-[#013220]'>Adopt a Tiger</h1>
                <p className='pt-5 font-serif text-xl'>Tigers are the kings of the jungle, known for their bold stripes and fierce beauty. Sadly, they're endangered, but with your help through symbolic adoption, we can protect them and keep their wild spirit alive!</p>
                <p  className='pt-5 font-serif text-xl'>Through symbolic adoption, you can show your love for wildlife by virtually adopting amazing animals like tigers or hyenas. While the animals stay in their natural homes, your support helps with their care and protection, making a real difference!</p>
            </div>
        </div>

     );
}
 
export default tiger;
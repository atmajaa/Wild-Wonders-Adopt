import vanVihar2 from './van vihar2.jpeg';
import Footer from './Footer';
const About = () => {
    return (
        <div>
            <div className='flex justify-center mt-16 mb-0'>
                <img src={vanVihar2} alt="van vihar" />
            </div>
            {/* Reduce padding and apply negative margin to bring text closer to the image */}
            <div className="content p-20 px-52 -mt-8 text-justify font-serif text-gray-700">
                <h2 className="mb-5">
                    Van Vihar National Park and Zoo is located adjacent to Upper Lake of Bhopal and was created on a denuded and depleted revenue area. About three and a half decades back major portion of this area was under the control of Revenue department and the remaining portion belonged to private agricultural land owners of Prempura, Dharampuri and Amkheda villages.
                </h2>
                <h2 className="mb-5">
                    Even though the area was quite serene and beautiful, having a little vegetation and root stock, it was prone to severe encroachment and a lot of biotic pressure from surrounding human habitation. Quite a few numbers of illegal stone quarries were operational in the area and a constant threat of the area being seized by many commercial organizations loomed large.
                </h2>
                <h2 className="mb-5">
                    An assessment of the location and condition of the area which was facing the above mentioned problems led to the realization of the importance of conservation and the protection of this area. An urgent need for the protection this of such an important landmass which was a part of the catchment of Upper Lake was foreseen. The given protection would lend a better life to Upper Lake.
                </h2>
                <h2 className="mb-5">
                    In order to achieve in-situ and ex-situ conservation of the flora and fauna, it was decided to provide a legal umbrella to this area under the Wildlife (protection) Act, 1972 and a committee was formed to understand the complete situation and recommend the due course to realize the goal of conservation of the area and its constituent flora & fauna.
                </h2>
                <h2 className="mb-5">
                    Van Vihar is considered to be one of the best examples of improvement of bio-diversity on a denuded land and its eco-restoration. Over the time period of last three and a half decades, because of the planned and efficient habitat development measures taken by the park management Van Vihar’s flora and fauna has improved considerably thereby enhancing the overall biodiversity of the park. It is a typical amalgamation of in-situ and ex-situ conservation activities and to cover both the facets of conservation, the Central Zoo Authority further empowered this area and recognized it as a medium sized Zoo on 24.11.94.
                </h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;

import SectionCTA from '../Sections/SectionCTA'
import SectionFeatured from '../Sections/SectionFeatured'
import SectionHero from '../Sections/SectionHero'
import SectionHow from '../Sections/SectionHow'
import SectionMeals from '../Sections/SectionMeals'
import SectionPricing from '../Sections/SectionPricing'
import SectionTestimonials from '../Sections/SectionTestimonials'

const Main =()=>{
    return (
        <main>
            <SectionHero/>
            <SectionFeatured/>
            <SectionHow/>
            <SectionMeals/>
            <SectionTestimonials/>
            <SectionPricing/>
            <SectionCTA/>
        </main>
    )
}

export default Main;
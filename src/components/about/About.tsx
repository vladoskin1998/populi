import '../../style/about.scss'
import AboutButton from './AboutButton'
const About = () => {
    return (
        <div className='about'>
            <div className='container__wraper'>
                <h3 className='title'>
                    About Populi
                </h3>
                <div className='about__body'>
                    <div className='about__body-image'></div>
                    <div className='about__body-text'>
                        <div className='about__body-title'> <b>Populi</b> is a pocket event-based coffeehouse. We created Populi to connect people who share common interests, and to provide the <b>best possible communication experience.</b> </div>
                        <div className='about__body-subtitle'>We made Populi not just another meeting app but a powerful tool for creating various events based on people's interests and personalities. Our engineers and designers work constantly to improve Populi customers' experience, and we would be glad to see your feedback.</div>
                        <h4 className='about__body-undertitle'>Your portable events manager</h4>
                        <AboutButton />
                    </div>
                </div>
                <div className='about__parag'>
                    <p>
                        Populi is an application that will make organizing meetings and finding events more convenient and efficient. Whether you're looking to meet up with friends or join exciting events, Populi will help you turn your ideas into reality. Don't miss the opportunity to be connected with those who share your interests!
                    </p>
                    <p>
                        We believe that Populi will become your indispensable tool for organizing meetings and events. It will help you save time, coordinate attendees, facilitate scheduling and take part in interesting activities. Don't miss the opportunity to create unforgettable meetings with Populi!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About
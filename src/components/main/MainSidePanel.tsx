import { scroller } from 'react-scroll';

const MainSidePanel = () => {

  const scrollToElement = () => {
    scroller.scrollTo('FOOTER', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });

  };

  return (
    <div className="main__side-panel">
      <div className="main__side-panel-link">
        <button>Fb</button>
        <button>Tw</button>
        <button>In</button>
      </div>
      <div className="main__side-panel-text">Immerse yourself in the world of events!</div>
      <button className="main__side-panel-scrolltext" onClick={scrollToElement}>Scroll down</button>
    </div>
  )
}

export default MainSidePanel
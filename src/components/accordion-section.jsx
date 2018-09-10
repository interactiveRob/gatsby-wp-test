import React from 'react';

class AccordionSection extends React.Component {
  render() {
	 
	 const waveColor = this.props.color;
	 return(		 
 	          <div className="flex">
                <div className="add-slide-up" dangerouslySetInnerHTML = {{__html : this.props.descr}} />
                <div className="accordion-container add-slide-up">
                    <div className="accordion">
                        <div className="title">Weather</div>
                        <div className="data">
                            Extreme weather has a significant impact on supply on demand. When natural disasters hinder energy production, supply goes down and prices tend to jump up. Natural disasters, such as hurricanes, blizzards and polar vortices can also damage the infrastructure used to generate energy, which can also drive up prices. For example, while prices generally declined from 2010 to 2017, the polar vortex in 2014 caused prices to temporarily spike.
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">Economy</div>
                        <div className="data">
                            From 2005 to 2010, the economy was growing and power prices were on the rise. However, there was a steep drop-off in prices caused by an economic recession in 2009.
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">Shale Revolution</div>
                        <div className="data">
                           The shale gas boom had a profound effect on the market from 2011 to 2017. Shale gas production increased sharply, causing average energy prices to drop steadily.
 
                        </div>
                    </div>
                </div>
            </div>
	 )
  }
}

export default AccordionSection

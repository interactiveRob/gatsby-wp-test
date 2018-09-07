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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius hic facere quasi expedita facilis dignissimos tenetur! Blanditiis nesciunt aliquam fugiat, dolore voluptates aspernatur incidunt hic reprehenderit libero obcaecati cupiditate?
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">Economy</div>
                        <div className="data">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius hic facere quasi expedita facilis dignissimos tenetur! Blanditiis nesciunt aliquam fugiat, dolore voluptates aspernatur incidunt hic reprehenderit libero obcaecati cupiditate?
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="title">Shale Revolution</div>
                        <div className="data">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius hic facere quasi expedita facilis dignissimos tenetur! Blanditiis nesciunt aliquam fugiat, dolore voluptates aspernatur incidunt hic reprehenderit libero obcaecati cupiditate?
                        </div>
                    </div>
                </div>
            </div>
	 )
  }
}

export default AccordionSection

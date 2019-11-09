import React from 'react';

import { ReactBingmaps } from 'react-bingmaps';

const Map = () => {
    let hello = () => alert('hello, world');

    return (
        <>
            <ReactBingmaps
                bingmapKey={"AvcNf0oiWdC4FZyyZkrrJU8ILKl4kkKdLJlDA6W0ZM0BNM1b0xpWk-otCvDifzDo"}
                center={[49.246292, -123.0433]}
                mapTypeId={"road"}
                navigationBarMode={"compact"}
                infoboxesWithPushPins  = {
                    [
                        {
                            "location":[49.246292, -123.0433], 
                            "addHandler":"mouseover", 
                            "infoboxOption": { title: 'Infobox Title', description: 'Infobox' },
                            "pushPinOption":{ title: 'Pushpin Title', description: 'Pushpin' },
                            "infoboxAddHandler": {"type" : "click", callback: hello },
                            "pushPinAddHandler": {"type" : "click", callback: hello }
                          }
                    ]
                }
            />
        </>

    );
};

export default Map;
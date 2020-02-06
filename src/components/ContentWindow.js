import React from 'react'

 function ContentWindow(props) {
    return (
        <div class="contentWindow">

            <div class="topSection">
                <img class="roomImg" src={props.source} alt={props.alt} />
                <h4> {props.rating} </h4>
                <h5> {props.review} </h5>
            </div>

            <div class="bottomSection">
                <div class="customerImg">
                    <img class="custImg" src={props.custP} alt={props.alt} />
                </div>

                <div class="customerNL">
                    <p class="customerName"> {props.custN} </p>
                    <p class="customerLocation"> {props.custL} </p>
                </div>
            </div>
            
        </div>
    )
}

export default ContentWindow;
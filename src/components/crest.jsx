const Crest = (props) => {
    return ( 
        <div className="crest">
            <img src =  {props.url} alt = "" style = {{ height: props.h, width: props.w }}/>
        </div>
     );
}
 
export default Crest;
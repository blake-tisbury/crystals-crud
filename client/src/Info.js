//const username = ""
const username = "Username:"
const crystals ="Crystals:"
const dateModi = "Purchases:"


const Info = () => {
    return (
        <div className="Info">
          <span className="Username"> { username }  </span> 
          <span className="Crystals"> { crystals }  </span> 
          <span className="DateModi"> { dateModi }  </span> 

    </div>
    )
};

export default Info;
import Logo from './images/logo.png'
import Bucket from './images/bucket.png'

const Header = () => {
    return (
        <div className="Header">
        <img src= {Bucket} alt = "Axolotl in bucket from Minecraft"/> <h1>Crystals Database</h1>    <img src= {Logo} alt = "Amesyst Crystal from Minecraft"/> 
    </div>
    )
};

export default Header;
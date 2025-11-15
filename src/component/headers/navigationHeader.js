import '../../stylesheets/NavigationHeader.css'
import { Link } from 'react-router-dom';



const NavigationHeader = () => {
    return (

        <nav className="navigation-header">
            <Link to='/home/index'>Home</Link>
            <Link to="/core/RecipeGenerator">Create</Link>
        </nav>

    );
}

export default NavigationHeader;
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return(
        <>
            <table>
                <tr>
                    <td><Link to={"/add"}>        Add ToDo     </Link></td>
                    <td><Link to={""}>            Show All      </Link></td>
                    <td><Link to={"/notstarted"}> Not Started Yet </Link></td>
                    <td><Link to={"/inprogress"}> In Progress   </Link></td>
                    <td><Link to={"/done"}>       Done          </Link></td>
                </tr>
            </table>
        </>
    )
}
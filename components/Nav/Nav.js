import Image from "next/image"
import "./Nav.css"
export const Nav = () => {
  return (
    <nav>
        <h3>Edie</h3>
        <div>
            <Image src = "./menu.svg" alt="Menu" width={35} height={35} />
        </div>
    </nav>
  )
}

export default Nav
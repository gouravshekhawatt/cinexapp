import React from "react";
import { Container, Nav, Navbar }from 'react-bootstrap/';
import Screenshot from "./Screenshot__344_-removebg-preview.png"
import * as ROUTES from "../../../constants/routes";

function HeaderNav() {
	return (
		<>
		<Navbar className="headerNav pt-4 " expand="lg">
			<Container fluid className="d-flex justify-content-center">
				<Navbar.Brand href={ROUTES.HOME} className="netflixLogo">
					<img
							className="navLogo"
							src={Screenshot}
							alt="Netflix logo"
						/>
				</Navbar.Brand>
				<Nav>
					<Nav.Link href={ROUTES.SIGN_IN} >Sign In</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		</>
	);
}

export default HeaderNav;

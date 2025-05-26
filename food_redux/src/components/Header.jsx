import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">Add to Cart</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to='/'>Home</Nav.Link>
                        <Nav.Link to='/about'>About</Nav.Link>
                        <Nav.Link to='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Badge badgeContent={0} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }} ></i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:'relative'}}>
                        <i className='fas fa-close smallclose' 
                        onClick={handleClose}
                        style={{position:'absolute',top:2,right:20,fontSize:23,cursor:'pointer'}}></i>
                        <p style={{fontSize:22}}>Your Cart is Empty</p>
                    </div>

                </Menu>
            </Navbar>
        </>
    )
}

export default Header
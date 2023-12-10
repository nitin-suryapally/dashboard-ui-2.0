import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import profileImg from "../../asserts/working women.jpg"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PlaceIcon from '@mui/icons-material/Place';
import AssessmentIcon from '@mui/icons-material/Assessment';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Link } from 'react-router-dom';



const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: "white"
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>
                {title}
            </Typography>
            <Link to={to} />
        </MenuItem>
    )
}


const Sidebar = () => {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"))
    console.log(theme)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState("Dashboard")
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: ` #074ae6 important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "grey !important",
                },
                "& .pro-menu-item.active": {
                    color: "White !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed || isSmall}>
                <Menu iconShape='square'>
                    {/* logo and menu */}

                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{ margin: "10px 0 20px 0", color: "white" }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant='body1' color="White" style={{ textDecoration: "underline" }}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon sx={{color : "white"}} />
                                </IconButton>
                            </Box>
                        )}

                    </MenuItem>


                    {/* user profile */}

                    {/* {!isCollapsed && (

                        <Box mb="25px" mt="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="65px"
                                    height="65px"
                                    src={profileImg}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="body1"
                                    color="white"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Emily
                                </Typography>
                                <Typography variant="body2" color="White">
                                    Smart Admin
                                </Typography>
                            </Box>
                        </Box>

                    )} */}


                    {/* menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<GridViewOutlinedIcon  />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Vechicle"
                            to="/"
                            icon={<DirectionsCarOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Equipment"
                            to="/"
                            icon={<ConstructionOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Issues"
                            to="/"
                            icon={<ErrorOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Reminder"
                            to="/"
                            icon={<NotificationsActiveIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Services"
                            to="/"
                            icon={<MiscellaneousServicesIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Fuel"
                            to="/"
                            icon={<LocalGasStationIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contact & Users"
                            to="/"
                            icon={<GroupAddIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Parts & Inventory"
                            to="/"
                            icon={<Inventory2Icon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Places"
                            to="/"
                            icon={<PlaceIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Reports"
                            to="/"
                            icon={<AssessmentIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Intigrations"
                            to="/"
                            icon={<IntegrationInstructionsIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar

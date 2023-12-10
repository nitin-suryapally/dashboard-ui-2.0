import { Box } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import Header from '../../components/header/Header'
import Chat from '../../components/serviceReminder/Chat'
import Equipment from '../../components/serviceReminder/Equipment'
import Barcharts from "../../components/barcharts/Barcharts"
import Comments from "../../components/Comments/Comments"
// import { useTheme } from '@emotion/react'


const Dashboard = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMidScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <Box m="20px" >

            <Box>
                <Header title={"Dashboard"} />
            </Box>

            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
                padding="8px"
            >

                {/* row 1 */}
                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Chat />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Equipment />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Barcharts />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Equipment />
                </Box>

                {/* row 2 */}

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Barcharts />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 6"}
                    gridRow="span 2"
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Comments />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Equipment />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Chat />
                </Box>

                {/* row 3 */}
                <Box
                   gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Chat />
                </Box>

                <Box
                   gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Equipment />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Barcharts />
                </Box>

                <Box
                    gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Equipment />
                </Box>

                <Box
                   gridColumn={isSmallScreen ? "span 12" : isMidScreen ? "span 6" : "span 3"}
                    backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="5px"
                >
                    <Equipment />
                </Box>

            </Box>


        </Box>
    )
}

export default Dashboard

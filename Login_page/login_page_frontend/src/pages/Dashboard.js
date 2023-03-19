import {StyledTitle, StyledSubTitle, Avatar,StyledButton,ButtonGroup,StyledFormArea,colors} from "./../components/Styles";

//LOGO
import Logo from "./../assets/logo.png"

const Dashboard = () => {
    return (
        <div>
            <div style ={{
                position: "absolute",
                top:0,
                left:0,
                backgroundColor:"transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>                 
                <Avatar image={Logo} />
                </div>
                <StyledFormArea bg={colors.dark2}>

                <StyledTitle size={65}> 
                Welcome User
            </StyledTitle>
             <ButtonGroup>
                <StyledButton to="#" > Logout</StyledButton>
             </ButtonGroup>
                     
                </StyledFormArea>
        </div>
    );
};

export default Dashboard;
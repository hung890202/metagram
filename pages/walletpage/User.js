import { StyledProfile,Profile, UserPhoto, UserAddress } from "./UserStyled"


const User = () => {
    return (
            <StyledProfile
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
            <Profile>
            <UserPhoto></UserPhoto>
            <UserAddress>UserAddress</UserAddress>
            </Profile>
            <div>
                
            </div>
        </StyledProfile>
    )
}
export default User
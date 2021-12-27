import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledProfile = styled(motion.div)`
    display: flex;
    justify-content: center;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
`
export const UserPhoto = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    margin: 2rem;
    background-image: linear-gradient(45deg, #0151ffe3 0%, #ea01ff 100%);
    border-radius: 50%;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`
export const UserAddress = styled.div`
    width: 13rem;
    height: 2rem;
    background-image: linear-gradient(45deg, #0151ffe3 0%, #ea01ff 100%);
    border-radius: 0.5rem;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`
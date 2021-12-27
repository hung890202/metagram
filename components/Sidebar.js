import Link from "next/link";
import { StyledSidebar, StyledMeun, MeunItem, CloseBtn } from "./SidebarStyles";
import SidebarData from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const DropDown = ({ isOpen, toggle }) => {
//   const ContactUs = (e) => {
//     e.preventDefault();
//     window.open("https://www.instagram.com/astn.0820_/");
//   };

  return (
    <>
      {isOpen ? (
        <StyledSidebar
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <StyledMeun>
            {SidebarData.map((item, index) => {
              return (
                <Link href={`${item.path}`} passHref key={index}>
                  <MeunItem
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggle}
                  >
                    {item.title}
                  </MeunItem>
                </Link>
              );
            })}
          </StyledMeun>
          <CloseBtn
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </CloseBtn>
        </StyledSidebar>
      ) : (
        <StyledSidebar
          initial={{ y: 0 }}
          animate={{ y: -500 }}
          transition={{ duration: 1 }}
        ></StyledSidebar>
      )}
    </>
  );
};
export default DropDown;

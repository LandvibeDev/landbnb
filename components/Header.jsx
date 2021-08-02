import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/logo_text.svg";
import Image from 'next/image'

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;

  .header-logo-wrapper {
    display: flex;
    align-items: center;

    .header-logo {
      margin-right: 6px;
    }
  }

  .header-menu-wrapper {
    .header-menu {
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-weight: 600;

      &:hover {
        background-color: #f7f7f7;
      }
    }
  }


`;

const Header = () => {
    return (
        <Container>
            {/*<Link href="/">*/}
            {/*    <a className="header-logo-wrapper">*/}
            {/*        <Image src={AirbnbLogoIcon} className="header-logo"/>*/}
            {/*        <Image src={AirbnbLogoTextIcon}/>*/}
            {/*    </a>*/}
            {/*</Link>*/}

        </Container>
    );
};

export default Header;

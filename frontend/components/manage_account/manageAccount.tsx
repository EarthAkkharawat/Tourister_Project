import { useState, MouseEvent } from "react";
import Link from "next/link";
import { COLOR } from "@/theme/globalTheme";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { UserInterface } from "@/interfaces/UserInterface";

type AccountType = "tourist" | "guide";

const ProfileBox = styled.div`
  width: 80%;
  height: 11rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0.1rem 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;

const Button = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4.75rem;
  background: none;
  border: none;
  padding: 0;
`;

const manageAccount = () => {
  let user:UserInterface
  if (typeof window !== 'undefined') {
    // console.log('we are running on the client');
    user = JSON.parse(localStorage.getItem("user")||`{"name":"Name","surname":"Surname","remainingAmount":0,"isGuide":"true"}`)
  } else {
    // console.log('we are running on the server');
    user = JSON.parse(`{"name":"Name","surname":"Surname","remainingAmount":0,"isGuide":"true"}`)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const accountType = user.isGuide ? "Guide" : "Tourist";
  return (
    <form
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <ProfileBox style={{ backgroundColor: COLOR.primary }}>
        <div style={{width:"100%",height:"5.5rem",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",alignSelf:"flex-start",marginTop:"0.3rem",paddingLeft:"15%"}}>
          <div style={{backgroundColor:"white",width:"3.4rem",height:"3.4rem",borderRadius:"1.7rem",marginTop:0,marginBottom:0}}></div>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"1rem"}}>
            <h5 style={{color:"white",marginTop:"0.5rem",marginBottom:0}}>{`hello ${accountType}`}</h5>
            <h3 style={{color:"white",marginTop:0,marginBottom:0,fontWeight:"bolder"}}>{`${user.name} ${user.surname}`}</h3>
          </div>
        </div>
        <div style={{width:"70%",height:"0.07rem",backgroundColor:"white"}}/>
        <div style={{width:"100%",height:"4.43rem",alignSelf:"flex-start",paddingLeft:"15%"}}>
          <h5 style={{color:"white",marginTop:"0.8rem",marginBottom:0}}>Total</h5>
          <h2 style={{color:"white",marginTop:0,marginBottom:0}}>{`THB ${user.remainingAmount}`}</h2>
        </div>
      </ProfileBox>
      <Link
        href="./manage_account/editProfile"
        style={{ width: "100%", textDecoration: "none" }}
        passHref
      >
        <Button>
          <PersonOutlinedIcon
            style={{ width: "20%", color: "gray" }}
          ></PersonOutlinedIcon>
          <h3
            style={{
              width: "60%",
              paddingTop: "0.1rem",
              textAlign: "left",
              fontFamily: "Poppins",
              fontSize: "1.05rem",
            }}
          >
            Edit Profile
          </h3>
          <NavigateNextOutlinedIcon
            style={{ width: "20%", color: "gray" }}
          ></NavigateNextOutlinedIcon>
        </Button>
      </Link>
      <Link href="" style={{ width: "100%", textDecoration: "none" }} passHref>
        <Button>
          <SwapHorizOutlinedIcon style={{ width: "20%", color: "gray" }} />
          <h3
            style={{
              width: "60%",
              paddingTop: "0.1rem",
              textAlign: "left",
              fontFamily: "Poppins",
              fontSize: "1.05rem",
            }}
          >
            Transfer Funds
          </h3>
          <NavigateNextOutlinedIcon style={{ width: "20%", color: "gray" }} />
        </Button>
      </Link>
      <Link href="" style={{ width: "100%", textDecoration: "none" }} passHref>
        <Button>
          <LogoutOutlinedIcon style={{ width: "20%", color: "gray" }} />
          <h3
            style={{
              width: "60%",
              paddingTop: "0.1rem",
              textAlign: "left",
              fontFamily: "Poppins",
              fontSize: "1.05rem",
            }}
          >
            Log Out
          </h3>
          <NavigateNextOutlinedIcon style={{ width: "20%", color: "gray" }} />
        </Button>
      </Link>
    </form>
  );
};

export default manageAccount;

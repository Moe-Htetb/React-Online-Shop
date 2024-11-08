import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import CardSection from "../components/CardSection";

function MyCard() {
  return (
    <Container>
      <BreadCrumb CurrentPageTitle="My Card" />
      <CardSection />
    </Container>
  );
}

export default MyCard;

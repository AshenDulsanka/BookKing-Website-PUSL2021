<template>
    <div class="vehicle">
      <div class="div-2">
        <Group />
        <Header />
        <Footer />
        <div class="text-wrapper-49">Select your vehicle</div>
        <GroupWrapper />
        <DivWrapper />
        <Div />
        <SectionComponentNode />
        <NamecandidateNameGroupScore10001 />
        <NamecandidateNameGroupScore10002 />
      </div>
    </div>
  </template>
  
  <script>
  import { Group } from "./Group";
  import { Header } from "./Header";
  import { Footer } from "./Footer";
  import { GroupWrapper } from "./GroupWrapper";
  import { DivWrapper } from "./DivWrapper";
  import { Div } from "./Div";
  import { SectionComponentNode } from "./SectionComponentNode";
  import { NamecandidateNameGroupScore10001 } from "./NamecandidateNameGroupScore10001";
  import { NamecandidateNameGroupScore10002 } from "./NamecandidateNameGroupScore10002";
  
  export default {
    name: "Vehicle",
    components: {
      Group,
      Header,
      Footer,
      GroupWrapper,
      DivWrapper,
      Div,
      SectionComponentNode,
      NamecandidateNameGroupScore10001,
      NamecandidateNameGroupScore10002,
    },
  };
  </script>
  
  <style>
  .vehicle {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .vehicle .div-2 {
    background-color: #ffffff;
    height: 4051px;
    overflow: hidden;
    position: relative;
    width: 1920px;
  }
  
  .vehicle .text-wrapper-49 {
    color: #000000;
    font-family: "Poppins-Bold", Helvetica;
    font-size: 36px;
    font-weight: 700;
    height: 43px;
    left: 99px;
    letter-spacing: 0;
    line-height: 43.3px;
    position: absolute;
    top: 540px;
    white-space: nowrap;
    width: 356px;
  }
  </style>
  
  
  
  
  
  
  
  
  
  
  
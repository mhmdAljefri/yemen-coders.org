import React from "react"
import styled from "styled-components"
import { ChevronDown } from "react-feather";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper";

const StyledCover = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
`

const StyledHeader = styled.h1`
  margin: 0 auto 20px;
  text-align: center;
  max-width: 700px;
  color: #000;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: ${({reverse}) => reverse && 'row-reverse'};
`

const Section = ({ hint, title, paragraph, style, reverse }) => (
  <section style={{ paddingTop: 50, paddingBottom: 50, ...style }}>
    <Wrapper>
      <StyledSection reverse={reverse}>
        <div style={{ width: 600 }}>
          <small>{hint}</small>
          <h2 style={{ fontSize: 60 }}>{title}</h2>
          <p style={{ fontSize: 25, maxWidth: 400 }}>{paragraph}</p>
          <strong>Sign as</strong>
        </div>
        <div>
          {/* <Img src="te" /> */}
        </div>
      </StyledSection>
    </Wrapper>
  </section>
);

const StyledSpan = styled.span`
  position: absolute;
  bottom: 20px;
  padding-top: 10px;
  text-align: center;
  right: 0;
  left: 0;
  display: flex;
  height: 50px;
  line-height: 50px;
  align-content: center;
  justify-content: center;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: calc(50% - 25px);
    display: block;
    animation: pulsate 2s ease-in-out infinite;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #999;
  }

  @keyframes pulsate {
    0% {
      transform: scale(1);
      opacity: .8;
    }
    45% {
      transform: scale(1.75);
      opacity: 0;
    }
  }
`

const KEYWORDS = [
  'Yemenies',
  'web developers',
  'web',
  'developers',
  'mobile',
  'ios',
  'react',
  'native',
  'angular',
  'vuejs',
  'js',
  'c#',
  'c++',
  'Ruby',
];

const sections = [
  {
    style: { background: '#c0170b', color: '#fff' },
    title: 'Students',
    paragraph: 'Our students come from a variety of backgrounds. Some want to become full-time developers, whereas some would like to learn the basics of coding in a supportive environment. \nSign up to join our vibrant community and attend our workshops.'
  },
  {
    title: 'Coaches',
    reverse: true,
    paragraph: 'We encourage new students to work on our HTML/CSS, JavaScript, Ruby, Python or Git tutorials. We also help them understand programming concepts.\n\nTherefore are always on the lookout for more developers to join our community and help coach at our workshops.'
  },
  {
    style: { background: '#101010', color: '#fff' },
    title: 'Workshops',
    paragraph: 'We are hosted by some amazing companies who support our cause. Our normal format is 30 minutes of socialising with food and drink, followed by a lightning talk then coding.\n\nHelp our expansion and enable us to provide help and support to our chapters by hosting and sponsoring our workshops.'
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Yemenies Coders" keywords={KEYWORDS} />
    <StyledCover>
      <Wrapper>
      <StyledHeader className="gradient-color">
        We are non-profit initiative that facilitates the growth of a diverse tech community by running regular programming workshops.
      </StyledHeader>
        <h3 style={{ fontSize: 20, lineHeight: '24px', maxWidth: 600, margin: 'auto', textAlign: "center" }}>
          Our goal is to enable underrepresented people to learn programming in a safe and collaborative environment and expand their career opportunities. To achieve this we run free regular workshops, regular one-off events and try to create opportunities for our students making technology and coding more accessible.
        </h3>
        <StyledSpan><ChevronDown size={30} color="#999" /></StyledSpan>
      </Wrapper>
    </StyledCover>
    <div>
      {sections.map((section, index) => <Section key={index} {...section} />)}
    </div>
    <Wrapper>
      <p>No events yet.</p>
    </Wrapper>
  </Layout>
)

export default IndexPage

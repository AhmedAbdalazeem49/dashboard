import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Header from "../../components/Header";

function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack direction={"column"} gap={2}>
      <Header title={"FAQ"} subTitle={"Frequently Asked Questions Page"} />
      <Accordion onChange={handleChange("marketing")} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="marketing-content"
          id="marketing-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Marketing Strategies
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Explore effective marketing tactics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Learn about SEO, social media marketing, content marketing, and
            more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "business"}
        onChange={handleChange("business")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="business-content"
          id="business-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Business Development
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Strategies for business growth
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Discover how to scale your business, manage finances, and build
            partnerships.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "programming"}
        onChange={handleChange("programming")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="programming-content"
          id="programming-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Programming Languages
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Master coding languages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Explore JavaScript, Python, Java, and other programming languages.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "web-development"}
        onChange={handleChange("web-development")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="web-development-content"
          id="web-development-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Web Development
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Build modern web applications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Learn HTML, CSS, JavaScript frameworks like React and Vue, and
            backend technologies like Node.js and Django.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "digital-marketing"}
        onChange={handleChange("digital-marketing")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="digital-marketing-content"
          id="digital-marketing-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Digital Marketing
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Reach your target audience online
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Explore SEO, social media marketing, email marketing, PPC
            advertising, and content strategy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "startup-strategies"}
        onChange={handleChange("startup-strategies")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="startup-strategies-content"
          id="startup-strategies-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Startup Strategies
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Launch and grow your startup
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Discover lean startup methodology, fundraising, product-market fit,
            and scaling tactics.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "data-science"}
        onChange={handleChange("data-science")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="data-science-content"
          id="data-science-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Data Science
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Analyze and interpret data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dive into data analytics, machine learning, data visualization, and
            big data technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "leadership-skills"}
        onChange={handleChange("leadership-skills")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="leadership-skills-content"
          id="leadership-skills-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Leadership Skills
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Become an effective leader
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Develop communication skills, decision-making abilities, team
            building, and conflict resolution.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default Faq;

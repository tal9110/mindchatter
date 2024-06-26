import React from "react";
import Mindchattter from "./Mindchatter";
import { Center, Image, Stack, Text } from "@mantine/core";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  rem,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import { useState } from "react";
import { Paper, Transition } from "@mantine/core";
import { useEffect } from "react";
import { Modal } from "@mantine/core";
import { isMobile } from "react-device-detect";
import MindchattterMobile from "./MindChatterMobile";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(300),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  link: {
    display: "block",
    lineHeight: 0.8,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "white",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[7],
    },
  },

  // linkActive: {
  //   "&, &:hover": {
  //     backgroundColor: theme.fn.variant({
  //       variant: "light",
  //       color: theme.colors.gray[7],
  //     }).background,
  //     color: theme.fn.variant({ variant: "light", color: theme.colors.gray[7] })
  //       .color,
  //   },
  // },
  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  linkActive: {
    backgroundColor: theme.colors.dark[6],
    "&, &:hover": {
      color: "white",
    },
  },

  transitions: {
    cursor: "pointer",
    transition: "transform 0.4s, color 0.6s, textDecoration 0.5s",

    "&:hover, &.active": {
      textDecoration: "underline",
      transform: "scale(1.05)",
      color: theme.colorScheme === "dark" ? "white" : "white",
    },
  },
}));

function useScript(src) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

function MyComponent(props) {
  // This will add the script when MyComponent mounts and remove it when MyComponent unmounts
  // useScript("https://laylo.com/embeds/multidrop.js");
  useScript("https://widgetv3.bandsintown.com/main.min.js"); // Adding Bandsintown script

  const [opacity, setOpacity] = React.useState(0); // set opacity to 0 by default
  const isMobile = window.innerWidth <= 768; // Detect if on mobile

  useEffect(() => {
    if (props.modelInView === "shows") {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [props.modelInView]);

  return (
    <>
      {isMobile ? (
        <div
          style={{
            marginTop: "60px",
            position: "absolute",
            zIndex: 0,
            height: "80vh",
            width: "100vw",
            opacity: opacity,
            transition: "opacity 1s ease-in-out",
            overflowY: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              marginTop: "70px",
              position: "absolute",
              zIndex: 0,
              height: "65vh",
              width: "50vw",
              opacity: opacity,
              transition: "opacity 1s ease-in-out",
              overflowY: "auto",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <a
              class="bit-widget-initializer"
              data-artist-name="id_15393755"
              data-background-color="rgba(0,0,0,1)"
              data-separator-color="#DDDDDD"
              data-text-color="rgba(255,255,255,1)"
              data-font="Monaco"
              data-auto-style="true"
              data-button-label-capitalization="capitalize"
              data-header-capitalization="undefined"
              data-location-capitalization="capitalize"
              data-venue-capitalization="capitalize"
              data-local-dates-position="tab"
              data-display-details="false"
              data-display-lineup=""
              data-display-start-time=""
              data-social-share-icon="true"
              data-display-limit="all"
              data-date-format="MMM. D, YYYY"
              data-date-orientation="horizontal"
              data-date-border-color="#4A4A4A"
              data-date-border-width="1px"
              data-date-capitalization="undefined"
              data-date-border-radius="10px"
              data-event-ticket-cta-size="medium"
              data-event-custom-ticket-text="undefined"
              data-event-ticket-text="TICKETS"
              data-event-ticket-icon=""
              data-event-ticket-cta-text-color="rgba(255,255,255,1)"
              data-event-ticket-cta-bg-color="rgba(255,255,255,1)"
              data-event-ticket-cta-border-color="rgba(255,255,255,1)"
              data-event-ticket-cta-border-width="1px"
              data-event-ticket-cta-border-radius="4px"
              data-sold-out-button-text-color="#FFFFFF"
              data-sold-out-button-background-color="#4A4A4A"
              data-sold-out-button-border-color="#4A4A4A"
              data-sold-out-button-clickable="true"
              data-event-rsvp-position="left"
              data-event-rsvp-cta-size="medium"
              data-event-rsvp-only-show-icon="undefined"
              data-event-rsvp-text="REMIND ME"
              data-event-rsvp-icon=""
              data-event-rsvp-cta-text-color="#4A4A4A"
              data-event-rsvp-cta-bg-color="#FFFFFF"
              data-event-rsvp-cta-border-color="#4A4A4A"
              data-event-rsvp-cta-border-width="1px"
              data-event-rsvp-cta-border-radius="4px"
              data-follow-section-position="top"
              data-follow-section-alignment="center"
              data-follow-section-header-text="Get updates on new shows, new music, and more."
              data-follow-section-cta-size="medium"
              data-follow-section-cta-text="FOLLOW"
              data-follow-section-cta-icon="true"
              data-follow-section-cta-text-color="#FFFFFF"
              data-follow-section-cta-bg-color="#4A4A4A"
              data-follow-section-cta-border-color="#4A4A4A"
              data-follow-section-cta-border-width="0px"
              data-follow-section-cta-border-radius="4px"
              data-play-my-city-position="bottom"
              data-play-my-city-alignment="Center"
              data-play-my-city-header-text="Don’t see a show near you?"
              data-play-my-city-cta-size="medium"
              data-play-my-city-cta-text="REQUEST A SHOW"
              data-play-my-city-cta-icon="true"
              data-play-my-city-cta-text-color="#FFFFFF"
              data-play-my-city-cta-bg-color="#4A4A4A"
              data-play-my-city-cta-border-color="#4A4A4A"
              data-play-my-city-cta-border-width="0px"
              data-play-my-city-cta-border-radius="4px"
              data-optin-font=""
              data-optin-text-color=""
              data-optin-bg-color=""
              data-optin-cta-text-color=""
              data-optin-cta-bg-color=""
              data-optin-cta-border-width=""
              data-optin-cta-border-radius=""
              data-optin-cta-border-color=""
              data-language="en"
              data-layout-breakpoint="900"
              data-app-id=""
              data-affil-code=""
              data-bit-logo-position="bottomRight"
              data-bit-logo-color="#CCCCCC"
            ></a>
          </div>
          {/* <div
            style={{
              width: "90%",
              height: "80%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            id="multidrop"
            data-theme="dark"
            data-username="mindchatter_"
            data-slug="achorusofmonologuestour"
            data-color="#070b11"
            data-minimal="false"
          /> */}
        </div>
      ) : (
        <div
          style={{
            marginTop: "30px",
            position: "absolute",
            zIndex: 0,
            height: "65vh",
            width: "50vw",
            opacity: opacity,
            transition: "opacity 1s ease-in-out",
            overflowY: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              marginTop: "30px",
              position: "absolute",
              zIndex: 0,
              height: "65vh",
              width: "50vw",
              opacity: opacity,
              transition: "opacity 1s ease-in-out",
              overflowY: "auto",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <a
              class="bit-widget-initializer"
              data-artist-name="id_15393755"
              data-background-color="rgba(0,0,0,1)"
              data-separator-color="#DDDDDD"
              data-text-color="rgba(255,255,255,1)"
              data-font="Monaco"
              data-auto-style="true"
              data-button-label-capitalization="capitalize"
              data-header-capitalization="undefined"
              data-location-capitalization="capitalize"
              data-venue-capitalization="capitalize"
              data-local-dates-position="tab"
              data-display-details="false"
              data-display-lineup=""
              data-display-start-time=""
              data-social-share-icon="true"
              data-display-limit="all"
              data-date-format="MMM. D, YYYY"
              data-date-orientation="horizontal"
              data-date-border-color="#4A4A4A"
              data-date-border-width="1px"
              data-date-capitalization="undefined"
              data-date-border-radius="10px"
              data-event-ticket-cta-size="medium"
              data-event-custom-ticket-text="undefined"
              data-event-ticket-text="TICKETS"
              data-event-ticket-icon=""
              data-event-ticket-cta-text-color="rgba(255,255,255,1)"
              data-event-ticket-cta-bg-color="rgba(255,255,255,1)"
              data-event-ticket-cta-border-color="rgba(255,255,255,1)"
              data-event-ticket-cta-border-width="1px"
              data-event-ticket-cta-border-radius="4px"
              data-sold-out-button-text-color="#FFFFFF"
              data-sold-out-button-background-color="#4A4A4A"
              data-sold-out-button-border-color="#4A4A4A"
              data-sold-out-button-clickable="true"
              data-event-rsvp-position="left"
              data-event-rsvp-cta-size="medium"
              data-event-rsvp-only-show-icon="undefined"
              data-event-rsvp-text="REMIND ME"
              data-event-rsvp-icon=""
              data-event-rsvp-cta-text-color="#4A4A4A"
              data-event-rsvp-cta-bg-color="#FFFFFF"
              data-event-rsvp-cta-border-color="#4A4A4A"
              data-event-rsvp-cta-border-width="1px"
              data-event-rsvp-cta-border-radius="4px"
              data-follow-section-position="top"
              data-follow-section-alignment="center"
              data-follow-section-header-text="Get updates on new shows, new music, and more."
              data-follow-section-cta-size="medium"
              data-follow-section-cta-text="FOLLOW"
              data-follow-section-cta-icon="true"
              data-follow-section-cta-text-color="#FFFFFF"
              data-follow-section-cta-bg-color="#4A4A4A"
              data-follow-section-cta-border-color="#4A4A4A"
              data-follow-section-cta-border-width="0px"
              data-follow-section-cta-border-radius="4px"
              data-play-my-city-position="bottom"
              data-play-my-city-alignment="Center"
              data-play-my-city-header-text="Don’t see a show near you?"
              data-play-my-city-cta-size="medium"
              data-play-my-city-cta-text="REQUEST A SHOW"
              data-play-my-city-cta-icon="true"
              data-play-my-city-cta-text-color="#FFFFFF"
              data-play-my-city-cta-bg-color="#4A4A4A"
              data-play-my-city-cta-border-color="#4A4A4A"
              data-play-my-city-cta-border-width="0px"
              data-play-my-city-cta-border-radius="4px"
              data-optin-font=""
              data-optin-text-color=""
              data-optin-bg-color=""
              data-optin-cta-text-color=""
              data-optin-cta-bg-color=""
              data-optin-cta-border-width=""
              data-optin-cta-border-radius=""
              data-optin-cta-border-color=""
              data-language="en"
              data-layout-breakpoint="900"
              data-app-id=""
              data-affil-code=""
              data-bit-logo-position="bottomRight"
              data-bit-logo-color="#CCCCCC"
            ></a>
          </div>
          {/* <div
            style={{
              width: "90%",
              height: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            id="multidrop"
            data-theme="dark"
            data-username="mindchatter_"
            data-slug="achorusofmonologuestour"
            data-color="#070b11"
            data-minimal="false"
          /> */}
        </div>
      )}
    </>
  );
}

function App() {
  // const [opened2, { open, close }] = useDisclosure(false);

  const links = [
    { label: "Home", link: "#home" },
    { label: "Shows", link: "#shows" },
    { label: "Merch", link: "#merch" },
    { label: "Contact", link: "#contact" },
  ];

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        if (link.label === "Home") {
          setModelInView("home");
        }
        if (link.label === "Shows") {
          setModelInView("shows");
        }
        if (link.label === "Merch") {
          setModelInView("merch");
        }
        if (link.label === "Contact") {
          setModelInView("contact");
        }
      }}
    >
      {link.label}
    </a>
  ));

  const [modelInView, setModelInView] = useState("first");

  const [emailOpacity, setEmailOpacity] = React.useState(0); // set opacity to 0 by default

  useEffect(() => {
    if (modelInView === "contact") {
      setEmailOpacity(1); // set opacity to 1 when modelInView is "contact"
    } else {
      setEmailOpacity(0); // set opacity back to 0 for other values
    }
  }, [modelInView]);

  function handleInstagramClick() {
    window.open("https://www.instagram.com/mindchatter_/", "_blank");
  }

  function handleTwitterClick() {
    window.open("https://twitter.com/mindchatter_", "_blank");
  }

  function handleYoutubeClick() {
    window.open(
      "https://www.youtube.com/channel/UCvV7kIAoUiG25V5cfr7-xfA",
      "_blank"
    );
  }

  function handleEmailClick() {
    window.open("mailto:mindchattermusic@gmail.com", "_blank");
  }

  return (
    <>
      <MyComponent modelInView={modelInView} />

      <Header
        sx={{
          position: "absolute",
          zIndex: 1,
          border: "none",
          // top: "5%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          backgroundColor: "transparent",
        }}
        height={56}
        // mb={120}
      >
        {isMobile ? (
          <>
            <Container
              className={classes.inner}
              style={{ position: "relative", maxWidth: "100%" }}
            >
              <Burger
                color="white"
                opened={opened}
                onClick={toggle}
                size="sm"
                className={classes.burger}
              />

              <Group className={classes.links} spacing={5}>
                {items}
              </Group>

              <Image
                onClick={() => setModelInView("home")}
                sx={{ cursor: "pointer" }}
                src={"/mindlogo.png"}
                width={200}
              />
              {modelInView === "contact" && (
                <Container
                  style={{
                    position: "absolute",
                    top: "90%",
                    left: "50%",
                    transform: "translate(-50%, 20%)",
                    zIndex: 1000,

                    opacity: emailOpacity,
                    transition: "opacity 1.5s ease-in-out",
                    maxWidth: "100vw", // Set a max width for better fit on mobile devices.
                    margin: "auto", // Center the container.
                  }}
                >
                  <Stack pt={5} spacing={3}>
                    {" "}
                    {/* Reduced padding and spacing for mobile. */}
                    <Text
                      cursor="pointer"
                      color="dimmed"
                      fontSize={{ base: "18px", md: "25px" }} // Responsive font size.
                      sx={{
                        letterSpacing: "1px", // Slightly reduced letterSpacing for mobile.
                        display: "flex",
                        flexDirection: "column", // Stack email and "Contact:" on top of each other for better mobile readability.
                        alignItems: "center", // Center align content.
                        padding: "5px",
                        fontFamily: "OffBit, sans-serif",
                        borderRadius: "5px",
                        border: "1px solid #e0e0e0",
                        fontStyle: "italic",
                        "::before": {
                          content: '"Contact:"',
                          fontStyle: "normal",
                          fontWeight: "bold",
                          color: "white",
                        },
                      }}
                    >
                      <a
                        href="mailto:mindchattermusic@gmail.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        mindchattermusic@gmail.com
                      </a>
                    </Text>
                    {/* Management */}
                    <Text
                      cursor="pointer"
                      color="dimmed"
                      fontSize={{ base: "18px", md: "25px" }}
                      sx={{
                        letterSpacing: "1px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "5px",
                        fontFamily: "OffBit, sans-serif",
                        borderRadius: "5px",
                        border: "1px solid #e0e0e0",
                        fontStyle: "italic",
                        "::before": {
                          content: '"Management:"',
                          fontStyle: "normal",
                          fontWeight: "bold",
                          color: "white",
                        },
                      }}
                    >
                      <a
                        href="mailto:andrew@night-tones.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        andrew@night-tones.com
                      </a>

                      <a
                        href="mailto:connor@night-tones.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        connor@night-tones.com
                      </a>
                    </Text>
                    {/* Bookings */}
                    <Text
                      cursor="pointer"
                      color="dimmed"
                      fontSize={{ base: "18px", md: "25px" }}
                      sx={{
                        letterSpacing: "1px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "5px",
                        fontFamily: "OffBit, sans-serif",
                        borderRadius: "5px",
                        border: "1px solid #e0e0e0",
                        fontStyle: "italic",
                        "::before": {
                          content: '"Bookings:"',
                          fontStyle: "normal",
                          fontWeight: "bold",
                          color: "white",
                        },
                      }}
                    >
                      <a
                        href="mailto:jmoss@teamwass.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        jmoss@teamwass.com
                      </a>

                      <a
                        href="mailto:lchenfeld@teamwass.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        lchenfeld@teamwass.com
                      </a>
                    </Text>
                  </Stack>
                </Container>
              )}
              <Center>
                <Group spacing={2} noWrap position="right">
                  <ActionIcon variant="transparent" size="lg">
                    <IconBrandInstagram
                      onClick={handleInstagramClick}
                      size="1.2rem"
                      stroke={2}
                    />
                  </ActionIcon>
                  <ActionIcon variant="transparent" size="lg">
                    <IconBrandTwitter
                      onClick={handleTwitterClick}
                      size="1.2rem"
                      stroke={2}
                    />
                  </ActionIcon>
                  <ActionIcon variant="transparent" size="lg">
                    <IconBrandYoutube
                      onClick={handleYoutubeClick}
                      size="1.2rem"
                      stroke={2}
                    />
                  </ActionIcon>
                  <ActionIcon variant="transparent" size="lg">
                    <IconMail size="1.2rem" stroke={2} />
                  </ActionIcon>
                </Group>
              </Center>
            </Container>
          </>
        ) : (
          <>
            {/* <Modal
              opened={opened2}
              onClose={close}
              // title="Contact"
              centered
            ></Modal> */}
            {/* <Container className={classes.inner} style={{ maxWidth: "100%" }}>
          <Burger
            color="white"
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
          /> */}
            {/* <Group className={classes.links} spacing={5}>
            {items}
          </Group> */}
            <Center mt={15}>
              <Image
                onClick={() => setModelInView("home")}
                sx={{ cursor: "pointer" }}
                src={"/mindlogo.png"}
                width={200}
              />
            </Center>
            {modelInView === "contact" && (
              <Container
                style={{
                  opacity: emailOpacity,
                  transition: "opacity 1.5s ease-in-out",
                }}
              >
                <Stack pt={15} spacing={5}>
                  <Text
                    cursor="pointer"
                    color="dimmed"
                    size={25}
                    sx={{
                      letterSpacing: "1.5px",
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                      padding: "10px",
                      fontFamily: "OffBit, sans-serif",
                      // background: "#f5f5f5",
                      borderRadius: "5px",
                      border: "1px solid #e0e0e0",
                      fontStyle: "italic",
                      "::before": {
                        content: '"Contact:"',
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "white",
                      },
                    }}
                  >
                    <a
                      href="mailto:mindchattermusic@gmail.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      mindchattermusic@gmail.com
                    </a>{" "}
                  </Text>
                  <Text
                    cursor="pointer"
                    color="dimmed"
                    size={25}
                    sx={{
                      letterSpacing: "1.5px",
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                      padding: "10px",
                      fontFamily: "OffBit, sans-serif",
                      // background: "#f5f5f5",
                      borderRadius: "5px",
                      border: "1px solid #e0e0e0",
                      fontStyle: "italic",
                      "::before": {
                        content: '"Management:"',
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "white",
                      },
                    }}
                  >
                    <a
                      href="mailto:andrew@night-tones.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      andrew@night-tones.com
                    </a>
                    /
                    <a
                      href="mailto:connor@night-tones.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      connor@night-tones.com
                    </a>{" "}
                  </Text>
                  <Text
                    cursor="pointer"
                    color="dimmed"
                    size={25}
                    sx={{
                      letterSpacing: "1.5px",
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                      padding: "10px",
                      fontFamily: "OffBit, sans-serif",
                      // background: "#f5f5f5",
                      borderRadius: "5px",
                      border: "1px solid #e0e0e0",
                      fontStyle: "italic",
                      "::before": {
                        content: '"Bookings:"',
                        fontStyle: "normal",
                        fontWeight: "bold",
                        color: "white",
                      },
                    }}
                  >
                    <a
                      href="mailto:mjmoss@teamwass.co"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      jmoss@teamwass.com
                    </a>
                    /
                    <a
                      href="mailto:lchenfeld@teamwass.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      lchenfeld@teamwass.com{" "}
                    </a>{" "}
                  </Text>
                </Stack>
              </Container>
            )}

            {/* <Center> */}
            <Stack
              align="stretch"
              justify="center"
              spacing="xs"
              sx={{
                position: "fixed",
                bottom: "10px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Group spacing={2} position="center" noWrap>
                <ActionIcon
                  variant="transparent"
                  size="lg"
                  onClick={handleInstagramClick}
                >
                  <IconBrandInstagram size="1.1rem" stroke={2} />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  size="lg"
                  onClick={handleTwitterClick}
                >
                  <IconBrandTwitter size="1.1rem" stroke={2} />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  size="lg"
                  onClick={handleYoutubeClick}
                >
                  <IconBrandYoutube size="1.1rem" stroke={2} />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  size="lg"
                  onClick={handleEmailClick}
                >
                  <IconMail size="1.1rem" stroke={2} />
                </ActionIcon>
              </Group>
              <Center>
                <Text
                  size={17}
                  // size={"sm"}
                  // color="white"
                  // onClick={open}
                  onClick={() => setModelInView("contact")}
                  color="dimmed"
                  sx={{
                    textAlign: "center",
                    // padding: "10px",
                    cursor: "pointer",
                    fontFamily: "OffBit, sans-serif",
                    borderRadius: "5px",
                    textDecoration:
                      modelInView === "shows" ? "underline" : "none",
                    transform: modelInView === "shows" ? "scale(1.05)" : "none",
                  }}
                >
                  C O N T A C T
                </Text>
              </Center>
            </Stack>
            {/* </Center> */}
            {/* </Container> */}
          </>
        )}

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              sx={{ background: "none", backgroundColor: "transparent" }}
              className={classes.dropdown}
              style={styles}
            >
              <Center>{items}</Center>
            </Paper>
          )}
        </Transition>
      </Header>

      {!isMobile && (
        <>
          {" "}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%) rotate(-90deg)",
            }}
          >
            <Text
              onClick={() => setModelInView("shows")}
              className={classes.transitions}
              size={30}
              // color="dimmed"
              color={modelInView === "shows" ? "white" : "dimmed"}
              sx={{
                textAlign: "center",
                padding: "10px",
                fontFamily: "OffBit, sans-serif",
                borderRadius: "5px",
                textDecoration: modelInView === "shows" ? "underline" : "none",
                transform: modelInView === "shows" ? "scale(1.05)" : "none",
              }}
            >
              S H O W S
            </Text>
          </div>
          {/* Right Text ("Merch") */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "10%",
              transform: "translateY(-50%) rotate(90deg)",
            }}
          >
            <Text
              onClick={() => setModelInView("merch")}
              className={classes.transitions}
              size={30}
              color={modelInView === "merch" ? "white" : "dimmed"}
              sx={{
                textAlign: "center",
                padding: "10px",
                fontFamily: "OffBit, sans-serif",
                borderRadius: "5px",
                textDecoration: modelInView === "merch" ? "underline" : "none",
                transform: modelInView === "merch" ? "scale(1.05)" : "none",
              }}
            >
              M E R C H
            </Text>
          </div>
        </>
      )}

      {isMobile ? (
        <MindchattterMobile modelInView={modelInView} />
      ) : (
        <Mindchattter modelInView={modelInView} />
      )}
    </>
  );
}

export default App;

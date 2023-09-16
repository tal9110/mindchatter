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
    script.type = "module";
    script.src = src;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

function MyComponent(props) {
  // This will add the script when MyComponent mounts and remove it when MyComponent unmounts
  useScript("https://laylo.com/embeds/multidrop.js");

  const [opacity, setOpacity] = React.useState(0); // set opacity to 0 by default

  useEffect(() => {
    if (props.modelInView === "shows") {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [props.modelInView]);

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 0,
        height: "100vh",
        width: "100vw",
        opacity: opacity,
        transition: "opacity 1s ease-in-out", // this adds the animation effect
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        id="multidrop"
        data-theme="dark"
        data-username="mindchatter_"
        data-slug="Se3SH"
        data-color="#b6bdce"
        data-minimal="false"
      ></div>
    </div>
  );
}

function App() {
  // const [opened2, { open, close }] = useDisclosure(false);

  const links = [
    { label: "Home", link: "#home" },
    // { label: "About", link: "#about" },
    { label: "Shows", link: "#shows" },
    { label: "Merch", link: "#merch" },
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
        if (link.label === "Merch") {
          setModelInView("second");
        } else {
          setModelInView("first");
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
            <Container className={classes.inner} style={{ maxWidth: "100%" }}>
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
              <Center>
                <Group spacing={2} noWrap position="right">
                  <ActionIcon variant="transparent" size="lg">
                    <IconBrandInstagram size="1.2rem" stroke={2} />
                  </ActionIcon>
                  <ActionIcon variant="transparent" size="lg">
                    <IconBrandTwitter size="1.2rem" stroke={2} />
                  </ActionIcon>
                  <ActionIcon variant="transparent" size="lg">
                    <IconBrandYoutube size="1.2rem" stroke={2} />
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
                      href="mailto:jmoss@teamwass.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      jmoss@teamwass.com
                    </a>
                    /
                    <a
                      href="mailto:lchenfeld@night-tones.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      lchenfeld@night-tones.com
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

      <Mindchattter modelInView={modelInView} />
    </>
  );
}

export default App;

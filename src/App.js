import React from "react";
import Mindchattter from "./Mindchatter";
import { Center, Image } from "@mantine/core";
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
} from "@tabler/icons-react";
import { useState } from "react";
import { Paper, Transition } from "@mantine/core";

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
}));

function App() {
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

  return (
    <>
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
        <Container className={classes.inner} style={{ maxWidth: "100%" }}>
          <Burger
            color="white"
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
          />

          {/* <Group className={classes.links} spacing={5}>
            {items}
          </Group> */}

          <Image src={"/mindlogo.png"} width={200} />
          <Group spacing={2} className={classes.social} position="right" noWrap>
            <ActionIcon variant="transparent" size="lg">
              <IconBrandInstagram size="1.2rem" stroke={2} />
            </ActionIcon>
            <ActionIcon variant="transparent" size="lg">
              <IconBrandTwitter size="1.2rem" stroke={2} />
            </ActionIcon>
            <ActionIcon variant="transparent" size="lg">
              <IconBrandYoutube size="1.2rem" stroke={2} />
            </ActionIcon>
          </Group>
        </Container>

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

      <Mindchattter modelInView={modelInView} />
    </>
  );
}

export default App;

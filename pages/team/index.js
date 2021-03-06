import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../../src/Link";

import Typography from "@material-ui/core/Typography";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyle = makeStyles((theme) => ({
    TeamContainer: {
        height: "auto",
        backgroundColor: "#fff",
        paddingBottom: 45,
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {
            paddingBottom: 0,
        },
    },
    BgContainer: {
        backgroundImage: `url(${"/bgAboutus.png"})`,
        height: " auto",
        paddingTop: 656,
        backgroundSize: "100%",
        [theme.breakpoints.down("lg")]: {
            height: 555,
            paddingTop: 490,
        },
        [theme.breakpoints.down("md")]: {
            height: 410,
            paddingTop: 365,
        },
        [theme.breakpoints.down("sm")]: {
            height: 261,
            paddingTop: 239,
        },
        [theme.breakpoints.down("xs")]: {
            height: 138,
            paddingTop: 123,
        },
    },
    BlogContainer: {
        paddingBottom: 46,
        [theme.breakpoints.down("xl")]: {
            maxWidth: 1720,
        },
        [theme.breakpoints.down("lg")]: {
            maxWidth: 1200,
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: 900,
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: 590,
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: 350,
        },
    },

    buttonaboutas: {
        background: "#F26705",
        marginTop: "40px",
        width: "120px",
    },
    aboutTypo1: {
        [theme.breakpoints.down("lg")]: {
            fontSize: 60,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 48,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
            textAlign: "left",
        },
    },
    aboutTypo2: {
        fontFamily: "Raleway",
        fontWeight: "bold",
        color: "#EF5666",
        [theme.breakpoints.down("lg")]: {
            fontSize: 28,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 6,
            textAlign: "left",
        },
    },
    aboutTypo3: {
        fontWeight: "bold",
        fontSize: 44,
        [theme.breakpoints.down("lg")]: {
            fontSize: 32,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 22,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 16,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
            textAlign: "left",
        },
    },
    Griditem1: {
        marginTop: 25,
        paddingLeft: 0,
        [theme.breakpoints.down("lg")]: {
            marginTop: 84,
        },
        [theme.breakpoints.down("md")]: {
            marginTop: 34,
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 5,
        },
    },
    Griditem2: {
        marginTop: 50,
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            marginTop: 0,
        },
    },
    Griditem3: {
        marginTop: 76,
        [theme.breakpoints.down("md")]: {
            fontSize: 22,
            marginTop: 68,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 16,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
            textAlign: "left",
            marginTop: 24,
        },
    },
    Griditem4: {
        marginTop: 46,
        textAlign: "center",
    },
    Griditem5: {
        marginTop: 16,
        textAlign: "center",
    },
    Griditem6: {
        marginTop: 46,
        textAlign: "center",
    },
    Griditem7: {
        marginTop: 46,
        textAlign: "center",
    },
    Typography1: {
        [theme.breakpoints.down("md")]: {
            fontSize: 40,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 24,
            textAlign: "left",
            paddingLeft: 16,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
            textAlign: "left",
            paddingLeft: 16,
        },
    },
    Typography2: {
        [theme.breakpoints.down("lg")]: {
            fontSize: 28,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 12,
            textAlign: "left",
            paddingLeft: 16,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 6,
            textAlign: "left",
            paddingLeft: 16,
        },
    },
    logo: {
        width: 120,
        [theme.breakpoints.down("sm")]: {
            width: 86,
        },
        [theme.breakpoints.down("xs")]: {
            width: 50,
        },
    },
    Aboutmenu: {
        backgroundColor: "#EAA0A8",
        color: "#000",
        borderRadius: "3px",
        zIndex: 1302,
    },
    AboutmenuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 11,
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 0,
        },
    },
    AboutMenu1: {
        paddingLeft: 132,
        [theme.breakpoints.down("lg")]: {
            paddingLeft: 104,
        },
        [theme.breakpoints.down("md")]: {
            paddingLeft: 30,
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 8,
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 0,
        },
    },
    nav: {
        paddingLeft: 0,
    },
    df: {
        borderRadius: "50%",
        width: "22%",
        [theme.breakpoints.down("md")]: {
            width: "30%",
        },
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
    },
    df1: {
        borderRadius: "50%",
        width: "12%",
        [theme.breakpoints.down("md")]: {
            width: "15%",
        },
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {
            width: "30%",
        },
    },
    df2: {
        borderRadius: "50%",
        width: "35%",
        [theme.breakpoints.down("md")]: {
            width: "30%",
        },
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
    },
    df3: {
        borderRadius: "50%",
        width: "35%",
        [theme.breakpoints.down("md")]: {
            width: "45%",
        },
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
    },
}));

export default function Home(props) {
    const classes = useStyle();
    // Require for bi-language
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const { formatMessage } = useIntl();
    const f = (id) => formatMessage({ id });
    // End of Requirement
    const [anchorEl, setAnchorEl] = useState(null);
    const [openAbout, setOpenAbout] = useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenAbout(true);
    };

    const handleAboutItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenAbout(false);
        setSelectedIndex(i);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenAbout(false);
    };

    const aboutMenuOptions = [
        {
            name: f("team"),
            link: "/team",
            selectedIndex: 0,
        },
        {
            name: f("related"),
            link: "/related",
            selectedIndex: 1,
        },
        {
            name: f("about"),
            link: "/about",
            selectedIndex: 2,
        },
    ];

    return (
        <React.Fragment>
            <main>
                <Header/>
                <Grid container className={classes.TeamContainer}>
                    <Container maxWidth="xl" className={classes.BlogContainer}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.BgContainer}>
                                <Typography variant="h1" className={classes.aboutTypo1}>
                                    {f("menuAbout")}
                                </Typography>
                                <Typography variant="h4" className={classes.aboutTypo2}>
                                    ABOUT US
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.Griditem1}>
                                <Button
                                    endIcon={<ExpandMoreIcon />}
                                    variant="text"
                                    className={classes.nav}
                                    aria-controls="about-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    size="large"
                                >
                                    <Typography variant="h3" className={classes.aboutTypo3}>
                                        {f("team")}
                                    </Typography>
                                </Button>
                                <Popper
                                    open={openAbout}
                                    anchorEl={anchorEl}
                                    role={undefined}
                                    transition
                                    disablePortal
                                    className={classes.AboutMenu1}
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin: placement === "top left",
                                            }}
                                        >
                                            <Paper className={classes.Aboutmenu} elevation={0}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList id="about-menu" disablePadding autoFocusItem={false}>
                                                        {aboutMenuOptions.map((option, i) => (
                                                            <MenuItem
                                                                key={`${option}${i}`}
                                                                component={Link}
                                                                href={option.link}
                                                                className={classes.AboutmenuItem}
                                                                selected={i === selectedIndex}
                                                                onClick={(event) => {
                                                                    handleAboutItemClick(event, i);

                                                                    handleClose();
                                                                }}
                                                            >
                                                                {option.name}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className={classes.Griditem2}>
                                <img alt="logo" src="/logo.png" className={classes.logo} />
                            </Grid>

                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} className={classes.Griditem3}>
                                <Typography variant="h3" className={classes.Typography1}>
                                    {f("rsia")}
                                </Typography>
                                <Typography variant="h4" className={classes.Typography2}>
                                    {f("rsiakku")}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.Griditem4}>
                                <img alt="person1" src="/0.png" className={classes.df} />
                                <Typography>???. ?????????????????????????????? ??????. ?????????????????? ????????????????????????</Typography>
                                <Typography>Suchat Paholpak</Typography>
                                <Typography>{f("member1")}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.Griditem4}>
                                <img alt="logo" src="/000.png" className={classes.df} />
                                <Typography>????????????????????? ???????????????????????????</Typography>
                                <Typography>Buree Seriyothin</Typography>
                                <Typography>{f("member1")}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.Griditem5}>
                                <img alt="logo" src="/1.png" className={classes.df1} />
                                <Typography>??????. ??????. ???????????????????????? ??????????????????????????????</Typography>
                                <Typography>Piyawan Srisuruk</Typography>
                                <Typography>{f("member11")}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                                <img alt="logo" src="/4.png" className={classes.df2} />
                                <Typography>???????????????????????? ??????????????????</Typography>
                                <Typography>Pronmanee Hanhak</Typography>
                                <Typography>{f("member111")}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                                <img alt="logo" src="/3.png" className={classes.df2} />
                                <Typography>??????????????????????????? ?????????????????????</Typography>
                                <Typography>Prison Anjumpa</Typography>
                                <Typography>{f("member1111")}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                                <img alt="logo" src="/2.png" className={classes.df2} />
                                <Typography>??????. ?????????????????? ????????????????????????</Typography>
                                <Typography>Thirakorn Maneerat</Typography>
                                <Typography>{f("member111111")}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.Griditem6}>
                                <img alt="logo" src="/12.png" className={classes.df2} />
                                <Typography>??????.??????. ???????????????????????? ???????????????????????????</Typography>
                                <Typography>Kusalaporn Chaiudomsom</Typography>
                                <Typography>{f("member111111")}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                                <img alt="logo" src="/6.png" className={classes.df3} />
                                <Typography>??????????????? ?????????????????????????????????</Typography>
                                <Typography>Jittra Shomuangshae</Typography>
                                <Typography>{f("member1111111")}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                                <img alt="logo" src="/8.png" className={classes.df3} />
                                <Typography>???????????????????????? ??????????????????????????????</Typography>
                                <Typography>Jiraporn Tangsombut</Typography>
                                <Typography>{f("member1111111")}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                                <img alt="logo" src="/11.png" className={classes.df3} />
                                <Typography>?????????????????? ?????????????????????????????????</Typography>
                                <Typography>Wannapa Ruengjan</Typography>
                                <Typography>{f("member1111111")}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                                <img alt="logo" src="/5.png" className={classes.df3} />
                                <Typography>??????????????????????????? ???????????????????????????</Typography>
                                <Typography>Thanyarat Chanseang</Typography>
                                <Typography>{f("member1111111")}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                                <img alt="logo" src="/7.png" className={classes.df3} />
                                <Typography>??????????????????????????? ??????????????????</Typography>
                                <Typography>Nitthanate Kasicha</Typography>
                                <Typography>{f("member11111111")}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4} lg={4} xl={2} className={classes.Griditem7}>
                                <img alt="logo" src="/10.png" className={classes.df3} />
                                <Typography>??????????????? ?????????????????????</Typography>
                                <Typography>Chanida Srimapol</Typography>
                                <Typography>{f("member111111111")}</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Footer></Footer>
            </main>
        </React.Fragment>
    );
}

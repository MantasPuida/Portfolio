import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Grid from "@mui/material/Grid/Grid";
import { SlideStyled } from "./app-header-styled";

interface OuterProps {
    children: React.ReactNode;
}

interface InnerProps {
    trigger: boolean;
}

type Props = OuterProps & InnerProps;

interface State {
    resize: boolean;
}

class AppHeaderClass extends React.PureComponent<Props, State> {
    public state: State = { resize: false };

    private readonly eventListenerType: keyof WindowEventMap = "scroll";

    public componentDidMount() {
        window.addEventListener(this.eventListenerType, this.handleScroll);
    }

    public componentWillUnmount(): void {
        window.removeEventListener(this.eventListenerType, this.handleScroll);
    }

    private handleScroll = () => {
        const { resize } = this.state;
        const shouldResizeHeader = window.pageYOffset > 400;

        if (resize !== shouldResizeHeader) {
            this.setState({ resize: shouldResizeHeader });
        }
    };

    public render(): React.ReactNode {
        const { resize } = this.state;
        const { children, trigger } = this.props;

        return (
            <Grid container={true}>
                <Grid item={true} xs={12}>
                    <SlideStyled width={resize ? "50%" : "100%"} appear={false} direction="down" in={!trigger}>
                        <AppBar>
                            <Toolbar>
                                <Typography variant="h6" component="div">
                                    Scroll to hide App bar
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </SlideStyled>
                    <Toolbar />
                </Grid>
                <Grid item={true} xs={12}>
                    {children}
                </Grid>
            </Grid>
        );
    }
}

export const AppHeader = React.memo<OuterProps>(props => {
    const trigger = useScrollTrigger({
        threshold: 600
    });

    return <AppHeaderClass {...props} trigger={trigger} />;
});

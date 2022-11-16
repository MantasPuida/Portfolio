import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { AppTheme, AppThemeInstance } from "./app-theme";
import { AppRouter } from "./routes/router";

export class App extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <ThemeProvider<AppTheme> theme={AppThemeInstance}>
                <StyledEngineProvider injectFirst={true}>
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </StyledEngineProvider>
            </ThemeProvider>
        );
    }
}

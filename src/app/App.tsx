import * as React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { AppTheme, AppThemeInstance } from "./app-theme";

export class App extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <ThemeProvider<AppTheme> theme={AppThemeInstance}>
                <StyledEngineProvider injectFirst={true}>Routes</StyledEngineProvider>
            </ThemeProvider>
        );
    }
}
